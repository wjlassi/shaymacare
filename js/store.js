// Simple state management
export const state = {
  user: null, // { role: 'nurse' | 'doctor', name: '' }
  patients: JSON.parse(localStorage.getItem('cardio_patients')) || [],
  currentPatient: null
};

// Wizard logic specific state
export const wizardState = {
  step: 1,
  data: {}
};

export function savePatients() {
  localStorage.setItem('cardio_patients', JSON.stringify(state.patients));
}

export function addPatient(patient) {
  state.patients.push({ ...patient, id: Date.now() });
  savePatients();
}

export function generateDiagnostics(data) {
  let diagnoses = [];
  let priority = 3; // 1: High, 2: Mod, 3: Low

  const age = parseInt(data.age) || 0;
  const sys = data.systolic || 120;
  const spo2 = data.spo2 || 98;
  const hr = data.hr || 80;

  // Rule 1 — Syndrome coronarien aigu
  if (data.chest_pain && (data.rad_left_arm || data.rad_jaw) && data.sweats && age > 40) {
    diagnoses.push({ name: 'Syndrome coronarien aigu', priority: 1, type: 'sca' });
  }

  // Rule 2 — Embolie pulmonaire
  if (data.dyspnea && hr > 100) {
    // Assuming immobilisation is implicit or added later
    diagnoses.push({ name: 'Embolie pulmonaire', priority: 1, type: 'ep' });
  }

  // Rule 3 — Pneumothorax
  if (data.dyspnea && data.chest_pain) {
    diagnoses.push({ name: 'Pneumothorax', priority: 1, type: 'pneumo' });
  }

  // Rule 4 — Douleur musculaire
  if (data.pain_type === 'other' && hr >= 60 && hr <= 100 && sys > 90) {
    diagnoses.push({ name: 'Douleur musculosquelettique', priority: 3, type: 'musc' });
  }

  // Determine global priority based on vital signs (Red, Orange, Yellow, Green)
  let level = "Vert";
  let priorityNum = 3;

  if (data.hypotension || spo2 < 90 || data.syncope) {
    level = "Rouge";
    priorityNum = 1;
  } else if (hr > 100 || data.dyspnea || diagnoses.some(d => d.priority === 1)) {
    level = "Orange";
    priorityNum = 1;
  } else if (data.chest_pain) {
    level = "Jaune";
    priorityNum = 2;
  }

  return { diagnoses, level, priorityNum };
}
