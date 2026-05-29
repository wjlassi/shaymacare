import { renderLogin, renderDashboard, renderWizard } from './views.js';
import { setLang, getLang, t } from './i18n.js';
import { wizardState, addPatient } from './store.js';

const app = document.getElementById('app');

function bindEvents() {
  // Global Events
  const toggleLang = document.getElementById('toggle-lang');
  if (toggleLang) {
    toggleLang.addEventListener('click', (e) => {
      e.preventDefault();
      setLang(getLang() === 'fr' ? 'ar' : 'fr');
      router();
    });
  }

  // Login
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      window.location.hash = '#dashboard';
    });
  }

  // Dashboard
  const btnNewPatient = document.getElementById('btn-new-patient');
  if (btnNewPatient) {
    btnNewPatient.addEventListener('click', () => {
      wizardState.step = 1;
      wizardState.data = {};
      window.location.hash = '#new-patient';
    });
  }

  // Wizard
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const evaPoints = document.querySelectorAll('.eva-point');

  if (evaPoints) {
    evaPoints.forEach(pt => {
      pt.addEventListener('click', (e) => {
        evaPoints.forEach(p => p.classList.remove('selected'));
        e.target.classList.add('selected');
        const val = e.target.getAttribute('data-val');
        const hiddenInput = document.getElementById('wiz_eva');
        if (hiddenInput) hiddenInput.value = val;
        wizardState.data.eva = parseInt(val);
      });
    });
  }

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      saveWizardDataState();
      if (wizardState.step < 6) {
        wizardState.step++;
        router(); // re-render
      } else {
        // Finish wizard
        addPatient(wizardState.data);
        alert(getLang() === 'fr' ? 'Données transmises avec succès au médecin.' : 'تم إرسال البيانات بنجاح إلى الطبيب.');
        window.location.hash = '#dashboard';
      }
    });
  }

  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      saveWizardDataState();
      if (wizardState.step > 1) {
        wizardState.step--;
        router();
      }
    });
  }
}

function saveWizardDataState() {
  const d = wizardState.data;
  
  const getVal = (id) => {
    const el = document.getElementById(id);
    if (!el) return undefined;
    return el.type === 'checkbox' ? el.checked : el.value;
  };

  if (wizardState.step === 1) {
    d.name = getVal('wiz_name');
    d.file = getVal('wiz_file');
    d.age = getVal('wiz_age');
    d.gender = getVal('wiz_gender');
    d.arrival_mode = getVal('wiz_arrival');
    d.arrival_time = getVal('wiz_time');
  } else if (wizardState.step === 2) {
    d.chest_pain = getVal('wiz_chest_pain');
    d.dyspnea = getVal('wiz_dyspnea');
    d.sweats = getVal('wiz_sweats');
    d.nausea = getVal('wiz_nausea');
    d.palpitations = getVal('wiz_palpitations');
    d.syncope = getVal('wiz_syncope');
    
    d.rad_left_arm = getVal('wiz_rad_left_arm');
    d.rad_jaw = getVal('wiz_rad_jaw');
    d.rad_back = getVal('wiz_rad_back');
    
    d.pain_type = getVal('wiz_pain_type');
  } else if (wizardState.step === 3) {
    d.bp = getVal('wiz_bp');
    d.hr = getVal('wiz_hr');
    d.spo2 = getVal('wiz_spo2');
    d.rr = getVal('wiz_rr');
    d.temp = getVal('wiz_temp');
    
    d.rf_htn = getVal('wiz_rf_htn');
    d.rf_diab = getVal('wiz_rf_diab');
    d.rf_smoke = getVal('wiz_rf_smoke');
    d.rf_obes = getVal('wiz_rf_obes');
  } else if (wizardState.step === 4) {
    d.ex_ecg = getVal('wiz_ex_ecg');
    d.ex_ecg_time = getVal('wiz_ex_ecg_time');
    d.ex_iv = getVal('wiz_ex_iv');
    d.ex_iv_time = getVal('wiz_ex_iv_time');
    d.ex_blood = getVal('wiz_ex_blood');
    d.ex_o2 = getVal('wiz_ex_o2');
  } else if (wizardState.step === 6) {
    d.nurse_name = getVal('wiz_nurse_name');
    d.signature = getVal('wiz_sig');
  }
}

function renderNavbar() {
  if (window.location.hash === '' || window.location.hash === '#login') return '';
  return `
    <nav class="navbar">
      <div class="navbar-brand">
        <i class="fas fa-heartbeat"></i> CardioCare
      </div>
      <div class="navbar-menu">
        <a href="#dashboard">${t('dashboard')}</a>
        <a href="#" id="nav-logout" style="color: var(--text-secondary); margin-left: 1rem;"><i class="fas fa-sign-out-alt"></i> ${t('logout')}</a>
        <button id="toggle-lang" class="btn btn-outline" style="padding: 0.2rem 0.5rem; font-size: 0.8rem; margin-left: 1rem;">
          ${getLang() === 'fr' ? 'عربي' : 'FR'}
        </button>
      </div>
    </nav>
  `;
}

function router() {
  const hash = window.location.hash || '#login';
  
  let content = '';
  
  if (hash === '#login') {
    content = renderLogin();
  } else if (hash === '#dashboard') {
    content = renderNavbar() + renderDashboard();
  } else if (hash === '#new-patient') {
    content = renderNavbar() + renderWizard();
  } else {
    content = renderLogin();
  }

  app.innerHTML = content;
  
  // Need to re-bind navbar logout
  const nlg = document.getElementById('nav-logout');
  if (nlg) {
    nlg.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.hash = '#login';
    });
  }

  bindEvents();
}

window.addEventListener('hashchange', router);

// Init
setLang('fr');
router();
