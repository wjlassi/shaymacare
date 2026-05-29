const express = require('express');
const path = require('path');
const { DatabaseSync } = require('node:sqlite');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

// Initialize Database
const db = new DatabaseSync('database.db');

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT NOT NULL
  )
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS patients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    status TEXT DEFAULT 'pending',
    nurse_name TEXT NOT NULL,
    doc_name TEXT,
    timestamp TEXT NOT NULL,
    data_json TEXT NOT NULL
  )
`);

// Seed default admin account if users table is empty
const checkUsers = db.prepare('SELECT COUNT(*) as count FROM users').get();
if (checkUsers.count === 0) {
  const insertUser = db.prepare('INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)');
  insertUser.run('Administrateur', 'admin@shaymacare.com', 'admin123', 'admin');
  console.log('Database pre-seeded with admin account.');
}

// ----------------- API Endpoints -----------------

// Login
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Register
app.post('/api/auth/register', (req, res) => {
  const { name, email, password, role } = req.body;
  if (!name || !email || !password || !role) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Check if user already exists
    const existing = db.prepare('SELECT id FROM users WHERE email = ?').get(email);
    if (existing) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    const insert = db.prepare('INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)');
    const result = insert.run(name, email, password, role);

    res.status(201).json({
      id: result.lastInsertRowid,
      name,
      email,
      role
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get patients
app.get('/api/patients', (req, res) => {
  try {
    const list = db.prepare('SELECT * FROM patients ORDER BY id DESC').all();
    const patients = list.map(row => {
      const data = JSON.parse(row.data_json);
      return {
        ...data,
        id: row.id,
        name: row.name,
        status: row.status,
        nurse_name: row.nurse_name,
        doc_name: row.doc_name,
        timestamp: row.timestamp
      };
    });
    res.json(patients);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add patient
app.post('/api/patients', (req, res) => {
  const patientData = req.body;
  if (!patientData || !patientData.name) {
    return res.status(400).json({ error: 'Patient data and name are required' });
  }

  try {
    const nurse_name = patientData.nurse_name || 'Inconnu';
    const timestamp = new Date().toLocaleString();
    
    const insert = db.prepare('INSERT INTO patients (name, status, nurse_name, timestamp, data_json) VALUES (?, ?, ?, ?, ?)');
    
    const data_json = JSON.stringify({
      ...patientData,
      status: 'pending',
      timestamp
    });

    const result = insert.run(patientData.name, 'pending', nurse_name, timestamp, data_json);
    res.status(201).json({ id: result.lastInsertRowid, message: 'Patient added successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update patient (Doctor validation/return or Nurse correction)
app.put('/api/patients/:id', (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  const userRole = req.headers['x-user-role'];

  if (!userRole) {
    return res.status(401).json({ error: 'Unauthorized: missing role header' });
  }

  try {
    const row = db.prepare('SELECT * FROM patients WHERE id = ?').get(id);
    if (!row) {
      return res.status(404).json({ error: 'Patient not found' });
    }
    const currentData = JSON.parse(row.data_json);

    let updatedStatus = row.status;
    let updatedDocName = row.doc_name;

    if (userRole === 'doctor') {
      if (updateData.status === 'returned') {
        updatedStatus = 'returned';
      } else {
        if (!updateData.doc_name) {
          return res.status(400).json({ error: 'Doctor name is required when validating care' });
        }
        updatedStatus = 'validated';
      }
      updatedDocName = updateData.doc_name || row.doc_name;
    } else if (userRole === 'nurse') {
      if (row.status !== 'returned') {
        return res.status(403).json({ error: 'Nurses can only modify returned patient records' });
      }
      updatedStatus = 'pending';
      // Clear doctor decision to allow doctor to re-evaluate
      delete updateData.doc_decision;
    } else {
      return res.status(403).json({ error: 'Unauthorized role' });
    }

    const updatedData = {
      ...currentData,
      ...updateData,
      status: updatedStatus,
      doc_name: updatedDocName
    };

    const update = db.prepare('UPDATE patients SET status = ?, doc_name = ?, data_json = ? WHERE id = ?');
    update.run(updatedStatus, updatedDocName, JSON.stringify(updatedData), id);
    res.json({ message: 'Patient updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete patient (Admin only)
app.delete('/api/patients/:id', (req, res) => {
  const { id } = req.params;
  try {
    const del = db.prepare('DELETE FROM patients WHERE id = ?');
    del.run(id);
    res.json({ message: 'Patient record deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// ----------------- Administrative Endpoints -----------------

// List all users
app.get('/api/admin/users', (req, res) => {
  try {
    const users = db.prepare('SELECT id, name, email, role FROM users').all();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update user details
app.put('/api/admin/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, email, role } = req.body;
  if (!name || !email || !role) {
    return res.status(400).json({ error: 'Name, email, and role are required' });
  }

  try {
    const update = db.prepare('UPDATE users SET name = ?, email = ?, role = ? WHERE id = ?');
    update.run(name, email, role, id);
    res.json({ message: 'User updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete user account
app.delete('/api/admin/users/:id', (req, res) => {
  const { id } = req.params;
  try {
    // Avoid deleting the logged-in user themselves or keep it allowed but with care.
    const del = db.prepare('DELETE FROM users WHERE id = ?');
    del.run(id);
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Serve Static Frontend Assets
app.use(express.static(path.join(__dirname, '')));

// Fallback for single page app
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
