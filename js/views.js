import { t, getLang, setLang } from './i18n.js';
import { state, wizardState, addPatient, generateDiagnostics } from './store.js';

export function renderLogin() {
  return `
    <div class="login-container">
      <div class="glass-panel login-card">
        <h2 style="text-align: center; color: var(--primary-color); margin-bottom: 2rem;">
          <i class="fas fa-heartbeat"></i> ${getLang() === 'fr' ? 'CardioCare Urgences' : t('app_name')}
        </h2>
        
        <form id="login-form">
          <div class="form-group">
            <label class="form-label">${t('email')}</label>
            <input type="email" class="form-control" id="email" required placeholder="infirmiere@hopital.com">
          </div>
          <div class="form-group">
            <label class="form-label">${t('password')}</label>
            <input type="password" class="form-control" id="password" required>
          </div>
          
          <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 1rem;">
            ${t('connect')}
          </button>
        </form>
        
        <div style="text-align: center; margin-top: 1.5rem; display: flex; justify-content: space-between; font-size: 0.9rem;">
          <a href="#">${t('forgot_password')}</a>
          <a href="#" id="toggle-lang">${t('language')}</a>
        </div>
      </div>
    </div>
  `;
}

export function renderDashboard() {
  const patientCount = state.patients.length;
  const recentPatients = [...state.patients].reverse().slice(0, 5);

  return `
    <div class="app-container">
      <div class="patient-header">
        <div>
          <h2>${t('dashboard')}</h2>
          <p>${getLang() === 'fr' ? 'Bienvenue, Infirmière' : 'مرحباً، ممرضة'}</p>
        </div>
        <button id="btn-new-patient" class="btn" style="background: white; color: var(--primary-color);">
          <i class="fas fa-plus"></i> ${t('new_patient')}
        </button>
      </div>

      <div class="grid-3" style="margin-bottom: 2rem;">
        <div class="stat-card">
          <div style="color: var(--text-secondary);">${getLang() === 'fr' ? 'Patients du jour' : 'مرضى اليوم'}</div>
          <div class="stat-value">${patientCount}</div>
        </div>
        <div class="stat-card">
          <div style="color: var(--text-secondary);">${getLang() === 'fr' ? 'Urgences vitales (Rouge)' : 'طوارئ قصوى (أحمر)'}</div>
          <div class="stat-value" style="color: var(--danger-color);">${state.patients.filter(p => p.diagInfo?.level === 'Rouge').length}</div>
        </div>
        <div class="stat-card">
          <div style="color: var(--text-secondary);">${getLang() === 'fr' ? 'Délai moyen ECG' : 'متوسط تأخير تخطيط القلب'}</div>
          <div class="stat-value" style="font-size: 1.8rem; line-height: 2.5rem;">5 min</div>
        </div>
      </div>

      <div class="glass-panel">
        <h3 style="margin-bottom: 1.5rem;">${t('patient_list')}</h3>
        ${recentPatients.length > 0 ? `
          <table style="width: 100%; border-collapse: collapse; text-align: ${getLang() === 'ar' ? 'right' : 'left'};">
            <thead style="border-bottom: 2px solid var(--border-color);">
              <tr>
                <th style="padding: 1rem 0.5rem;">${t('first_last_name')}</th>
                <th style="padding: 1rem 0.5rem;">${t('arrival_time')}</th>
                <th style="padding: 1rem 0.5rem;">Niveau</th>
                <th style="padding: 1rem 0.5rem;">Status</th>
              </tr>
            </thead>
            <tbody>
              ${recentPatients.map(p => `
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 1rem 0.5rem; font-weight: 500;">${p.name || 'Inconnu'}</td>
                  <td style="padding: 1rem 0.5rem;">${p.arrival_time || '-'}</td>
                  <td style="padding: 1rem 0.5rem;">
                    <span class="badge ${p.diagInfo?.level === 'Rouge' ? 'badge-red' : p.diagInfo?.level === 'Orange' ? 'badge-orange' : 'badge-green'}">
                      ${p.diagInfo?.level || 'Non défini'}
                    </span>
                  </td>
                  <td style="padding: 1rem 0.5rem; color: var(--success-color);">
                    <i class="fas fa-check-circle"></i> ${getLang() === 'fr' ? 'Transmis' : 'مرسلة'}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        ` : `<p style="color: var(--text-secondary);">${getLang() === 'fr' ? 'Aucun patient pour le moment.' : 'لا يوجد مرضى حالياً.'}</p>`}
      </div>
    </div>
  `;
}

// Helper to render wizard steps
function renderWizardShell(content, step, totalSteps = 6) {
  const steps = [
    t('patient_id'), t('triage'), t('vitals'), t('exams'), t('diagnoses'), t('transmit')
  ];

  return `
    <div class="app-container">
      <div class="glass-panel">
        <div class="wizard-header">
          ${steps.map((s, i) => `
            <div class="step-indicator ${step === i + 1 ? 'active' : ''}" style="opacity: ${step >= i + 1 ? '1' : '0.4'}">
              <div style="width: 30px; height: 30px; border-radius: 50%; background: ${step >= i + 1 ? 'var(--primary-color)' : 'var(--border-color)'}; color: ${step >= i + 1 ? 'white' : 'var(--text-primary)'}; display: flex; align-items: center; justify-content: center; font-size: 0.9rem; font-weight: bold;">
                ${i + 1}
              </div>
              <span class="step-label" style="display: none;">${s}</span>
            </div>
          `).join('')}
        </div>
        
        <div class="wizard-content" id="wizard-content">
          ${content}
        </div>
        
        <div class="wizard-footer">
          <button id="btn-prev" class="btn btn-outline" ${step === 1 ? 'disabled style="opacity:0.5;"' : ''}>
            ${t('prev')}
          </button>
          <button id="btn-next" class="btn btn-primary">
            ${step === totalSteps ? t('finish') : t('next')}
          </button>
        </div>
      </div>
    </div>
  `;
}

export function renderWizard() {
  const s = wizardState.step;
  const d = wizardState.data;
  let content = '';

  if (s === 1) {
    // Step 1: Identification
    content = `
      <h3>${t('patient_id')}</h3>
      <div class="grid-2" style="margin-top: 1.5rem;">
        <div class="form-group">
          <label class="form-label">${t('first_last_name')}</label>
          <input type="text" id="wiz_name" class="form-control" value="${d.name || ''}" placeholder="Jean Dupont">
        </div>
        <div class="form-group">
          <label class="form-label">${t('file_number')}</label>
          <input type="text" id="wiz_file" class="form-control" value="${d.file || ''}">
        </div>
        <div class="form-group">
          <label class="form-label">${t('age')}</label>
          <input type="number" id="wiz_age" class="form-control" value="${d.age || ''}">
        </div>
        <div class="form-group">
          <label class="form-label">${t('gender')}</label>
          <select id="wiz_gender" class="form-control">
            <option value="M" ${d.gender === 'M' ? 'selected' : ''}>${t('male')}</option>
            <option value="F" ${d.gender === 'F' ? 'selected' : ''}>${t('female')}</option>
          </select>
        </div>
      </div>
      <div class="grid-2">
        <div class="form-group">
          <label class="form-label">${t('arrival_mode')}</label>
          <select id="wiz_arrival" class="form-control">
            <option value="ambulance">${t('ambulance')}</option>
            <option value="spontaneous">${t('walk_in')}</option>
            <option value="transfer">${t('transfer')}</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">${t('arrival_time')}</label>
          <input type="time" id="wiz_time" class="form-control" value="${d.arrival_time || new Date().toTimeString().slice(0,5)}">
        </div>
      </div>
    `;
  } 
  else if (s === 2) {
    // Step 2: Triage (Symptoms)
    content = `
      <h3>${t('triage')}</h3>
      <div class="grid-2" style="margin-top: 1.5rem;">
        <div>
          <h4 style="margin-bottom: 1rem;">${t('symptoms')}</h4>
          <label class="checkbox-group"><input type="checkbox" id="wiz_chest_pain" ${d.chest_pain?'checked':''}> ${t('chest_pain')}</label>
          <label class="checkbox-group"><input type="checkbox" id="wiz_dyspnea" ${d.dyspnea?'checked':''}> ${t('dyspnea')}</label>
          <label class="checkbox-group"><input type="checkbox" id="wiz_sweats" ${d.sweats?'checked':''}> ${t('sweats')}</label>
          <label class="checkbox-group"><input type="checkbox" id="wiz_nausea" ${d.nausea?'checked':''}> ${t('nausea')}</label>
          <label class="checkbox-group"><input type="checkbox" id="wiz_palpitations" ${d.palpitations?'checked':''}> ${t('palpitations')}</label>
          <label class="checkbox-group"><input type="checkbox" id="wiz_syncope" ${d.syncope?'checked':''}> ${t('syncope')}</label>
        </div>
        <div>
          <h4 style="margin-bottom: 1rem;">${t('pain_characteristics')}</h4>
          <div class="form-group">
            <label class="form-label">${t('radiation')}</label>
            <label class="checkbox-group"><input type="checkbox" id="wiz_rad_left_arm" ${d.rad_left_arm?'checked':''}> ${t('left_arm')}</label>
            <label class="checkbox-group"><input type="checkbox" id="wiz_rad_jaw" ${d.rad_jaw?'checked':''}> ${t('jaw')}</label>
            <label class="checkbox-group"><input type="checkbox" id="wiz_rad_back" ${d.rad_back?'checked':''}> ${t('back')}</label>
          </div>
          <div class="form-group">
            <label class="form-label">${t('pain_type')}</label>
            <select id="wiz_pain_type" class="form-control">
              <option value="oppressive" ${d.pain_type==='oppressive'?'selected':''}>${t('oppressive')}</option>
              <option value="burning" ${d.pain_type==='burning'?'selected':''}>${t('burning')}</option>
              <option value="stabbing" ${d.pain_type==='stabbing'?'selected':''}>${t('stabbing')}</option>
              <option value="other" ${d.pain_type==='other'?'selected':''}>${t('other')}</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">${t('pain_intensity')} (0-10)</label>
            <div class="eva-scale" id="eva_container">
              ${[0,1,2,3,4,5,6,7,8,9,10].map(v => `
                <div class="eva-point ${d.eva == v ? 'selected' : ''}" data-val="${v}">${v}</div>
              `).join('')}
            </div>
            <input type="hidden" id="wiz_eva" value="${d.eva || 0}">
          </div>
        </div>
      </div>
    `;
  }
  else if (s === 3) {
    // Step 3: Vitals & Risks
    content = `
      <h3>${t('vitals')}</h3>
      <div class="grid-3" style="margin-top: 1.5rem;">
        <div class="form-group">
          <label class="form-label">${t('bp')} (e.g. 120/80)</label>
          <input type="text" id="wiz_bp" class="form-control" value="${d.bp || ''}" placeholder="120/80">
        </div>
        <div class="form-group">
          <label class="form-label">${t('hr')}</label>
          <input type="number" id="wiz_hr" class="form-control" value="${d.hr || ''}" placeholder="80">
        </div>
        <div class="form-group">
          <label class="form-label">${t('spo2')}</label>
          <input type="number" id="wiz_spo2" class="form-control" value="${d.spo2 || ''}" placeholder="98">
        </div>
        <div class="form-group">
          <label class="form-label">${t('rr')}</label>
          <input type="number" id="wiz_rr" class="form-control" value="${d.rr || ''}" placeholder="16">
        </div>
        <div class="form-group">
          <label class="form-label">${t('temp')}</label>
          <input type="number" step="0.1" id="wiz_temp" class="form-control" value="${d.temp || ''}" placeholder="37.2">
        </div>
      </div>
      
      <h3 style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--border-color);">${t('risk_factors')}</h3>
      <div class="grid-3" style="margin-top: 1rem;">
        <label class="checkbox-group"><input type="checkbox" id="wiz_rf_htn" ${d.rf_htn?'checked':''}> ${t('htn')}</label>
        <label class="checkbox-group"><input type="checkbox" id="wiz_rf_diab" ${d.rf_diab?'checked':''}> ${t('diabetes')}</label>
        <label class="checkbox-group"><input type="checkbox" id="wiz_rf_smoke" ${d.rf_smoke?'checked':''}> ${t('smoking')}</label>
        <label class="checkbox-group"><input type="checkbox" id="wiz_rf_obes" ${d.rf_obes?'checked':''}> ${t('obesity')}</label>
      </div>
    `;
  }
  else if (s === 4) {
    // Step 4: Exams
    content = `
      <h3>${t('exams')}</h3>
      <div class="grid-2" style="margin-top: 1.5rem;">
        <div class="form-group" style="background: var(--surface-color-solid); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <label class="checkbox-group"><input type="checkbox" id="wiz_ex_ecg" ${d.ex_ecg?'checked':''}> <strong>${t('ecg_done')}</strong></label>
          <div style="margin-top: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>${t('time_label')}</span> <input type="time" id="wiz_ex_ecg_time" class="form-control" style="width: auto;" value="${d.ex_ecg_time || ''}">
          </div>
        </div>
        
        <div class="form-group" style="background: var(--surface-color-solid); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <label class="checkbox-group"><input type="checkbox" id="wiz_ex_iv" ${d.ex_iv?'checked':''}> <strong>${t('iv_line')}</strong></label>
          <div style="margin-top: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>${t('time_label')}</span> <input type="time" id="wiz_ex_iv_time" class="form-control" style="width: auto;" value="${d.ex_iv_time || ''}">
          </div>
        </div>
        
        <div class="form-group" style="background: var(--surface-color-solid); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <label class="checkbox-group"><input type="checkbox" id="wiz_ex_blood" ${d.ex_blood?'checked':''}> <strong>${t('blood_test')}</strong></label>
        </div>
        
        <div class="form-group" style="background: var(--surface-color-solid); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <label class="checkbox-group"><input type="checkbox" id="wiz_ex_o2" ${d.ex_o2?'checked':''}> <strong>${t('oxygen')}</strong></label>
        </div>
      </div>
    `;
  }
  else if (s === 5) {
    // Step 5: Diagnoses & Priority
    wizardState.data.diagInfo = generateDiagnostics(wizardState.data);
    const diag = wizardState.data.diagInfo;

    const badgeColor = diag.level === 'Rouge' ? 'badge-red' : diag.level === 'Orange' ? 'badge-orange' : diag.level === 'Jaune' ? 'badge-yellow' : 'badge-green';

    content = `
      <h3>${t('diagnoses')}</h3>
      <div style="margin-top: 1.5rem; background: var(--surface-color-solid); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
          <h4 style="margin: 0;">Niveau d'Urgence Recommandé</h4>
          <span class="badge ${badgeColor}" style="font-size: 1.2rem; padding: 0.5rem 1rem;">${diag.level}</span>
        </div>
        
        <h4 style="margin-top: 1.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">Affections Potentielles</h4>
        <ul style="margin-top: 1rem; padding-left: 1.5rem;">
          ${diag.diagnoses.length > 0 
            ? diag.diagnoses.map(dx => `<li style="margin-bottom: 0.5rem; font-weight: 500;">${dx.name} <span class="badge badge-red" style="font-size: 0.7rem; margin-left: 0.5rem;">Priorité: ${dx.priority}</span></li>`).join('')
            : '<li>Affections non définies / Observation recommandée.</li>'
          }
        </ul>
        
        <h4 style="margin-top: 1.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">Actions Prioritaires</h4>
        <ul style="margin-top: 1rem; padding-left: 1.5rem; color: var(--danger-color); font-weight: 500;">
          ${diag.level === 'Rouge' ? `
            <li><i class="fas fa-exclamation-triangle"></i> Réaliser ECG immédiatement</li>
            <li><i class="fas fa-exclamation-triangle"></i> Informer le médecin réanimateur</li>
            <li><i class="fas fa-exclamation-triangle"></i> Monitorage continu</li>
          ` : diag.level === 'Orange' ? `
            <li>Réaliser ECG rapide ( < 10 mins )</li>
            <li>Pose de voie veineuse</li>
          ` : `
            <li>Surveillance des constantes</li>
            <li>Bilan biologique standard</li>
          `}
        </ul>
      </div>
    `;
  }
  else if (s === 6) {
    // Step 6: Transmission & Delays
    
    // Calculate delays
    const arriveTime = d.arrival_time ? new Date("1970-01-01T" + d.arrival_time + "Z") : null;
    const ecgTime = d.ex_ecg_time ? new Date("1970-01-01T" + d.ex_ecg_time + "Z") : null;
    let delayEcgStr = "-";
    
    if (arriveTime && ecgTime) {
      let diffMins = Math.round((ecgTime - arriveTime) / 60000);
      if (diffMins < 0) diffMins += 24 * 60; // handle overnight wrap around
      delayEcgStr = diffMins + " min";
    }

    content = `
      <h3>${t('delays')} & ${t('transmit')}</h3>
      
      <div class="grid-2" style="margin-top: 1.5rem; gap: 1.5rem;">
        <div style="background: var(--surface-color-solid); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <h4 style="margin-bottom: 1rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;"><i class="fas fa-clock"></i> ${t('delays')}</h4>
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <span style="color: var(--text-secondary);">${t('arrival_time')}</span>
            <strong>${d.arrival_time || '-'}</strong>
          </div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <span style="color: var(--text-secondary);">${t('ecg_time')}</span>
            <strong>${d.ex_ecg_time || '-'}</strong>
          </div>
          <div style="display: flex; justify-content: space-between; margin-top: 1rem; padding-top: 1rem; border-top: 1px dashed var(--border-color);">
            <strong style="color: var(--text-primary);">${t('ecg_delay')}</strong>
            <span class="badge ${delayEcgStr !== '-' && parseInt(delayEcgStr) > 10 ? 'badge-red' : 'badge-green'}">${delayEcgStr}</span>
          </div>
        </div>

        <div style="text-align: center; display: flex; flex-direction: column; justify-content: center;">
          <i class="fas fa-paper-plane" style="font-size: 3rem; color: var(--primary-color); margin-bottom: 1rem;"></i>
          <h4>Résumé prêt à être transmis</h4>
          <p style="color: var(--text-secondary); font-size: 0.9rem;">
            Toutes les informations cliniques, constantes vitales et la priorisation 
            (Niveau ${wizardState.data.diagInfo?.level}) seront envoyées directement 
            sur le poste du médecin du service d'urgences.
          </p>
        </div>
      </div>
        
      <div style="margin-top: 2rem; padding: 1.5rem; background: var(--surface-color-solid); border-radius: var(--radius-md); border: 1px solid var(--border-color); text-align: left;">
        <h4 style="margin-bottom: 1rem;">${t('validation')}</h4>
        <div class="grid-2">
          <div class="form-group">
            <label class="form-label">${t('nurse_name')}</label>
            <input type="text" id="wiz_nurse_name" class="form-control" value="Infirmière Principale">
          </div>
          <div class="form-group">
            <label class="form-label">${t('signature')} (Initiales)</label>
            <input type="text" class="form-control" placeholder="Entrez vos initiales" id="wiz_sig">
          </div>
        </div>
      </div>
    `;
  }

  return renderWizardShell(content, s, 6);
}
