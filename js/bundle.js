// ==============================
// 1. i18n.js (Translations)
// ==============================
const translations = {
  fr: {
    app_name: "Shayma Care Urgences",
    login: "Connexion",
    select_account: "Sélectionnez votre compte",
    password: "Mot de passe",
    connect: "Se connecter",
    dashboard_nurse: "Tableau de Bord - Infirmier",
    dashboard_doc: "Tableau de Bord - Médecin",
    new_patient: "Nouveau patient",
    patient_list: "Liste des patients",
    
    patient_id: "Identification du patient",
    first_last_name: "Nom et prénom",
    age: "Âge",
    gender: "Sexe",
    male: "Homme",
    female: "Femme",
    file_number: "Numéro de dossier",
    date: "Date",
    arrival_time: "Heure d'arrivée",
    arrival_mode: "Mode d'arrivée",
    ambulance: "Ambulance",
    walk_in: "Consultation spontanée",
    transfer: "Transfert",
    department: "Service",
    emergencies: "Urgences",
    shock_room: "Déchocage",
    obs_room: "Salle d'observation",
    
    triage: "Triage infirmier",
    symptoms: "Symptômes",
    chest_pain: "Douleur thoracique",
    dyspnea: "Dyspnée",
    sweats: "Sueurs",
    nausea: "Nausées",
    vomiting: "Vomissements",
    palpitations: "Palpitations",
    dizziness: "Vertiges",
    syncope: "Syncope",
    anxiety: "Anxiété",
    
    pain_characteristics: "Caractéristiques de la douleur",
    location: "Localisation",
    radiation: "Irradiation",
    left_arm: "Bras gauche",
    jaw: "Mâchoire",
    back: "Dos",
    shoulder: "Épaule",
    pain_type: "Type de douleur",
    oppressive: "Oppressive",
    burning: "Brûlure",
    stabbing: "Piqûre",
    other: "Autre",
    pain_intensity: "Intensité (EVA 0-10)",
    pain_start: "Heure de début de la douleur",

    vitals: "Signes vitaux",
    bp: "Tension artérielle",
    hr: "Fréquence cardiaque",
    rr: "Fréquence respiratoire",
    spo2: "Saturation en O2 (%)",
    temp: "Température (°C)",
    glycemia: "Glycémie",

    risk_factors: "Facteurs de risque cardiovasculaire",
    htn: "Hypertension (HTA)",
    diabetes: "Diabète",
    smoking: "Tabagisme",
    obesity: "Obésité",
    dyslipidemia: "Dyslipidémie",
    cardiac_history: "Antécédent cardiaque",
    family_history: "Antécédent familial",
    sedentary: "Sédentarité",
    
    exams: "Examens réalisés",
    ecg_done: "ECG réalisé",
    iv_line: "Voie veineuse",
    blood_test: "Prise de sang",
    monitoring: "Monitorage installé",
    oxygen: "Oxygène administré",
    doctor_informed: "Médecin informé",
    time_label: "Heure:",

    diagnoses: "Hypothèses de diagnostic & Priorité",
    delays: "Délai diagnostique",
    ecg_delay: "Délai ECG (minutes)",
    
    transmit: "Transmission",
    nurse_name: "Infirmier",
    doc_name: "Médecin",
    signature: "Signature",
    
    clinical_data: "Données & Triage",
    medical_decision: "Décision médicale",
    orientation: "Orientation",
    hospitalization: "Hospitalisation",
    validate_care: "Valider la prise en charge",
    view_details: "Dossier",
    status_pending: "Attente d'avis",
    status_validated: "Validé",
    status_returned: "Retourné pour modification",

    next: "Suivant",
    prev: "Précédent",
    finish: "Envoyer au Médecin",
    logout: "Déconnexion",
    language: "اللغة العربية",

    email: "Adresse Email",
    name: "Nom complet",
    role: "Rôle",
    nurse: "Infirmier",
    doctor: "Médecin",
    register: "S'inscrire",
    create_account: "Créer un compte",
    already_have_account: "Déjà un compte ? Se connecter",
    no_account: "Pas de compte ? S'inscrire",
    login_error: "Email ou mot de passe incorrect",
    register_success: "Compte créé avec succès ! Connectez-vous.",
    register_error: "Erreur d'inscription (Email déjà existant ?)",

    dashboard_admin: "Tableau de Bord - Admin",
    manage_users: "Gérer les utilisateurs",
    manage_patients: "Gérer les patients",
    edit: "Modifier",
    delete: "Supprimer",
    save: "Enregistrer",
    cancel: "Annuler",
    actions: "Actions",

    // New specific checklist translations
    pallor: "Pâleur cutanée",
    fatigue: "Fatigue atypique (fatigue)",
    epigastric_pain: "Douleur épigastrique",
    malaise: "Malaise / Perte de connaissance",
    hemoptysis: "Hémoptysie (crachats sanglants)",
    decreased_breath_sounds: "Diminution du murmure vésiculaire",
    neuro_deficit: "Déficit neurologique",
    limb_ischemia: "Ischémie aiguë d'un membre",
    tracheal_deviation: "Déviation de la trachée",
    cyanosis: "Cyanose (couleur bleue)",
    hyperventilation: "Hyperventilation / Tachypnée",
    tremors: "Tremblements",
    paresthesia: "Paresthésies (fourmillements)",
    
    pain_no_relief: "Douleur non soulagée par le repos",
    pain_cades_repos: "Douleur induite à l'effort / cédant au repos",
    pain_inc_insp: "Douleur augmentée à l'inspiration",
    pain_insp_rel_forward: "Douleur augmentée à l'inspiration, soulagée penché en avant",
    pain_max_onset: "Douleur brutale, maximale d'emblée",
    pain_tearing: "Sensation de déchirure / transfixiante",
    pain_unilateral: "Douleur unilatérale brusque",
    pain_palpation: "Douleur reproductible à la palpation / mouvements",
    pain_after_meals: "Douleur après repas / brûlure rétro-sternale",
    regurgitations: "Régurgitations gastriques",
    acid_relief: "Douleur soulagée par les antiacides",
    
    bp_asymmetry: "Asymétrie tensionnelle bras droit / gauche",
    
    rf_immobilization: "Immobilisation prolongée (lit)",
    rf_surgery: "Chirurgie récente (< 1 mois)",
    rf_cancer: "Cancer actif",
    rf_contraception: "Contraception orale / Hormonothérapie",
    rf_tvp: "Thrombose Veineuse Profonde (TVP) suspectée",
    rf_pregnancy: "Grossesse / Post-partum",
    rf_thrombo: "Antécédent de maladie thromboembolique",

    trouble_conscience: "Trouble de la conscience / Perte de connaissance",
    trouble_rythme: "Trouble du rythme cardiaque",
    dyspnee_severe: "Dyspnée sévère",
    douleur_brutale_intense: "Douleur brutale et intense",
    douleur_persistante_20: "Douleur thoracique persistante > 20 min",
    hypotension_suspectee: "Hypotension suspectée (PAS < 90 mmHg)",
    desaturation_suspectee: "Désaturation suspectée (SpO2 < 94%)",
    tachycardie_majeure_suspectee: "Tachycardie majeure suspectée (FC > 120/min)",
    bradycardie_severe_suspectee: "Bradycardie sévère suspectée (FC < 50/min)",
    signes_neuro: "Signes neurologiques / Déficit neurologique",

    urg_extreme: "PRIORITÉ VITALE IMMÉDIATE (Rouge)",
    urg_major: "Risque Modéré (Orange)",
    urg_relative: "Risque Modéré (Orange)",
    urg_low: "Non-dangereux / Bénin (Vert)",
    
    red_flags: "Signes d'alerte critiques (Red Flags)",
    nurse_actions: "Conduite infirmière immédiate (Check-list PEC)"
  },
  ar: {
    app_name: "شيماء كير طوارئ",
    login: "تسجيل الدخول",
    select_account: "اختر حسابك",
    password: "كلمة المرور",
    connect: "دخول",
    dashboard_nurse: "لوحة القيادة - طاقم التمريض",
    dashboard_doc: "لوحة القيادة - الطبيب",
    new_patient: "مريض جديد",
    patient_list: "قائمة المرضى",
    
    patient_id: "هوية المريض",
    first_last_name: "الاسم واللقب",
    age: "العمر",
    gender: "الجنس",
    male: "ذكر",
    female: "أنثى",
    file_number: "رقم الملف",
    date: "التاريخ",
    arrival_time: "وقت الوصول",
    arrival_mode: "طريقة الوصول",
    ambulance: "سيارة إسعاف",
    walk_in: "حضور شخصي",
    transfer: "نقل",
    department: "القسم",
    emergencies: "الطوارئ",
    shock_room: "غرفة الصدمات",
    obs_room: "غرفة الملاحظة",
    
    triage: "فرز التمريض",
    symptoms: "الأعراض",
    chest_pain: "ألم في الصدر",
    dyspnea: "ضيق التنفس",
    sweats: "تعرق",
    nausea: "غثيان",
    vomiting: "قيء",
    palpitations: "خفقان",
    dizziness: "دوار",
    syncope: "إغماء",
    anxiety: "قلق",
    
    pain_characteristics: "خصائص الألم",
    location: "موقع الألم",
    radiation: "تمدد الألم",
    left_arm: "الذراع الأيسر",
    jaw: "الفك",
    back: "الظهر",
    shoulder: "الكتف",
    pain_type: "نوع الألم",
    oppressive: "ضاغط",
    burning: "حارق",
    stabbing: "واخز",
    other: "أخرى",
    pain_intensity: "شدة الألم (0-10)",
    pain_start: "وقت بدء الألم",

    vitals: "العلامات الحيوية",
    bp: "ضغط الدم",
    hr: "نبض القلب",
    rr: "معدل التنفس",
    spo2: "الأكسجين (%)",
    temp: "الحرارة (°C)",
    glycemia: "السكر",

    risk_factors: "عوامل الخطر",
    htn: "ضغط الدم",
    diabetes: "سكري",
    smoking: "تدخين",
    obesity: "سمنة",
    dyslipidemia: "كوليسترول",
    cardiac_history: "مرض قلب سابق",
    family_history: "تاريخ عائلي",
    sedentary: "خمول",
    
    exams: "الفحوصات",
    ecg_done: "تخطيط قلب",
    iv_line: "وضع وريد",
    blood_test: "اختبار دم",
    monitoring: "مراقبة",
    oxygen: "أكسجين",
    doctor_informed: "إعلام الطبيب",
    time_label: "الوقت:",

    diagnoses: "التشخيصات",
    delays: "التأخير التشخيصي",
    ecg_delay: "تأخير التخطيط",
    
    transmit: "التحويل",
    nurse_name: "الممرض",
    doc_name: "الطبيب",
    signature: "التوقيع",
    
    clinical_data: "البيانات والفرز",
    medical_decision: "القرار الطبي",
    orientation: "توجيه المريض",
    hospitalization: "استشفاء",
    validate_care: "تأكيد الرعاية الطبية",
    view_details: "الملف",
    status_pending: "قيد الانتظار",
    status_validated: "تم التأكيد",
    status_returned: "مرتجع للتعديل",

    next: "التالي",
    prev: "السابق",
    finish: "إنهاء وإرسال",
    logout: "تسجيل خروج",
    language: "Français",

    email: "البريد الإلكتروني",
    name: "الاسم الكامل",
    role: "الدور",
    nurse: "ممرض",
    doctor: "طبيب",
    register: "إنشاء حساب",
    create_account: "إنشاء حساب جديد",
    already_have_account: "لديك حساب بالفعل؟ تسجيل الدخول",
    no_account: "ليس لديك حساب؟ تسجيل",
    login_error: "البريد الإلكتروني أو كلمة المرور غير صحيحة",
    register_success: "تم إنشاء الحساب بنجاح! يرجى تسجيل الدخول.",
    register_error: "حدث خطأ أثناء إنشاء الحساب (البريد مستخدم بالفعل؟)",

    dashboard_admin: "لوحة التحكم - المدير",
    manage_users: "إدارة المستخدمين",
    manage_patients: "إدارة ملفات المرضى",
    edit: "تعديل",
    delete: "حذف",
    save: "حفظ",
    cancel: "إلغاء",
    actions: "الإجراءات",

    // New specific checklist translations
    pallor: "شحوب الوجه",
    fatigue: "تعب غير معتاد (إرهاق)",
    epigastric_pain: "ألم في فم المعدة (الشرسوف)",
    malaise: "وعكة صحية / إغماء مفاجئ",
    hemoptysis: "سعال مصحوب بدم (نفث الدم)",
    decreased_breath_sounds: "انخفاض أصوات التنفس في الرئة",
    neuro_deficit: "قصور عصبي (ضعف حركة/نطق)",
    limb_ischemia: "نقص تروية حاد في أحد الأطراف",
    tracheal_deviation: "انحراف القصبة الهوائية",
    cyanosis: "ازرقاق لون البشرة/الأظافر",
    hyperventilation: "فرط التنفس / تسارع التنفس",
    tremors: "ارتجاف / رعشة",
    paresthesia: "تنميل وخدر بالأطراف",
    
    pain_no_relief: "الألم لا يزول مع الراحة",
    pain_cades_repos: "ألم ناتج عن الجهد ويزول بالراحة",
    pain_inc_insp: "ألم يزداد مع الشهيق والتنفس عميقاً",
    pain_insp_rel_forward: "ألم يزداد مع الشهيق ويزول عند الانحناء للأمام",
    pain_max_onset: "ألم مفاجئ وشديد للغاية منذ البداية",
    pain_tearing: "شعور بتمزق في الصدر أو خارق للظهر",
    pain_unilateral: "ألم مفاجئ في جهة واحدة من الصدر",
    pain_palpation: "ألم يزداد عند الضغط على الصدر أو مع الحركة",
    pain_after_meals: "ألم بعد تناول الطعام / حرقة بالصدر",
    regurgitations: "ارتجاع مريئي",
    acid_relief: "الألم يزول بعد أخذ مضادات الحموضة",
    
    bp_asymmetry: "اختلاف ضغط الدم بين الذراع الأيمن والأيسر",
    
    rf_immobilization: "عدم الحركة لفترة طويلة (الاستلقاء بالسرير)",
    rf_surgery: "عملية جراحية حديثة (أقل من شهر)",
    rf_cancer: "إصابة حالية بالسرطان",
    rf_contraception: "حبوب منع الحمل / علاج هرموني",
    rf_tvp: "اشتباه بجلطة أوردة الساق العميقة (TVP)",
    rf_pregnancy: "الحمل / فترة ما بعد الولادة",
    rf_thrombo: "تاريخ سابق لجلطة رئوية أو وريدية",

    trouble_conscience: "اضطراب في الوعي / فقدان الوعي",
    trouble_rythme: "اضطراب في ضربات القلب",
    dyspnee_severe: "ضيق تنفس شديد",
    douleur_brutale_intense: "ألم مفاجئ وشديد للغاية",
    douleur_persistante_20: "ألم مستمر لأكثر من 20 دقيقة",
    hypotension_suspectee: "اشتباه في انخفاض ضغط الدم (أقل من 90)",
    desaturation_suspectee: "اشتباه في انخفاض نسبة الأكسجين (أقل من 94%)",
    tachycardie_majeure_suspectee: "اشتباه في تسارع نبض شديد (أكثر من 120)",
    bradycardie_severe_suspectee: "اشتباه في بطء نبض شديد (أقل من 50)",
    signes_neuro: "علامات عصبية / قصور عصبي",

    urg_extreme: "أولوية حيوية فورية (حمراء)",
    urg_major: "خطورة متوسطة (برتقالية)",
    urg_relative: "خطورة متوسطة (برتقالية)",
    urg_low: "غير خطير / أولوية منخفضة (خضراء)",
    
    red_flags: "علامات الخطر الحرجة (Red Flags)",
    nurse_actions: "الخطوات والتدابير التمريضية الفورية"
  }
};

let currentLang = 'fr';
function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
}
function getLang() { return currentLang; }
function t(key) { return translations[currentLang][key] || key; }

// ==============================
// 2. State & Database Sync Logic
// ==============================
const savedUser = sessionStorage.getItem('current_user');
const state = {
  user: savedUser ? JSON.parse(savedUser) : null, 
  patients: [],
  currentPatientId: null
};

const wizardState = { step: 1, data: {} };

let adminState = { tab: 'users', editingUserId: null };
let adminUsers = [];

async function fetchPatients() {
  try {
    const res = await fetch('/api/patients');
    state.patients = await res.json();
  } catch (e) {
    console.error('Error fetching patients:', e);
  }
}

async function addPatient(patient) {
  try {
    const res = await fetch('/api/patients', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...patient, nurse_name: state.user.name })
    });
    if (res.ok) {
      await fetchPatients();
    }
  } catch (e) {
    console.error('Error adding patient:', e);
  }
}

async function updatePatient(id, dataToUpdate) {
  try {
    const res = await fetch(`/api/patients/${id}`, {
      method: 'PUT',
      headers: { 
        'Content-Type': 'application/json',
        'x-user-role': state.user ? state.user.role : ''
      },
      body: JSON.stringify(dataToUpdate)
    });
    if (res.ok) {
      await fetchPatients();
    }
  } catch (e) {
    console.error('Error updating patient:', e);
  }
}

function getPatient(id) {
  return state.patients.find(p => p.id === parseInt(id));
}

async function loginUser(email, password) {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || t('login_error'));
  }
  state.user = await res.json();
  sessionStorage.setItem('current_user', JSON.stringify(state.user));
}

async function registerUser(name, email, password, role) {
  const res = await fetch('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password, role })
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || t('register_error'));
  }
}

async function fetchAdminUsers() {
  try {
    const res = await fetch('/api/admin/users');
    adminUsers = await res.json();
  } catch (e) {
    console.error('Error fetching admin users:', e);
  }
}

async function deleteAdminUser(id) {
  const confirmMsg = getLang() === 'fr' 
    ? 'Êtes-vous sûr de vouloir supprimer cet utilisateur ?' 
    : 'هل أنت متأكد من حذف هذا المستخدم؟';
  if (!confirm(confirmMsg)) return;

  try {
    const res = await fetch(`/api/admin/users/${id}`, { method: 'DELETE' });
    if (res.ok) {
      await fetchAdminUsers();
      router();
    }
  } catch (e) {
    console.error(e);
  }
}

async function deleteAdminPatient(id) {
  const confirmMsg = getLang() === 'fr' 
    ? 'Êtes-vous sûr de vouloir supprimer ce dossier patient ?' 
    : 'هل أنت متأكد من حذف ملف هذا المريض؟';
  if (!confirm(confirmMsg)) return;

  try {
    const res = await fetch(`/api/patients/${id}`, { method: 'DELETE' });
    if (res.ok) {
      await fetchPatients();
      router();
    }
  } catch (e) {
    console.error(e);
  }
}

async function saveAdminUser(id) {
  const name = document.getElementById(`edit-name-${id}`).value;
  const email = document.getElementById(`edit-email-${id}`).value;
  const role = document.getElementById(`edit-role-${id}`).value;
  try {
    const res = await fetch(`/api/admin/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, role })
    });
    if (res.ok) {
      adminState.editingUserId = null;
      await fetchAdminUsers();
      router();
    } else {
      const err = await res.json();
      alert(err.error || 'Error saving user');
    }
  } catch (e) {
    console.error(e);
  }
}

function generateDiagnostics(d) {
  let diagnoses = [];
  let redFlags = [];
  let actions = [];

  const age = parseInt(d.age) || 0;
  let sys = parseInt((d.bp || "").split('/')[0]) || 120;
  if (sys > 0 && sys < 30) {
    sys = sys * 10;
  }
  const spo2 = parseFloat(d.spo2) || 98;
  const hr = parseInt(d.hr) || 80;
  const rr = parseInt(d.rr) || 16;
  const temp = parseFloat(d.temp) || 37.0;

  // Red Flags Detection (Double Safety Net: vitals bounds + manual overrides)
  if (d.hypotension) redFlags.push({ key: 'hypotension', name_fr: 'Hypotension (PAS < 90 mmHg)', name_ar: 'انخفاض ضغط الدم (أقل من 90)' });
  if (spo2 < 94 || d.desaturation) redFlags.push({ key: 'desaturation', name_fr: 'Désaturation (SpO2 < 94 %)', name_ar: 'انخفاض نسبة الأكسجين (أقل من 94%)' });
  if (rr > 24 || d.hyperventilation || d.dyspnee_severe) redFlags.push({ key: 'severe_dyspnea', name_fr: 'Dyspnée sévère', name_ar: 'ضيق تنفس شديد' });
  if (d.neuro_deficit || d.signes_neuro) redFlags.push({ key: 'neuro_deficit', name_fr: 'Déficit neurologique', name_ar: 'قصور أو ضعف عصبي' });
  if (d.syncope || d.malaise || d.trouble_conscience) redFlags.push({ key: 'syncope', name_fr: 'Trouble de la conscience / Syncope', name_ar: 'اضطراب في الوعي / إغماء' });
  if (d.cyanosis) redFlags.push({ key: 'cyanosis', name_fr: 'Cyanose (couleur bleue)', name_ar: 'ازرقاق في الجلد/الأغشية' });
  if (d.sweats) redFlags.push({ key: 'sweats', name_fr: 'Sueurs profuses', name_ar: 'تعرق شديد' });
  if (d.pain_max_onset || d.douleur_brutale_intense) redFlags.push({ key: 'pain_max_onset', name_fr: 'Douleur brutale intense', name_ar: 'ألم مفاجئ وشديد للغاية' });
  if (hr > 120 || d.tachycardie_majeure) redFlags.push({ key: 'severe_tachycardia', name_fr: 'Tachycardie majeure (FC > 120/min)', name_ar: 'تسارع شديد في نبضات القلب (أكثر من 120)' });
  if (hr < 50 || d.bradycardie_severe) redFlags.push({ key: 'severe_bradycardia', name_fr: 'Bradycardie sévère (FC < 50/min)', name_ar: 'بطء شديد في نبضات القلب (أقل من 50)' });
  if (d.limb_ischemia) redFlags.push({ key: 'limb_ischemia', name_fr: 'Ischémie de membre', name_ar: 'نقص تروية حاد في الأطراف' });
  if (parseInt(d.eva) > 7) redFlags.push({ key: 'pain_eva', name_fr: 'Douleur intense (EVA > 7/10)', name_ar: 'ألم شديد جداً (EVA أكثر من 7)' });
  if (d.pain_no_relief || d.douleur_persistante_20) redFlags.push({ key: 'pain_duration_gt20', name_fr: 'Douleur persistante > 20 min', name_ar: 'ألم مستمر لأكثر من 20 دقيقة ولا يزول' });
  if (d.trouble_rythme) redFlags.push({ key: 'trouble_rythme', name_fr: 'Trouble du rythme cardiaque', name_ar: 'اضطراب في ضربات القلب' });

  // Diagnosing Pathologies
  
  // 1. Syndrome coronarien aigu (SCA)
  const scaCriteria = d.chest_pain && (d.rad_arm || d.rad_jaw || d.rad_back || d.rad_sh) && (d.sweats || d.nausea || d.vomit || d.dyspnea || d.pain_no_relief || d.douleur_persistante_20 || age > 40);
  if (scaCriteria) {
    const isGrave = redFlags.length > 0 || sys < 90 || hr > 100 || hr < 50 || spo2 < 90 || d.syncope || d.pain_no_relief || d.douleur_persistante_20 || d.trouble_conscience;
    diagnoses.push({
      name_fr: 'Syndrome coronarien aigu (SCA)',
      name_ar: 'متلازمة الشريان التاجي الحادة (جلطة قلبية)',
      urg_fr: isGrave ? 'PRIORITÉ VITALE IMMÉDIATE' : 'Risque Modéré / Urgence Majeure',
      urg_ar: isGrave ? 'أولوية حيوية فورية' : 'خطورة متوسطة / حالة طارئة',
      type: 'sca'
    });
    actions.push(
      { fr: "Installation en position demi-assise", ar: "وضع المريض في وضعية نصف الجلوس" },
      { fr: "Scope cardiaque continu et surveillance rapprochée", ar: "تركيب المراقبة القلبية (Scope) والمتابعة المستمرة" },
      { fr: "ECG immédiat (< 10 min) à transmettre au médecin", ar: "إجراء تخطيط القلب فوراً (في أقل من 10 دقائق) وعرضه على الطبيب" },
      { fr: "Prise des constantes vitales complètes (TA, FC, FR, SpO2, Glycémie, Température)", ar: "قياس العلامات الحيوية كاملة (الضغط، النبض، التنفس، الأكسجين، السكر، الحرارة)" },
      { fr: "Pose d'une voie veineuse périphérique (VVP)", ar: "تركيب كانيولا وريدية (Voie Veineuse)" },
      { fr: "Oxygénothérapie si SpO2 < 94%", ar: "إعطاء الأكسجين إذا كانت نسبة الأكسجين SpO2 أقل من 94%" },
      { fr: "Préparation du bilan sanguin (Troponine, NFS, Ionogramme)", ar: "تجهيز أنابيب سحب الدم لفحص (التروبونين، صورة الدم، الأملاح)" },
      { fr: "Alerte médicale immédiate", ar: "استدعاء الطبيب على الفور" },
      { fr: "Préparer traitement d'urgence selon prescription (Aspirine, Anticoagulant, Nitrés)", ar: "تحضير أدوية الطوارئ حسب الوصفة (الأسبرين، مضادات التخثر، مشتقات النيترات)" }
    );
  }

  // 2. Embolie pulmonaire (EP)
  const hasEpRisk = d.rf_immobilization || d.rf_surgery || d.rf_cancer || d.rf_contraception || d.rf_tvp || d.rf_pregnancy || d.rf_thrombo;
  const epCriteria = d.dyspnea && (d.pain_inc_insp || hr > 100 || spo2 < 94 || d.hemoptysis || d.malaise || d.syncope) && hasEpRisk;
  if (epCriteria) {
    const isGrave = redFlags.length > 0 || sys < 90 || d.cyanosis || d.syncope || rr > 28 || spo2 < 90 || d.trouble_conscience;
    diagnoses.push({
      name_fr: 'Embolie pulmonaire (EP)',
      name_ar: 'الجلطة الرئوية (EP)',
      urg_fr: isGrave ? 'PRIORITÉ VITALE IMMÉDIATE' : 'Risque Modéré / Urgence Majeure',
      urg_ar: isGrave ? 'أولوية حيوية فورية' : 'خطورة متوسطة / حالة طارئة',
      type: 'ep'
    });
    actions.push(
      { fr: "Position demi-assise obligatoire (ne pas mobiliser le patient)", ar: "وضع المريض في وضعية نصف الجلوس (يمنع حركة المريض)" },
      { fr: "Oxygénothérapie pour maintenir SpO2 > 94%", ar: "إعطاء الأكسجين للحفاظ على نسبة الأكسجين فوق 94%" },
      { fr: "Pose de voie veineuse périphérique", ar: "تركيب كانيولا وريدية" },
      { fr: "Scope cardiaque et surveillance respiratoire continue", ar: "تركيب المراقبة القلبية ومراقبة التنفس باستمرار" },
      { fr: "Préparation des examens : D-dimères, Gaz du sang, Angioscanner pulmonaire", ar: "تحضير الفحوصات: فحص D-dimères، غازات الدم، وتجهيز المريض للأشعة المقطعية للشرايين الرئوية" },
      { fr: "Alerte médicale urgente", ar: "استدعاء الطبيب بشكل عاجل" }
    );
  }

  // 3. Dissection aortique
  const dissectionCriteria = d.pain_max_onset || d.douleur_brutale_intense || (d.pain_max_onset && (d.pain_tearing || d.rad_back || d.bp_asymmetry || d.neuro_deficit));
  if (dissectionCriteria) {
    diagnoses.push({
      name_fr: 'Dissection aortique',
      name_ar: 'تمزق الشريان الأبهر (شريان الأورطي)',
      urg_fr: 'PRIORITÉ VITALE IMMÉDIATE',
      urg_ar: 'أولوية حيوية فورية',
      type: 'dissection'
    });
    actions.push(
      { fr: "Repos au lit strict (décubitus dorsal strict, interdiction de bouger)", ar: "الاستلقاء التام والراحة المطلقة في الفراش (يمنع الحركة تماماً)" },
      { fr: "Pose de 2 voies veineuses de gros calibre", ar: "تركيب خطين وريديين (كانيولا) من مقاس كبير" },
      { fr: "Contrôle strict et fréquent de la Tension Artérielle (TA) aux deux bras", ar: "قياس ومراقبة ضغط الدم باستمرار وبشكل متكرر في كلا الذراعين" },
      { fr: "Scope et ECG immédiat", ar: "تركيب المراقبة وإجراء تخطيط القلب فوراً" },
      { fr: "Préparer le patient pour angioscanner aorte thoracique/abdominale en urgence", ar: "تجهيز المريض لإجراء أشعة مقطعية طارئة للشريان الأبهر الصدري والبطني" },
      { fr: "Alerte immédiate du médecin et du chirurgien cardiaque", ar: "استدعاء الطبيب وجراح القلب على الفور" }
    );
  }

  // 4. Pneumothorax
  const pnoCriteria = d.pain_unilateral && d.dyspnea && (d.decreased_breath_sounds || hr > 100);
  if (pnoCriteria) {
    const isCompressif = redFlags.length > 0 || rr > 28 || d.cyanosis || sys < 90 || d.tracheal_deviation || d.trouble_conscience;
    diagnoses.push({
      name_fr: isCompressif ? 'Pneumothorax compressif' : 'Pneumothorax',
      name_ar: isCompressif ? 'استرواح الصدر الضاغط (تجمع هواء خانق بالرئة)' : 'استرواح الصدر (هواء حول الرئة)',
      urg_fr: isCompressif ? 'PRIORITÉ VITALE IMMÉDIATE' : 'Risque Modéré / Urgence Majeure',
      urg_ar: isCompressif ? 'أولوية حيوية فورية' : 'خطورة متوسطة / حالة طارئة',
      type: 'pno'
    });
    actions.push(
      { fr: "Installation en position assise ou demi-assise", ar: "وضع المريض في وضعية الجلوس أو نصف الجلوس" },
      { fr: "Oxygénothérapie à fort débit si détresse", ar: "إعطاء الأكسجين بتدفق عالٍ في حال وجود صعوبة تنفس شديدة" },
      { fr: "Scope et surveillance de la fréquence respiratoire", ar: "تركيب المراقبة ومتابعة سرعة التنفس وحركة الصدر" },
      { fr: "Préparation du matériel de drainage pleural en urgence (si compressif)", ar: "تجهيز أدوات أنبوب الصدر (Drainage thoracique) فوراً في حال الاسترواح الضاغط" },
      { fr: "Préparation de la radiographie du thorax au lit", ar: "تجهيز جهاز الأشعة السينية للصدر في سرير المريض" },
      { fr: "Alerte médicale urgente", ar: "استدعاء الطبيب بشكل عاجل" }
    );
  }

  // 5. Péricardite aiguë
  const pericarditeCriteria = d.pain_inc_insp && (d.pain_insp_rel_forward || d.friction_rub || temp > 38.0);
  if (pericarditeCriteria) {
    const isTamponnade = redFlags.length > 0 || sys < 90 || d.syncope || d.decreased_breath_sounds || d.trouble_conscience;
    diagnoses.push({
      name_fr: isTamponnade ? 'Péricardite avec tamponnade' : 'Péricardite aiguë',
      name_ar: isTamponnade ? 'التهاب غشاء القلب مع انصباب خانق (Tamponnade)' : 'التهاب غشاء القلب الحاد (Péricardite)',
      urg_fr: isTamponnade ? 'PRIORITÉ VITALE IMMÉDIATE' : 'Risque Modéré / Urgence Majeure',
      urg_ar: isTamponnade ? 'أولوية حيوية فورية' : 'خطورة متوسطة / حالة طارئة',
      type: 'pericardite'
    });
    actions.push(
      { fr: "Installation confortable penché en avant si soulagé", ar: "مساعدة المريض في اتخاذ وضعية الانحناء للأمام لتخفيف الألم" },
      { fr: "ECG complet (PR sous-décalé ou surdécalé diffus)", ar: "إجراء تخطيط قلب كامل (للبحث عن علامات التهاب غشاء القلب)" },
      { fr: "Surveillance TA et recherche de tamponnade (Turgescence jugulaire, Hypotension)", ar: "مراقبة ضغط الدم للبحث عن علامات الاختناق القلبي (انتفاخ أوردة الرقبة، هبوط الضغط)" },
      { fr: "Repos au lit", ar: "الراحة التامة في السرير" }
    );
  }

  // 6. Angor stable
  const angorCriteria = d.chest_pain && d.pain_cades_repos && !d.pain_no_relief && !d.douleur_persistante_20;
  if (angorCriteria && !scaCriteria) {
    diagnoses.push({
      name_fr: 'Angor stable',
      name_ar: 'الذبحة الصدرية المستقرة (Angor)',
      urg_fr: 'Risque Modéré / Urgence Majeure',
      urg_ar: 'خطورة متوسطة / حالة طارئة',
      type: 'angor'
    });
    actions.push(
      { fr: "Repos strict immédiat au lit ou fauteuil", ar: "الراحة التامة فوراً في الفراش أو المقعد" },
      { fr: "ECG de contrôle au repos à comparer aux tracés précédents", ar: "إجراء تخطيط قلب للراحة ومقارنته بالتخطيطات السابقة" },
      { fr: "Évaluation précise de la douleur", ar: "تقييم ألم الصدر بدقة" },
      { fr: "Surveillance des constantes vitales", ar: "مراقبة العلامات الحيوية" }
    );
  }

  // 7. Causes digestives
  const digestifCriteria = d.pain_after_meals || d.regurgitations || d.acid_relief;
  if (digestifCriteria && !scaCriteria && !pericarditeCriteria) {
    diagnoses.push({
      name_fr: 'Douleur d\'origine digestive (RGO/Spasme)',
      name_ar: 'ألم من أصل هضمي (ارتجاع مريئي / تشنج مريء)',
      urg_fr: 'Faible urgence',
      urg_ar: 'أولوية منخفضة',
      type: 'digestif'
    });
    actions.push(
      { fr: "Évaluation de la douleur thoracique", ar: "تقييم مستوى الألم في الصدر" },
      { fr: "Administration d'antiacides selon prescription", ar: "إعطاء مضادات الحموضة حسب توجيهات الطبيب" },
      { fr: "Surveillance générale et élimination formelle d'une cause cardiaque", ar: "متابعة الحالة العامة والتأكد التام من استبعاد الأسباب القلبية" }
    );
  }

  // 8. Douleur musculosquelettique
  const muscleCriteria = d.pain_palpation;
  if (muscleCriteria && !scaCriteria && !dissectionCriteria && !pnoCriteria) {
    diagnoses.push({
      name_fr: 'Douleur musculosquelettique',
      name_ar: 'ألم عضلي هيكلي (في جدار الصدر)',
      urg_fr: 'Faible urgence',
      urg_ar: 'أولوية منخفضة',
      type: 'muscle'
    });
    actions.push(
      { fr: "Évaluation de l'intensité de la douleur (EVA)", ar: "تقييم شدة الألم بمقياس EVA" },
      { fr: "Rassurer le patient", ar: "طمأنة المريض وتهدئته" },
      { fr: "Administration d'antalgiques selon prescription", ar: "إعطاء مسكنات الألم حسب الوصفة" }
    );
  }

  // 9. Crise anxieuse / psychogène
  const anxieteCriteria = d.anxiety && (d.hyperventilation || d.tremors || d.paresthesia);
  if (anxieteCriteria && !scaCriteria && !epCriteria && !pnoCriteria) {
    diagnoses.push({
      name_fr: 'Crise d\'angoisse / Douleur psychogène',
      name_ar: 'نوبة قلق حادة / ألم نفسيّ المنشأ',
      urg_fr: 'Faible urgence',
      urg_ar: 'أولوية منخفضة',
      type: 'anxiete'
    });
    actions.push(
      { fr: "Mise au calme et réassurance du patient", ar: "وضع المريض في مكان هادئ وطمأنته" },
      { fr: "Technique de contrôle respiratoire (respirer lentement)", ar: "تدريب المريض على التحكم في التنفس (التنفس ببطء)" },
      { fr: "Élimination systématique d'une cause organique avant conclusion", ar: "استبعاد الأسباب العضوية أولاً قبل تأكيد التشخيص النفسي" }
    );
  }

  // Determining Global Level (3 tiers: Rouge, Orange, Vert)
  let level = "Vert";
  if (redFlags.length > 0 || diagnoses.some(d => d.urg_fr === 'PRIORITÉ VITALE IMMÉDIATE')) {
    level = "Rouge";
  } else if (diagnoses.some(d => d.urg_fr === 'Risque Modéré / Urgence Majeure')) {
    level = "Orange";
  } else {
    level = "Vert";
  }

  // Prepend critical resuscitation actions if Red Flags or level is Rouge
  if (level === 'Rouge') {
    actions.unshift(
      { fr: "Alerte médicale immédiate du médecin urgentiste", ar: "استدعاء طبيب الطوارئ على الفور" },
      { fr: "Installation en position demi-assise ou décubitus adapté", ar: "وضع المريض في وضعية نصف الجلوس أو الاستلقاء المناسب" },
      { fr: "Scope cardiaque continu et surveillance rapprochée", ar: "تركيب المراقبة القلبية (Scope) والمتابعة المستمرة" },
      { fr: "ECG immédiat (< 10 min) à transmettre au médecin", ar: "إجراء تخطيط القلب فوراً (في أقل من 10 دقائق) وعرضه على الطبيب" },
      { fr: "Prise des constantes vitales fréquentes (TA, FC, FR, SpO2)", ar: "قياس ومراقبة العلامات الحيوية بشكل متكرر" },
      { fr: "Pose d'une voie veineuse périphérique (VVP) de gros calibre", ar: "تركيب كانيولا وريدية بمقاس كبير" }
    );
  }

  // Elevate individual diagnoses priority to match global level if higher
  diagnoses.forEach(dx => {
    if (level === 'Rouge') {
      dx.urg_fr = 'PRIORITÉ VITALE IMMÉDIATE';
      dx.urg_ar = 'أولوية حيوية فورية';
    } else if (level === 'Orange' && dx.urg_fr === 'Non-dangereux / Faible Urgence') {
      dx.urg_fr = 'Risque Modéré / Urgence Majeure';
      dx.urg_ar = 'خطورة متوسطة / حالة طارئة';
    }
  });

  // Default fallback
  if (diagnoses.length === 0) {
    diagnoses.push({
      name_fr: 'Douleur thoracique à préciser',
      name_ar: 'ألم صدر غير محدد (يحتاج استقصاء)',
      urg_fr: level === 'Rouge' ? 'PRIORITÉ VITALE IMMÉDIATE' : (level === 'Orange' ? 'Risque Modéré / Urgence Majeure' : 'Non-dangereux / Faible Urgence'),
      urg_ar: level === 'Rouge' ? 'أولوية حيوية فورية' : (level === 'Orange' ? 'خطورة متوسطة / حالة طارئة' : 'غير خطير / أولوية منخفضة'),
      type: 'generic'
    });
    actions.push(
      { fr: "Repos complet", ar: "الراحة التامة للمريض" },
      { fr: "Scope et ECG de contrôle", ar: "تركيب المراقبة وعمل تخطيط القلب" },
      { fr: "Évaluation clinique continue", ar: "التقييم السريري المستمر للمريض" }
    );
  }

  // Deduplicate
  const seen = new Set();
  const uniqueActions = actions.filter(act => {
    const k = act.fr;
    return seen.has(k) ? false : seen.add(k);
  });

  return { diagnoses, level, redFlags, actions: uniqueActions };
}

// ==============================
// 3. UI Renderings
// ==============================
function renderLogin() {
  return `
    <div class="login-container">
      <div class="glass-panel login-card">
        <h2 style="text-align: center; color: var(--primary-color); margin-bottom: 2rem;">
          <i class="fas fa-heartbeat"></i> ${t('app_name')}
        </h2>
        <div id="login-alert" class="badge badge-red" style="display:none; width:100%; margin-bottom:1rem; padding:0.5rem; text-align:center;"></div>
        <form id="login-form">
          <div class="form-group">
            <label class="form-label">${t('email')}</label>
            <input type="email" id="login-email" class="form-control" placeholder="ex: admin@shaymacare.com" required>
          </div>
          <div class="form-group">
            <label class="form-label">${t('password')}</label>
            <input type="password" class="form-control" id="login-password" placeholder="••••••" required>
          </div>
          <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 1rem;">${t('connect')}</button>
        </form>
        <div style="text-align: center; margin-top: 1.5rem; display: flex; flex-direction: column; gap: 0.8rem; align-items: center;">
          <a href="#register" id="link-register" style="color: var(--primary-color); font-size: 0.9rem; text-decoration: none; font-weight: 500;">${t('no_account')}</a>
          <a href="#" id="toggle-lang" class="badge" style="background:#e2e8f0; color:#1e293b;">${t('language')}</a>
        </div>
      </div>
    </div>
  `;
}

function renderRegister() {
  return `
    <div class="login-container">
      <div class="glass-panel login-card">
        <h2 style="text-align: center; color: var(--primary-color); margin-bottom: 2rem;">
          <i class="fas fa-user-plus"></i> ${t('create_account')}
        </h2>
        <div id="register-alert" class="badge" style="display:none; width:100%; margin-bottom:1rem; padding:0.5rem; text-align:center;"></div>
        <form id="register-form">
          <div class="form-group">
            <label class="form-label">${t('name')}</label>
            <input type="text" id="reg-name" class="form-control" placeholder="ex: Sarah" required>
          </div>
          <div class="form-group">
            <label class="form-label">${t('email')}</label>
            <input type="email" id="reg-email" class="form-control" placeholder="ex: sarah@shaymacare.com" required>
          </div>
          <div class="form-group">
            <label class="form-label">${t('password')}</label>
            <input type="password" id="reg-password" class="form-control" placeholder="••••••" required>
          </div>
          <div class="form-group">
            <label class="form-label">${t('role')}</label>
            <select id="reg-role" class="form-control">
              <option value="nurse">${t('nurse')}</option>
              <option value="doctor">${t('doctor')}</option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 1rem;">${t('register')}</button>
        </form>
        <div style="text-align: center; margin-top: 1.5rem; display: flex; flex-direction: column; gap: 0.8rem; align-items: center;">
          <a href="#login" id="link-login" style="color: var(--primary-color); font-size: 0.9rem; text-decoration: none; font-weight: 500;">${t('already_have_account')}</a>
          <a href="#" id="toggle-lang" class="badge" style="background:#e2e8f0; color:#1e293b;">${t('language')}</a>
        </div>
      </div>
    </div>
  `;
}

function renderDashboard() {
  const isDoc = state.user.role === 'doctor';
  const recentPatients = [...state.patients];

  let notificationsHtml = '';
  if (state.user) {
    const dismissed = JSON.parse(localStorage.getItem('dismissed_notifications') || '[]');
    
    if (isDoc) {
      // Doctor notifications for pending patients
      const doctorPatients = recentPatients.filter(p => p.status === 'pending');
      const unreadNotifications = doctorPatients.filter(p => {
        const key = `${p.id}_pending`;
        return !dismissed.includes(key);
      });

      if (unreadNotifications.length > 0) {
        notificationsHtml = `
          <div class="notifications-container" style="margin-bottom: 1.5rem; display: flex; flex-direction: column; gap: 0.75rem;">
            ${unreadNotifications.map(p => {
              const key = `${p.id}_pending`;
              const isResubmitted = p.doc_name ? true : false;
              const border = isResubmitted ? '#fed7aa' : '#bfdbfe';
              const lightBg = isResubmitted ? '#fffedd' : '#eff6ff';
              const textCol = isResubmitted ? '#c2410c' : '#1d4ed8';
              
              const message = isResubmitted
                ? (getLang() === 'fr' 
                    ? `Le dossier de <strong>${p.name || 'Inconnu'}</strong> (Dossier N° ${p.file || '-'}) a été corrigé et renvoyé par l'infirmier ${p.nurse_name || 'Inconnu'}.` 
                    : `تم تعديل وإعادة إرسال ملف المريض <strong>${p.name || 'مجهول'}</strong> (ملف رقم ${p.file || '-'}) من قبل الممرض ${p.nurse_name || 'مجهول'}.`)
                : (getLang() === 'fr'
                    ? `Nouveau dossier patient de <strong>${p.name || 'Inconnu'}</strong> (Dossier N° ${p.file || '-'}) transmis par l'infirmier ${p.nurse_name || 'Inconnu'}.`
                    : `تم إرسال ملف مريض جديد <strong>${p.name || 'مجهول'}</strong> (ملف رقم ${p.file || '-'}) من قبل الممرض ${p.nurse_name || 'مجهول'}.`);

              return `
                <div class="notification-card glass-panel" data-id="${p.id}" data-status="pending" style="cursor: pointer; background: ${lightBg}; border: 1px solid ${border}; color: ${textCol}; padding: 1rem; border-radius: var(--radius-md); position: relative; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-1px)'; this.style.boxShadow='0 6px 8px -1px rgba(0,0,0,0.08)';" onmouseout="this.style.transform='none'; this.style.boxShadow='0 4px 6px -1px rgba(0,0,0,0.05)';">
                  <div class="notification-link" style="flex-grow: 1; text-align: ${getLang() === 'ar' ? 'right' : 'left'}; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas ${isResubmitted ? 'fa-history' : 'fa-user-plus'}" style="margin-right: 0.5rem; margin-left: 0.5rem; font-size: 1.1rem;"></i>
                    <div>${message}</div>
                  </div>
                  <button class="btn-dismiss-notif" data-key="${key}" style="background: none; border: none; font-size: 1.2rem; cursor: pointer; color: ${textCol}; opacity: 0.7; font-weight: bold; padding: 0 5px; margin-left: 0.5rem; margin-right: 0.5rem; transition: opacity 0.2s;" onmouseover="this.style.opacity='1';" onmouseout="this.style.opacity='0.7';">&times;</button>
                </div>
              `;
            }).join('')}
          </div>
        `;
      }
    } else {
      // Nurse notifications
      const nursePatients = recentPatients.filter(p => p.nurse_name === state.user.name && (p.status === 'validated' || p.status === 'returned'));
      const unreadNotifications = nursePatients.filter(p => {
        const key = `${p.id}_${p.status}`;
        return !dismissed.includes(key);
      });

      if (unreadNotifications.length > 0) {
        notificationsHtml = `
          <div class="notifications-container" style="margin-bottom: 1.5rem; display: flex; flex-direction: column; gap: 0.75rem;">
            ${unreadNotifications.map(p => {
              const key = `${p.id}_${p.status}`;
              const isVal = p.status === 'validated';
              const border = isVal ? '#bbf7d0' : '#fecaca';
              const lightBg = isVal ? '#f0fdf4' : '#fef2f2';
              const textCol = isVal ? '#15803d' : '#991b1b';
              
              const message = isVal
                ? (getLang() === 'fr' 
                    ? `Le dossier de <strong>${p.name || 'Inconnu'}</strong> (Dossier N° ${p.file || '-'}) a été validé par le médecin.` 
                    : `تمت الموافقة على ملف المريض <strong>${p.name || 'مجهول'}</strong> (ملف رقم ${p.file || '-'}) من قبل الطبيب.`)
                : (getLang() === 'fr'
                    ? `Le dossier de <strong>${p.name || 'Inconnu'}</strong> (Dossier N° ${p.file || '-'}) a été retourné pour modification : <em style="display:block; margin-top:0.25rem; color:#b91c1c;">"${p.doc_notes || ''}"</em>`
                    : `تم إرجاع ملف المريض <strong>${p.name || 'مجهول'}</strong> (ملف رقم ${p.file || '-'}) للتعديل : <em style="display:block; margin-top:0.25rem; color:#b91c1c;">"${p.doc_notes || ''}"</em>`);

              return `
                <div class="notification-card glass-panel" data-id="${p.id}" data-status="${p.status}" style="cursor: pointer; background: ${lightBg}; border: 1px solid ${border}; color: ${textCol}; padding: 1rem; border-radius: var(--radius-md); position: relative; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-1px)'; this.style.boxShadow='0 6px 8px -1px rgba(0,0,0,0.08)';" onmouseout="this.style.transform='none'; this.style.boxShadow='0 4px 6px -1px rgba(0,0,0,0.05)';">
                  <div class="notification-link" style="flex-grow: 1; text-align: ${getLang() === 'ar' ? 'right' : 'left'}; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas ${isVal ? 'fa-check-circle' : 'fa-exclamation-circle'}" style="margin-right: 0.5rem; margin-left: 0.5rem; font-size: 1.1rem;"></i>
                    <div>${message}</div>
                  </div>
                  <button class="btn-dismiss-notif" data-key="${key}" style="background: none; border: none; font-size: 1.2rem; cursor: pointer; color: ${textCol}; opacity: 0.7; font-weight: bold; padding: 0 5px; margin-left: 0.5rem; margin-right: 0.5rem; transition: opacity 0.2s;" onmouseover="this.style.opacity='1';" onmouseout="this.style.opacity='0.7';">&times;</button>
                </div>
              `;
            }).join('')}
          </div>
        `;
      }
    }
  }

  return `
    <div class="app-container">
      <div class="patient-header" style="${isDoc ? 'background: linear-gradient(135deg, #10b981, #059669);' : ''}">
        <div>
          <h2>${isDoc ? t('dashboard_doc') : t('dashboard_nurse')}</h2>
          <p>${state.user.name}</p>
        </div>
        ${!isDoc ? `<button id="btn-new-patient" class="btn" style="background: white; color: var(--primary-color);"><i class="fas fa-plus"></i> ${t('new_patient')}</button>` : ''}
      </div>

      <div class="glass-panel" style="margin-top:2rem;">
        ${notificationsHtml}
        <h3 style="margin-bottom: 1.5rem;">${t('patient_list')}</h3>
        ${recentPatients.length > 0 ? `
          <div style="overflow-x:auto;">
          <table style="width: 100%; border-collapse: collapse; text-align: ${getLang() === 'ar' ? 'right' : 'left'};">
            <thead style="border-bottom: 2px solid var(--border-color);">
              <tr>
                <th style="padding: 1rem 0.5rem;">${t('first_last_name')}</th>
                <th style="padding: 1rem 0.5rem;">Urgence</th>
                <th style="padding: 1rem 0.5rem;">Par</th>
                <th style="padding: 1rem 0.5rem;">Date</th>
                <th style="padding: 1rem 0.5rem;">Status</th>
                <th style="padding: 1rem 0.5rem;">Action</th>
              </tr>
            </thead>
            <tbody>
              ${recentPatients.map(p => {
                const diag = generateDiagnostics(p);
                let displayLvl = diag.level || '-';
                if(getLang()==='ar') {
                  displayLvl = diag.level==='Rouge'?'أولوية حيوية':diag.level==='Orange'?'خطورة متوسطة':'غير خطير';
                } else {
                  displayLvl = diag.level==='Rouge'?'Priorité Vitale':diag.level==='Orange'?'Risque Modéré':'Non-dangereux';
                }
                return `
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 1rem 0.5rem; font-weight: 500;">
                    <span style="color: var(--text-secondary); font-size: 0.8rem; margin-right: 0.4rem; margin-left: 0.4rem; background: var(--surface-color-solid); padding: 2px 6px; border-radius: 4px; border: 1px solid var(--border-color);">
                      N° ${p.file || '-'}
                    </span>
                    ${p.name || 'Inconnu'}
                  </td>
                  <td style="padding: 1rem 0.5rem;"><span class="badge ${diag.level==='Rouge'?'badge-red':diag.level==='Orange'?'badge-orange':'badge-green'}">${displayLvl}</span></td>
                  <td style="padding: 1rem 0.5rem;">${p.nurse_name}</td>
                  <td style="padding: 1rem 0.5rem; font-size:0.8rem;">${p.timestamp}</td>
                  <td style="padding: 1rem 0.5rem; font-size:0.9rem; color: ${p.status === 'validated' ? 'var(--success-color)' : (p.status === 'returned' ? 'var(--danger-color)' : 'var(--warning-color)')}; font-weight: 500;">
                    ${p.status === 'validated' ? t('status_validated') : (p.status === 'returned' ? t('status_returned') : t('status_pending'))}
                  </td>
                  <td style="padding: 1rem 0.5rem;">
                    <button class="btn btn-outline btn-consult" data-id="${p.id}" style="padding: 4px 8px; font-size:0.8rem;">${t('view_details')}</button>
                    ${!isDoc && p.status === 'returned' ? `
                      <button class="btn btn-primary btn-edit-wizard" data-id="${p.id}" style="padding: 4px 8px; font-size:0.8rem; background: var(--warning-color); border-color: var(--warning-color); color: white;"><i class="fas fa-edit"></i> ${getLang() === 'fr' ? 'Modifier' : 'تعديل'}</button>
                    ` : ''}
                  </td>
                </tr>
              `}).join('')}
            </tbody>
          </table>
          </div>
        ` : `<p style="color: var(--text-secondary);">${getLang() === 'fr' ? 'Aucun patient.' : 'لا يوجد مرضى.'}</p>`}
      </div>
    </div>
  `;
}

function renderAdminDashboard() {
  const isUsers = adminState.tab === 'users';
  return `
    <div class="app-container">
      <div class="patient-header" style="background: linear-gradient(135deg, #a855f7, #7c3aed);">
        <div>
          <h2>${t('dashboard_admin')}</h2>
          <p>${state.user.name}</p>
        </div>
      </div>

      <div style="margin-top: 2rem; display: flex; gap: 1rem;">
        <button id="tab-users" class="btn ${isUsers ? 'btn-primary' : 'btn-outline'}">${t('manage_users')}</button>
        <button id="tab-patients" class="btn ${!isUsers ? 'btn-primary' : 'btn-outline'}">${t('manage_patients')}</button>
      </div>

      <div class="glass-panel" style="margin-top: 2rem;">
        ${isUsers ? renderAdminUsersTable() : renderAdminPatientsTable()}
      </div>
    </div>
  `;
}

function renderAdminUsersTable() {
  return `
    <h3 style="margin-bottom: 1.5rem;">${t('manage_users')}</h3>
    <div style="overflow-x:auto;">
      <table style="width: 100%; border-collapse: collapse; text-align: ${getLang() === 'ar' ? 'right' : 'left'};">
        <thead style="border-bottom: 2px solid var(--border-color);">
          <tr>
            <th style="padding: 1rem 0.5rem;">${t('name')}</th>
            <th style="padding: 1rem 0.5rem;">${t('email')}</th>
            <th style="padding: 1rem 0.5rem;">Doctor</th>
            <th style="padding: 1rem 0.5rem;">${t('actions')}</th>
          </tr>
        </thead>
        <tbody>
          ${adminUsers.map(u => {
            const isEditing = adminState.editingUserId === u.id;
            if (isEditing) {
              return `
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.5rem;"><input type="text" id="edit-name-${u.id}" class="form-control" value="${u.name}" style="padding: 0.4rem;"></td>
                  <td style="padding: 0.5rem;"><input type="email" id="edit-email-${u.id}" class="form-control" value="${u.email}" style="padding: 0.4rem;"></td>
                  <td style="padding: 0.5rem;">
                    <select id="edit-role-${u.id}" class="form-control" style="padding: 0.4rem;">
                      <option value="nurse" ${u.role === 'nurse' ? 'selected' : ''}>${t('nurse')}</option>
                      <option value="doctor" ${u.role === 'doctor' ? 'selected' : ''}>${t('doctor')}</option>
                      <option value="admin" ${u.role === 'admin' ? 'selected' : ''}>Admin</option>
                    </select>
                  </td>
                  <td style="padding: 0.5rem;">
                    <button class="btn btn-primary btn-save" data-id="${u.id}" style="padding: 4px 8px; font-size:0.8rem;">${t('save')}</button>
                    <button class="btn btn-outline btn-cancel" style="padding: 4px 8px; font-size:0.8rem;">${t('cancel')}</button>
                  </td>
                </tr>
              `;
            } else {
              return `
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 1rem 0.5rem; font-weight: 500;">${u.name}</td>
                  <td style="padding: 1rem 0.5rem;">${u.email}</td>
                  <td style="padding: 1rem 0.5rem;">${u.role === 'admin' ? 'Admin' : u.role === 'doctor' ? t('doctor') : t('nurse')}</td>
                  <td style="padding: 1rem 0.5rem;">
                    <button class="btn btn-outline btn-edit" data-id="${u.id}" style="padding: 4px 8px; font-size: 0.8rem;">${t('edit')}</button>
                    <button class="btn btn-outline btn-del" data-id="${u.id}" style="padding: 4px 8px; font-size: 0.8rem; border-color: var(--danger-color); color: var(--danger-color);">${t('delete')}</button>
                  </td>
                </tr>
              `;
            }
          }).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function renderAdminPatientsTable() {
  const isAr = getLang() === 'ar';
  return `
    <h3 style="margin-bottom: 1.5rem;">${t('manage_patients')}</h3>
    ${state.patients.length > 0 ? `
      <div style="overflow-x:auto;">
      <table style="width: 100%; border-collapse: collapse; text-align: ${isAr ? 'right' : 'left'};">
        <thead style="border-bottom: 2px solid var(--border-color);">
          <tr>
            <th style="padding: 1rem 0.5rem;">${t('first_last_name')}</th>
            <th style="padding: 1rem 0.5rem;">Urgence</th>
            <th style="padding: 1rem 0.5rem;">Par</th>
            <th style="padding: 1rem 0.5rem;">Date</th>
            <th style="padding: 1rem 0.5rem;">Status</th>
            <th style="padding: 1rem 0.5rem;">Doctor</th>
            <th style="padding: 1rem 0.5rem;">${t('action')}</th>
          </tr>
        </thead>
        <tbody>
          ${state.patients.map(p => {
            const diag = generateDiagnostics(p);
            let displayLvl = diag.level || '-';
            if (isAr) {
              displayLvl = diag.level === 'Rouge' ? 'أولوية حيوية' : diag.level === 'Orange' ? 'خطورة متوسطة' : 'غير خطير';
            } else {
              displayLvl = diag.level === 'Rouge' ? 'Priorité Vitale' : diag.level === 'Orange' ? 'Risque Modéré' : 'Non-dangereux';
            }
            return `
              <tr style="border-bottom: 1px solid var(--border-color);">
                <td style="padding: 1rem 0.5rem; font-weight: 500;">
                  <span style="color: var(--text-secondary); font-size: 0.8rem; margin-right: 0.4rem; margin-left: 0.4rem; background: var(--surface-color-solid); padding: 2px 6px; border-radius: 4px; border: 1px solid var(--border-color);">
                    N° ${p.file || '-'}
                  </span>
                  ${p.name || 'Inconnu'}
                </td>
                <td style="padding: 1rem 0.5rem;"><span class="badge ${diag.level === 'Rouge' ? 'badge-red' : diag.level === 'Orange' ? 'badge-orange' : 'badge-green'}">${displayLvl}</span></td>
                <td style="padding: 1rem 0.5rem;">${p.nurse_name}</td>
                <td style="padding: 1rem 0.5rem; font-size:0.8rem;">${p.timestamp}</td>
                <td style="padding: 1rem 0.5rem; font-size:0.9rem; color: ${p.status === 'validated' ? 'var(--success-color)' : (p.status === 'returned' ? 'var(--danger-color)' : 'var(--warning-color)')}; font-weight: 500;">
                  ${p.status === 'validated' ? t('status_validated') : (p.status === 'returned' ? t('status_returned') : t('status_pending'))}
                </td>
                <td style="padding: 1rem 0.5rem;">${p.doc_name || '-'}</td>
                <td style="padding: 1rem 0.5rem;">
                  <button class="btn btn-outline btn-consult" data-id="${p.id}" style="padding: 4px 8px; font-size:0.8rem;">${t('view_details')}</button>
                  <button class="btn btn-del-patient btn-outline" data-id="${p.id}" style="padding: 4px 8px; font-size: 0.8rem; border-color: var(--danger-color); color: var(--danger-color);">${t('delete')}</button>
                </td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
      </div>
    ` : `<p style="color: var(--text-secondary);">${isAr ? 'لا يوجد مرضى.' : 'Aucun patient.'}</p>`}
  `;
}

function renderDoctorView() {
  const p = getPatient(state.currentPatientId);
  if(!p) return renderDashboard();
  const isAr = getLang() === 'ar';

  let displayLvl = p.diag?.level || '-';
  if(isAr) {
    displayLvl = p.diag?.level==='Rouge'?t('urg_extreme'):p.diag?.level==='Orange'?t('urg_major'):t('urg_low');
  } else {
    displayLvl = p.diag?.level==='Rouge'?t('urg_extreme'):p.diag?.level==='Orange'?t('urg_major'):t('urg_low');
  }

  const isDoc = state.user.role === 'doctor';
  const isValidated = p.status === 'validated';

  return `
    <div class="app-container">
      <div class="glass-panel">
        <h2 style="color: var(--primary-color); border-bottom: 2px solid var(--border-color); padding-bottom: 1rem; margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
          <span>${t('medical_decision')} - ${p.name || 'Inconnu'}</span>
          <span style="font-size: 1.1rem; color: var(--text-secondary); font-weight: normal; background: var(--surface-color-solid); padding: 4px 10px; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
            ${t('file_number')}: ${p.file || '-'}
          </span>
        </h2>
        <div class="grid-2">
          <div>
            <h4 style="margin-bottom: 1rem;">${t('clinical_data')}</h4>
            <div style="background: var(--surface-color-solid); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); font-size:0.9rem; max-height: 500px; overflow-y: auto;">
              <p><strong>Niveau:</strong> <span class="badge ${p.diag?.level==='Rouge'?'badge-red':p.diag?.level==='Orange'?'badge-orange':'badge-green'}">${displayLvl}</span></p>
              <p><strong>${t('file_number')}:</strong> ${p.file || '-'}</p>
              <p><strong>Arrivée:</strong> ${p.date||'-'} à ${p.time_arrive||'-'} (${p.mode||'-'} - ${p.service||'-'})</p>
              <hr style="margin: 0.5rem 0; border:none; border-top:1px dashed var(--border-color);">
              <p><strong>Symptômes:</strong> ${p.chest_pain?'⚠️Douleur thoracique ':''}${p.dyspnea?'⚡️Dyspnée ':''}${p.sweats?'Sueurs ':''}${p.nausea?'Nausée ':''}${p.vomit?'Vomi ':''}${p.palp?'Palpitations ':''}${p.vertigo?'Vertiges ':''}${p.syncope?'⚠️Syncope ':''}${p.anxiety?'Anxiété ':''}${p.pallor?'شحوب/Pâleur ':''}${p.fatigue?'إرهاق/Fatigue ':''}${p.epigastric_pain?'ألم معدة/Épigastrique ':''}${p.hemoptysis?'نفث دم/Hémoptysie ':''}${p.cyanosis?'ازرقاق/Cyanose ':''}</p>
              <p><strong>Douleur:</strong> ${p.pain_type||'-'}, EVA: ${p.eva||0}/10, Irradie: ${p.rad_arm?'Bras ':''}${p.rad_jaw?'Machoire ':''}${p.rad_back?'Dos ':''}${p.rad_sh?'Épaule ':''}</p>
              <hr style="margin: 0.5rem 0; border:none; border-top:1px dashed var(--border-color);">
              <p><strong>${t('vitals')}:</strong> TA: ${p.bp||'-'} | FC: ${p.hr||'-'} | FR: ${p.rr||'-'} | SpO2: ${p.spo2||'-'}% | Temp: ${p.temp||'-'} | Gly: ${p.glyc||'-'}</p>
              <p><strong>Risques:</strong> ${p.rf_htn?'HTA ':''}${p.rf_diab?'Diabète ':''}${p.rf_smoke?'Tabac ':''}${p.rf_cardiac?'Cardiaque ':''}${p.rf_tvp?'TVP ':''}${p.rf_thrombo?'Thromboembolique ':''}</p>
              <hr style="margin: 0.5rem 0; border:none; border-top:1px dashed var(--border-color);">
              <p><strong>Hypothèses Démontrées (Auto):</strong></p>
              <ul>${p.diag?.diagnoses.map(d => `<li>${isAr ? d.name_ar : d.name_fr} (${isAr ? d.urg_ar : d.urg_fr})</li>`).join('') || '<li>Aucune certitude</li>'}</ul>
              
              ${p.diag?.redFlags && p.diag.redFlags.length > 0 ? `
                <p style="color:var(--danger-color); font-weight:bold; margin-top:0.8rem;">Red Flags détectés:</p>
                <ul style="color:var(--danger-color);">${p.diag.redFlags.map(rf => `<li>${isAr ? rf.name_ar : rf.name_fr}</li>`).join('')}</ul>
              ` : ''}

              ${p.diag?.actions && p.diag.actions.length > 0 ? `
                <p style="color:var(--success-color); font-weight:bold; margin-top:0.8rem;">Actions Infirmières recommandées:</p>
                <ul style="color:var(--success-color);">${p.diag.actions.map(act => `<li>✓ ${isAr ? act.ar : act.fr}</li>`).join('')}</ul>
              ` : ''}
              
              <p style="margin-top: 1rem; color: var(--text-secondary); font-size: 0.8rem;">Saisi par: ${p.nurse_name}</p>
            </div>
          </div>
          
          <div>
            <h4 style="margin-bottom: 1rem;">${t('validate_care')}</h4>
            <div style="background: var(--surface-color-solid); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
              <div class="form-group">
                <label class="form-label">${t('orientation')}</label>
                <select id="doc_orientation" class="form-control" ${!isDoc || isValidated ? 'disabled' : ''}>
                  <option value="Hospitalisation" ${p.doc_orientation==='Hospitalisation'?'selected':''}>${t('hospitalization')}</option>
                  <option value="Déchocage" ${p.doc_orientation==='Déchocage'?'selected':''}>${t('shock_room')}</option>
                  <option value="Cardiologie" ${p.doc_orientation==='Cardiologie'?'selected':''}>Service de cardiologie</option>
                  <option value="Domicile" ${p.doc_orientation==='Domicile'?'selected':''}>Retour à domicile</option>
                  <option value="Transfert" ${p.doc_orientation==='Transfert'?'selected':''}>Transfert</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Remarques & Ordonnance</label>
                <textarea id="doc_notes" class="form-control" rows="4" ${!isDoc || isValidated ? 'disabled' : ''}>${p.doc_notes || ''}</textarea>
              </div>
              ${isDoc ? `
                ${!isValidated ? `
                  <button id="btn-validate" class="btn btn-primary" style="width: 100%;"><i class="fas fa-check-double"></i> ${t('validate_care')}</button>
                  <button id="btn-return" class="btn btn-outline" style="width: 100%; margin-top: 0.5rem; border-color: var(--warning-color); color: var(--warning-color); font-weight: 500;"><i class="fas fa-undo"></i> ${getLang() === 'fr' ? 'Retourner pour modification' : 'إرجاع للتعديل'}</button>
                ` : `<div class="badge badge-green" style="display:block; text-align:center; padding: 1rem; font-weight: bold; background: #d1fae5; color: #065f46; border: 1px solid #a7f3d0;">Dossier validé par ${p.doc_name}</div>`}
              ` : `
                ${p.status === 'validated' ? `
                  <div class="badge badge-green" style="display:block; text-align:center; padding: 1rem; font-weight: bold; background: #d1fae5; color: #065f46; border: 1px solid #a7f3d0;">Dossier validé par ${p.doc_name}</div>
                ` : (p.status === 'returned' ? `
                  <div class="badge badge-red" style="display:block; text-align:center; padding: 1rem; font-weight: bold; background: #fee2e2; color: #991b1b; border: 1px solid #fecaca;">
                    ${getLang() === 'fr' ? 'Dossier retourné par le médecin pour modification.' : 'تم إرجاع الملف من قبل الطبيب للتعديل.'}
                  </div>
                ` : `
                  <div class="badge badge-orange" style="display:block; text-align:center; padding: 1rem; font-weight: bold; background: #ffedd5; color: #9a3412; border: 1px solid #fed7aa;">
                    ${getLang() === 'fr' ? 'En attente de validation par le médecin.' : 'قيد انتظار تأكيد الطبيب.'}
                  </div>
                `)}
              `}
            </div>
            <button id="btn-back-dash" class="btn btn-outline" style="margin-top: 1rem; width: 100%;">${getLang()==='fr'?'Retour':'رجوع'}</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderWizardShell(content, step) {
  return `<div class="app-container"><div class="glass-panel"><h2 style="margin-bottom:1rem;color:var(--primary-color)">${t('new_patient')} (Étape ${step}/6)</h2><div id="wizard-content">${content}</div><div style="display:flex; justify-content:space-between; margin-top:2rem; border-top:1px solid #e2e8f0; padding-top:1rem;"><button id="btn-prev" class="btn btn-outline" ${step===1?'disabled':''}>${t('prev')}</button><button id="btn-next" class="btn btn-primary">${step===6?t('finish'):t('next')}</button></div></div></div>`;
}

function renderWizard() {
  const s = wizardState.step; const d = wizardState.data; let c = '';
  
  if (s === 1) { 
    c = `
    <div class="grid-2">
      <div class="form-group"><label>${t('first_last_name')}</label><input type="text" id="w_name" class="form-control" value="${d.name||''}"></div>
      <div class="form-group"><label>${t('file_number')}</label><input type="text" id="w_file" class="form-control" value="${d.file||''}"></div>
      <div class="form-group"><label>${t('age')}</label><input type="number" id="w_age" class="form-control" value="${d.age||''}"></div>
      <div class="form-group"><label>${t('gender')}</label>
        <select id="w_gender" class="form-control">
          <option value="M" ${d.gender==='M'?'selected':''}>${t('male')}</option>
          <option value="F" ${d.gender==='F'?'selected':''}>${t('female')}</option>
        </select>
      </div>
      <div class="form-group"><label>${t('date')}</label><input type="date" id="w_date" class="form-control" value="${d.date||''}"></div>
      <div class="form-group"><label>${t('arrival_time')}</label><input type="time" id="w_time_arrive" class="form-control" value="${d.time_arrive||''}"></div>
      <div class="form-group"><label>${t('arrival_mode')}</label>
        <select id="w_mode" class="form-control">
          <option value="Ambulance" ${d.mode==='Ambulance'?'selected':''}>${t('ambulance')}</option>
          <option value="Spontanee" ${d.mode==='Spontanee'?'selected':''}>${t('walk_in')}</option>
          <option value="Transfert" ${d.mode==='Transfert'?'selected':''}>${t('transfer')}</option>
        </select>
      </div>
      <div class="form-group"><label>${t('department')}</label>
        <select id="w_service" class="form-control">
          <option value="Urgences" ${d.service==='Urgences'?'selected':''}>${t('emergencies')}</option>
          <option value="Dechocage" ${d.service==='Dechocage'?'selected':''}>${t('shock_room')}</option>
          <option value="Observation" ${d.service==='Observation'?'selected':''}>${t('obs_room')}</option>
        </select>
      </div>
    </div>`;
  }
  else if (s === 2) { 
    c = `
    <div class="grid-2">
      <div>
        <h4 style="margin-bottom:1rem;"><i class="fas fa-notes-medical"></i> ${t('symptoms')}</h4>
        <div style="max-height: 350px; overflow-y: auto; border: 1px solid var(--border-color); padding: 0.8rem; border-radius: var(--radius-sm); background: var(--surface-color-solid);">
          <label class="checkbox-group"><input type="checkbox" id="w_chest" ${d.chest_pain?'checked':''}> <strong>${t('chest_pain')}</strong></label>
          <label class="checkbox-group"><input type="checkbox" id="w_dyspnea" ${d.dyspnea?'checked':''}> ${t('dyspnea')}</label>
          <label class="checkbox-group"><input type="checkbox" id="w_sweats" ${d.sweats?'checked':''}> ${t('sweats')}</label>
          <label class="checkbox-group"><input type="checkbox" id="w_nausea" ${d.nausea?'checked':''}> ${t('nausea')}</label>
          <label class="checkbox-group"><input type="checkbox" id="w_vomit" ${d.vomit?'checked':''}> ${t('vomiting')}</label>
          <label class="checkbox-group"><input type="checkbox" id="w_palp" ${d.palp?'checked':''}> ${t('palpitations')}</label>
          <label class="checkbox-group"><input type="checkbox" id="w_vertigo" ${d.vertigo?'checked':''}> ${t('dizziness')}</label>
          <label class="checkbox-group"><input type="checkbox" id="w_syncope" ${d.syncope?'checked':''}> ${t('syncope')}</label>
          <label class="checkbox-group"><input type="checkbox" id="w_anxiety" ${d.anxiety?'checked':''}> ${t('anxiety')}</label>
          
          <hr style="margin: 0.5rem 0; border: none; border-top: 2px solid var(--danger-color);">
          <h5 style="margin: 0.5rem 0; color: var(--danger-color); font-weight: bold;"><i class="fas fa-exclamation-triangle"></i> ${getLang()==='fr'?'DANGER / RED FLAGS MANUELS':'علامات الخطر الحرجة اليدوية'}</h5>
          <label class="checkbox-group" style="color: var(--danger-color); font-weight: 500;"><input type="checkbox" id="w_trouble_conscience" ${d.trouble_conscience?'checked':''}> ${t('trouble_conscience')}</label>
          <label class="checkbox-group" style="color: var(--danger-color); font-weight: 500;"><input type="checkbox" id="w_dyspnee_severe" ${d.dyspnee_severe?'checked':''}> ${t('dyspnee_severe')}</label>
          <label class="checkbox-group" style="color: var(--danger-color); font-weight: 500;"><input type="checkbox" id="w_douleur_brutale_intense" ${d.douleur_brutale_intense?'checked':''}> ${t('douleur_brutale_intense')}</label>
          <label class="checkbox-group" style="color: var(--danger-color); font-weight: 500;"><input type="checkbox" id="w_douleur_persistante_20" ${d.douleur_persistante_20?'checked':''}> ${t('douleur_persistante_20')}</label>
          <label class="checkbox-group" style="color: var(--danger-color); font-weight: 500;"><input type="checkbox" id="w_signes_neuro" ${d.signes_neuro?'checked':''}> ${t('signes_neuro')}</label>

          <hr style="margin: 0.5rem 0; border: none; border-top: 1px solid var(--border-color);">
          <h5 style="margin: 0.5rem 0; color: var(--primary-color);">${getLang()==='fr'?'Signes Additionnels':'علامات إضافية'}</h5>
          <label class="checkbox-group"><input type="checkbox" id="w_pallor" ${d.pallor?'checked':''}> ${t('pallor')}</label>
          <label class="checkbox-group"><input type="checkbox" id="w_fatigue" ${d.fatigue?'checked':''}> ${t('fatigue')}</label>
          <label class="checkbox-group"><input type="checkbox" id="w_epigastric_pain" ${d.epigastric_pain?'checked':''}> ${t('epigastric_pain')}</label>
          <label class="checkbox-group"><input type="checkbox" id="w_malaise" ${d.malaise?'checked':''}> ${t('malaise')}</label>
          <label class="checkbox-group"><input type="checkbox" id="w_hemoptysis" ${d.hemoptysis?'checked':''}> ${t('hemoptysis')}</label>
          <label class="checkbox-group"><input type="checkbox" id="w_decreased_breath_sounds" ${d.decreased_breath_sounds?'checked':''}> ${t('decreased_breath_sounds')}</label>
          <label class="checkbox-group"><input type="checkbox" id="w_neuro_deficit" ${d.neuro_deficit?'checked':''}> ${t('neuro_deficit')}</label>
          <label class="checkbox-group"><input type="checkbox" id="w_limb_ischemia" ${d.limb_ischemia?'checked':''}> ${t('limb_ischemia')}</label>
          <label class="checkbox-group"><input type="checkbox" id="w_tracheal_deviation" ${d.tracheal_deviation?'checked':''}> ${t('tracheal_deviation')}</label>
          <label class="checkbox-group"><input type="checkbox" id="w_cyanosis" ${d.cyanosis?'checked':''}> ${t('cyanosis')}</label>
          <label class="checkbox-group"><input type="checkbox" id="w_hyperventilation" ${d.hyperventilation?'checked':''}> ${t('hyperventilation')}</label>
          <label class="checkbox-group"><input type="checkbox" id="w_tremors" ${d.tremors?'checked':''}> ${t('tremors')}</label>
          <label class="checkbox-group"><input type="checkbox" id="w_paresthesia" ${d.paresthesia?'checked':''}> ${t('paresthesia')}</label>
        </div>
      </div>
      
      <div>
        <h4 style="margin-bottom:1rem;"><i class="fas fa-stethoscope"></i> ${t('pain_characteristics')}</h4>
        <div style="max-height: 350px; overflow-y: auto; border: 1px solid var(--border-color); padding: 0.8rem; border-radius: var(--radius-sm); background: var(--surface-color-solid);">
          <div class="form-group"><label>${t('location')}</label><input type="text" id="w_loc_pain" class="form-control" value="${d.loc_pain||''}"></div>
          <div class="form-group"><label>${t('radiation')}</label>
            <label class="checkbox-group"><input type="checkbox" id="w_rad_arm" ${d.rad_arm?'checked':''}> ${t('left_arm')}</label>
            <label class="checkbox-group"><input type="checkbox" id="w_rad_jaw" ${d.rad_jaw?'checked':''}> ${t('jaw')}</label>
            <label class="checkbox-group"><input type="checkbox" id="w_rad_back" ${d.rad_back?'checked':''}> ${t('back')}</label>
            <label class="checkbox-group"><input type="checkbox" id="w_rad_sh" ${d.rad_sh?'checked':''}> ${t('shoulder')}</label>
          </div>
          <div class="form-group"><label>${t('pain_type')}</label>
            <select id="w_pain_type" class="form-control">
              <option value="oppressive" ${d.pain_type==='oppressive'?'selected':''}>${t('oppressive')}</option>
              <option value="brulure" ${d.pain_type==='brulure'?'selected':''}>${t('burning')}</option>
              <option value="piqure" ${d.pain_type==='piqure'?'selected':''}>${t('stabbing')}</option>
              <option value="other" ${d.pain_type==='other'?'selected':''}>${t('other')}</option>
            </select>
          </div>
          <div class="form-group"><label>${t('pain_start')}</label><input type="time" id="w_t_pain" class="form-control" value="${d.t_pain||''}"></div>
          <div class="form-group"><label>${t('pain_intensity')}</label><input type="number" id="w_eva" class="form-control" max="10" min="0" value="${d.eva||0}"></div>
          
          <hr style="margin: 0.5rem 0; border: none; border-top: 1px solid var(--border-color);">
          <h5 style="margin: 0.5rem 0; color: var(--primary-color);">${getLang()==='fr'?'Critères Évolutifs Additionnels':'خصائص الألم الإضافية'}</h5>
          <label class="checkbox-group"><input type="checkbox" id="w_pain_no_relief" ${d.pain_no_relief?'checked':''}> ${t('pain_no_relief')}</label>
          <label class="checkbox-group"><input type="checkbox" id="w_pain_cades_repos" ${d.pain_cades_repos?'checked':''}> ${t('pain_cades_repos')}</label>
          <label class="checkbox-group"><input type="checkbox" id="w_pain_inc_insp" ${d.pain_inc_insp?'checked':''}> ${t('pain_inc_insp')}</label>
          <label class="checkbox-group"><input type="checkbox" id="w_pain_insp_rel_forward" ${d.pain_insp_rel_forward?'checked':''}> ${t('pain_insp_rel_forward')}</label>
          <label class="checkbox-group"><input type="checkbox" id="w_pain_max_onset" ${d.pain_max_onset?'checked':''}> ${t('pain_max_onset')}</label>
          <label class="checkbox-group"><input type="checkbox" id="w_pain_tearing" ${d.pain_tearing?'checked':''}> ${t('pain_tearing')}</label>
          <label class="checkbox-group"><input type="checkbox" id="w_pain_unilateral" ${d.pain_unilateral?'checked':''}> ${t('pain_unilateral')}</label>
          <label class="checkbox-group"><input type="checkbox" id="w_pain_palpation" ${d.pain_palpation?'checked':''}> ${t('pain_palpation')}</label>
          <label class="checkbox-group"><input type="checkbox" id="w_pain_after_meals" ${d.pain_after_meals?'checked':''}> ${t('pain_after_meals')}</label>
          <label class="checkbox-group"><input type="checkbox" id="w_regurgitations" ${d.regurgitations?'checked':''}> ${t('regurgitations')}</label>
          <label class="checkbox-group"><input type="checkbox" id="w_acid_relief" ${d.acid_relief?'checked':''}> ${t('acid_relief')}</label>
        </div>
      </div>
    </div>`;
  }
  else if (s === 3) { 
    c = `
    <div class="grid-3">
      <div class="form-group"><label>${t('bp')}</label><input type="text" id="w_bp" class="form-control" value="${d.bp||''}"></div>
      <div class="form-group"><label>${t('hr')}</label><input type="number" id="w_hr" class="form-control" value="${d.hr||''}"></div>
      <div class="form-group"><label>${t('rr')}</label><input type="number" id="w_rr" class="form-control" value="${d.rr||''}"></div>
      <div class="form-group"><label>${t('spo2')}</label><input type="number" id="w_spo2" class="form-control" value="${d.spo2||''}"></div>
      <div class="form-group"><label>${t('temp')}</label><input type="number" step="0.1" id="w_temp" class="form-control" value="${d.temp||''}"></div>
      <div class="form-group"><label>${t('glycemia')}</label><input type="number" id="w_glyc" class="form-control" value="${d.glyc||''}"></div>
    </div>
    <div class="form-group" style="margin-top: 1rem;">
      <label class="checkbox-group"><input type="checkbox" id="w_bp_asymmetry" ${d.bp_asymmetry?'checked':''}> <strong>${t('bp_asymmetry')}</strong></label>
    </div>
    
    <div style="background: #fef2f2; border: 1px solid #fee2e2; border-radius: var(--radius-md); padding: 1rem; margin-top: 1rem; color: #991b1b; margin-bottom: 1rem;">
      <h5 style="color:#b91c1c; margin-bottom: 0.8rem; font-weight: bold;"><i class="fas fa-exclamation-triangle"></i> ${getLang()==='fr'?'Alertes Cliniques / Overrides de Constantes':'تنبيهات سريرية يدوية للعلامات الحيوية'}</h5>
      <div class="grid-2">
        <label class="checkbox-group" style="margin: 0; color: #b91c1c;"><input type="checkbox" id="w_hypotension" ${d.hypotension?'checked':''}> ${t('hypotension_suspectee')}</label>
        <label class="checkbox-group" style="margin: 0; color: #b91c1c;"><input type="checkbox" id="w_desaturation" ${d.desaturation?'checked':''}> ${t('desaturation_suspectee')}</label>
        <label class="checkbox-group" style="margin: 0; color: #b91c1c;"><input type="checkbox" id="w_tachycardie_majeure" ${d.tachycardie_majeure?'checked':''}> ${t('tachycardie_majeure_suspectee')}</label>
        <label class="checkbox-group" style="margin: 0; color: #b91c1c;"><input type="checkbox" id="w_bradycardie_severe" ${d.bradycardie_severe?'checked':''}> ${t('bradycardie_severe_suspectee')}</label>
        <label class="checkbox-group" style="margin: 0; color: #b91c1c; grid-column: span 2;"><input type="checkbox" id="w_trouble_rythme" ${d.trouble_rythme?'checked':''}> ${t('trouble_rythme')}</label>
      </div>
    </div>
    
    <h4 style="margin-top:1.5rem; border-top:1px solid #e2e8f0; padding-top:1.5rem;"><i class="fas fa-heart"></i> ${t('risk_factors')}</h4>
    <div style="max-height: 200px; overflow-y: auto; border: 1px solid var(--border-color); padding: 0.8rem; border-radius: var(--radius-sm); background: var(--surface-color-solid); margin-top: 0.5rem;">
      <div class="grid-3">
        <label class="checkbox-group"><input type="checkbox" id="w_rf_htn" ${d.rf_htn?'checked':''}> ${t('htn')}</label>
        <label class="checkbox-group"><input type="checkbox" id="w_rf_diab" ${d.rf_diab?'checked':''}> ${t('diabetes')}</label>
        <label class="checkbox-group"><input type="checkbox" id="w_rf_smoke" ${d.rf_smoke?'checked':''}> ${t('smoking')}</label>
        <label class="checkbox-group"><input type="checkbox" id="w_rf_obes" ${d.rf_obes?'checked':''}> ${t('obesity')}</label>
        <label class="checkbox-group"><input type="checkbox" id="w_rf_dyslip" ${d.rf_dyslip?'checked':''}> ${t('dyslipidemia')}</label>
        <label class="checkbox-group"><input type="checkbox" id="w_rf_cardiac" ${d.rf_cardiac?'checked':''}> ${t('cardiac_history')}</label>
        <label class="checkbox-group"><input type="checkbox" id="w_rf_family" ${d.rf_family?'checked':''}> ${t('family_history')}</label>
        <label class="checkbox-group"><input type="checkbox" id="w_rf_sed" ${d.rf_sed?'checked':''}> ${t('sedentary')}</label>
      </div>
      <hr style="margin: 0.5rem 0; border: none; border-top: 1px solid var(--border-color);">
      <h5 style="margin: 0.5rem 0; color: var(--primary-color);">${getLang()==='fr'?'Facteurs de Risque Thromboemboliques':'عوامل خطر الإصابة بالانسداد الرئوي'}</h5>
      <div class="grid-3">
        <label class="checkbox-group"><input type="checkbox" id="w_rf_immobilization" ${d.rf_immobilization?'checked':''}> ${t('rf_immobilization')}</label>
        <label class="checkbox-group"><input type="checkbox" id="w_rf_surgery" ${d.rf_surgery?'checked':''}> ${t('rf_surgery')}</label>
        <label class="checkbox-group"><input type="checkbox" id="w_rf_cancer" ${d.rf_cancer?'checked':''}> ${t('rf_cancer')}</label>
        <label class="checkbox-group"><input type="checkbox" id="w_rf_contraception" ${d.rf_contraception?'checked':''}> ${t('rf_contraception')}</label>
        <label class="checkbox-group"><input type="checkbox" id="w_rf_tvp" ${d.rf_tvp?'checked':''}> ${t('rf_tvp')}</label>
        <label class="checkbox-group"><input type="checkbox" id="w_rf_pregnancy" ${d.rf_pregnancy?'checked':''}> ${t('rf_pregnancy')}</label>
        <label class="checkbox-group"><input type="checkbox" id="w_rf_thrombo" ${d.rf_thrombo?'checked':''}> ${t('rf_thrombo')}</label>
      </div>
    </div>`;
  }
  else if (s === 4) { 
    const line = (id, chk, t_id, time) => `<div class="form-group" style="background:#fff; padding:1rem; border:1px solid #e2e8f0; border-radius:10px; display:flex; justify-content:space-between; align-items:center;">
      <label class="checkbox-group" style="margin:0;"><input type="checkbox" id="${id}" ${chk?'checked':''}> <strong>${t(id.replace('w_ex_',''))}</strong></label>
      <div style="display:flex; align-items:center; gap:0.5rem;"><span>${t('time_label')}</span><input type="time" id="${t_id}" class="form-control" style="width:auto; padding:0.2rem;" value="${time||''}"></div>
    </div>`;
    c = `<div class="grid-2">
      ${line('w_ex_ecg_done', d.ex_ecg, 'w_t_ecg', d.t_ecg)}
      ${line('w_ex_iv_line', d.ex_iv, 'w_t_iv', d.t_iv)}
      ${line('w_ex_blood_test', d.ex_blood, 'w_t_blood', d.t_blood)}
      ${line('w_ex_monitoring', d.ex_monit, 'w_t_monit', d.t_monit)}
      ${line('w_ex_oxygen', d.ex_oxy, 'w_t_oxy', d.t_oxy)}
      ${line('w_ex_doctor_informed', d.ex_doc, 'w_t_doc', d.t_doc)}
    </div>`;
  }
  else if (s === 5) { 
    wizardState.data.diag = generateDiagnostics(wizardState.data);
    const diag = wizardState.data.diag;
    const isAr = getLang() === 'ar';
    
    let displayLvl = diag.level || 'Vert';
    let urgencyLabel = isAr ? t('urg_low') : t('urg_low');
    let urgencyBadge = 'badge-green';

    if (diag.level === 'Rouge') {
      urgencyLabel = isAr ? t('urg_extreme') : t('urg_extreme');
      urgencyBadge = 'badge-red';
    } else if (diag.level === 'Orange') {
      urgencyLabel = isAr ? t('urg_major') : t('urg_major');
      urgencyBadge = 'badge-orange';
    }

    c = `<div>
      <h4 style="margin-bottom:1.5rem; font-size:1.3rem;">
        Urgence / Triage: 
        <span class="badge ${urgencyBadge}" style="padding: 0.5rem 1rem; font-size: 1rem;">
          ${urgencyLabel}
        </span>
      </h4>
      
      <div style="background:var(--surface-color-solid); padding:1.2rem; border:1px solid var(--border-color); border-radius: 8px; margin-bottom: 1.5rem;">
        <h5 style="color:var(--primary-color); margin-bottom: 0.8rem;"><i class="fas fa-diagnoses"></i> ${t('diagnoses')}</h5>
        <ul style="list-style: none; padding-left: 0; line-height: 1.8;">
          ${diag.diagnoses.map(dx => `
            <li style="margin-bottom: 0.5rem;">
              <strong>⚠️ ${isAr ? dx.name_ar : dx.name_fr}</strong> 
              <span class="badge" style="background:#e2e8f0; color:#1e293b; font-size: 0.75rem;">${isAr ? dx.urg_ar : dx.urg_fr}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      ${diag.redFlags.length > 0 ? `
      <div style="background:#fef2f2; border:1px solid #fee2e2; padding:1.2rem; border-radius: 8px; margin-bottom: 1.5rem; color: #991b1b;">
        <h5 style="color:#b91c1c; margin-bottom: 0.8rem;"><i class="fas fa-exclamation-triangle"></i> ${t('red_flags')}</h5>
        <ul style="margin-left: 1.2rem; line-height: 1.6;">
          ${diag.redFlags.map(rf => `<li>${isAr ? rf.name_ar : rf.name_fr}</li>`).join('')}
        </ul>
      </div>
      ` : ''}

      <div style="background:#f0fdf4; border:1px solid #dcfce7; padding:1.2rem; border-radius: 8px; color: #166534;">
        <h5 style="color:#15803d; margin-bottom: 0.8rem;"><i class="fas fa-notes-medical"></i> ${t('nurse_actions')}</h5>
        <ul style="margin-left: 1.2rem; line-height: 1.8;">
          ${diag.actions.map(act => `<li>${isAr ? act.ar : act.fr}</li>`).join('')}
        </ul>
      </div>
    </div>`;
  }
  else if (s === 6) { 
    let dEcg = "-";
    if(d.time_arrive && d.t_ecg) {
       const t1 = new Date("2000-01-01T" + d.time_arrive + "Z");
       const t2 = new Date("2000-01-01T" + d.t_ecg + "Z");
       let diff = (t2 - t1)/60000;
       if(diff < 0) diff += 24*60;
       dEcg = diff;
    }
    
    c = `<div class="grid-2">
      <div style="background:#fff; padding:1.5rem; border:1px solid #e2e8f0; border-radius:10px;">
        <h4 style="margin-bottom:1rem;">${t('delays')}</h4>
        <p>Heure arrivée: <strong>${d.time_arrive || '-'}</strong></p>
        <p>Heure réalisation ECG: <strong>${d.t_ecg || '-'}</strong></p>
        <p style="margin-top:1rem; font-weight:bold; color:var(--primary-color);">Délai ECG: ${dEcg} minutes</p>
      </div>
      <div style="background:#fff; padding:1.5rem; border:1px solid #e2e8f0; border-radius:10px;">
        <h4 style="margin-bottom:1rem;">${t('transmit')}</h4>
        <div class="form-group"><label>${t('nurse_name')}</label><input type="text" id="w_nurse" class="form-control" value="${state.user.name}" readonly></div>
        <p style="color:var(--text-secondary); font-size:0.9rem; margin-top:1rem;"><i class="fas fa-info-circle"></i> Le dossier sera envoyé vers la liste d'attente du médecin urgentiste pour validation finale.</p>
      </div>
    </div>`;
  }
  return renderWizardShell(c, s);
}

// ==============================
// 4. app.js (Main Logic)
// ==============================
const app = document.getElementById('app');

function bindEvents() {
  document.querySelectorAll('#toggle-lang').forEach(el => el.addEventListener('click', (e) => {
    e.preventDefault(); 
    setLang(getLang() === 'fr' ? 'ar' : 'fr'); 
    router();
  }));

  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('login-email').value;
      const pass = document.getElementById('login-password').value;
      const alertDiv = document.getElementById('login-alert');
      try {
        await loginUser(email, pass);
        window.location.hash = '#dashboard';
      } catch (err) {
        alertDiv.textContent = err.message;
        alertDiv.style.display = 'block';
      }
    });
  }

  const regForm = document.getElementById('register-form');
  if (regForm) {
    regForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('reg-name').value;
      const email = document.getElementById('reg-email').value;
      const pass = document.getElementById('reg-password').value;
      const role = document.getElementById('reg-role').value;
      const alertDiv = document.getElementById('register-alert');
      try {
        await registerUser(name, email, pass, role);
        alertDiv.className = 'badge badge-green';
        alertDiv.style.background = '#d1fae5';
        alertDiv.style.color = '#065f46';
        alertDiv.textContent = t('register_success');
        alertDiv.style.display = 'block';
        setTimeout(() => {
          window.location.hash = '#login';
        }, 1500);
      } catch (err) {
        alertDiv.className = 'badge badge-red';
        alertDiv.style.background = '#fee2e2';
        alertDiv.style.color = '#991b1b';
        alertDiv.textContent = err.message;
        alertDiv.style.display = 'block';
      }
    });
  }

  const btnNewPatient = document.getElementById('btn-new-patient');
  if (btnNewPatient) {
    btnNewPatient.addEventListener('click', () => { 
      wizardState.step = 1; 
      wizardState.data = {}; 
      wizardState.editingPatientId = null;
      window.location.hash = '#new-patient'; 
    });
  }

  document.querySelectorAll('.btn-dismiss-notif').forEach(btn => btn.addEventListener('click', (e) => {
    e.stopPropagation(); // Stop click from triggering card navigation
    const key = e.target.getAttribute('data-key');
    const dismissed = JSON.parse(localStorage.getItem('dismissed_notifications') || '[]');
    if (!dismissed.includes(key)) {
      dismissed.push(key);
      localStorage.setItem('dismissed_notifications', JSON.stringify(dismissed));
    }
    router();
  }));

  // Notification card click: navigate to patient view and mark as read
  document.querySelectorAll('.notification-card').forEach(card => {
    card.addEventListener('click', (e) => {
      const id = card.dataset.id;
      const status = card.dataset.status;
      // Set current patient and navigate
      state.currentPatientId = id;
      // Determine target hash based on role and status
      if (state.user.role === 'doctor') {
        // Doctor views pending patient details
        window.location.hash = '#med-decision';
      } else {
        // Nurse: if returned, open edit wizard, else view details
        if (status === 'returned') {
          // simulate edit click by setting wizard state
          const p = getPatient(id);
          if (p) {
            wizardState.step = 1;
            wizardState.data = { ...p };
            wizardState.editingPatientId = p.id;
            window.location.hash = '#new-patient';
          }
        } else {
          window.location.hash = '#med-decision';
        }
      }
      // Mark notification as read
      const key = `${id}_${status}`;
      const dismissed = JSON.parse(localStorage.getItem('dismissed_notifications') || '[]');
      if (!dismissed.includes(key)) {
        dismissed.push(key);
        localStorage.setItem('dismissed_notifications', JSON.stringify(dismissed));
      }
    });
  });

  document.querySelectorAll('.notification-card').forEach(card => card.addEventListener('click', (e) => {
    const targetCard = e.currentTarget;
    const id = parseInt(targetCard.getAttribute('data-id'));
    const status = targetCard.getAttribute('data-status');
    const p = getPatient(id);
    if (!p) return;

    // Auto-dismiss the clicked notification
    const key = status === 'pending' ? `${p.id}_pending` : `${p.id}_${status}`;
    const dismissed = JSON.parse(localStorage.getItem('dismissed_notifications') || '[]');
    if (!dismissed.includes(key)) {
      dismissed.push(key);
      localStorage.setItem('dismissed_notifications', JSON.stringify(dismissed));
    }

    if (state.user.role === 'doctor') {
      state.currentPatientId = p.id;
      window.location.hash = '#med-decision';
    } else {
      if (status === 'returned') {
        wizardState.step = 1;
        wizardState.data = { ...p };
        wizardState.editingPatientId = p.id;
        window.location.hash = '#new-patient';
      } else {
        state.currentPatientId = p.id;
        window.location.hash = '#med-decision';
      }
    }
  }));

  document.querySelectorAll('.btn-edit-wizard').forEach(btn => btn.addEventListener('click', (e) => {
    // Find closest element with class or get target data-id (supporting nested icon click)
    const target = e.target.closest('.btn-edit-wizard');
    const id = parseInt(target.getAttribute('data-id'));
    const p = getPatient(id);
    if (p) {
      wizardState.step = 1;
      wizardState.data = { ...p };
      wizardState.editingPatientId = p.id;
      window.location.hash = '#new-patient';
    }
  }));

  document.querySelectorAll('.btn-consult').forEach(btn => btn.addEventListener('click', (e) => {
    state.currentPatientId = e.target.closest('.btn-consult').getAttribute('data-id');
    window.location.hash = '#med-decision';
  }));

  const btnVal = document.getElementById('btn-validate');
  if(btnVal) {
    btnVal.addEventListener('click', async () => {
      await updatePatient(state.currentPatientId, {
        status: 'validated',
        doc_decision: true,
        doc_orientation: document.getElementById('doc_orientation').value,
        doc_notes: document.getElementById('doc_notes').value,
        doc_name: state.user.name,
      });
      alert('Dossier validé !');
      window.location.hash = '#dashboard';
    });
  }

  const btnReturn = document.getElementById('btn-return');
  if(btnReturn) {
    btnReturn.addEventListener('click', async () => {
      await updatePatient(state.currentPatientId, {
        status: 'returned',
        doc_decision: false,
        doc_orientation: document.getElementById('doc_orientation').value,
        doc_notes: document.getElementById('doc_notes').value,
        doc_name: state.user.name,
      });
      alert(getLang() === 'fr' ? 'Dossier retourné pour modification !' : 'تم إرجاع الملف للتعديل !');
      window.location.hash = '#dashboard';
    });
  }

  const btnBack = document.getElementById('btn-back-dash');
  if(btnBack) btnBack.addEventListener('click', () => window.location.hash = '#dashboard');

  const btnNext = document.getElementById('btn-next');
  if (btnNext) {
    btnNext.addEventListener('click', async () => {
      const d = wizardState.data;
      const v = (id) => { const el=document.getElementById(id); return el?(el.type==='checkbox'?el.checked:el.value):'';};

      if(wizardState.step===1) { d.name=v('w_name'); d.file=v('w_file'); d.age=v('w_age'); d.gender=v('w_gender'); d.date=v('w_date'); d.time_arrive=v('w_time_arrive'); d.mode=v('w_mode'); d.service=v('w_service'); }
      
      if(wizardState.step===2) { 
        d.chest_pain=v('w_chest'); d.dyspnea=v('w_dyspnea'); d.sweats=v('w_sweats'); d.nausea=v('w_nausea'); d.vomit=v('w_vomit'); d.palp=v('w_palp'); d.vertigo=v('w_vertigo'); d.syncope=v('w_syncope'); d.anxiety=v('w_anxiety'); d.loc_pain=v('w_loc_pain'); d.rad_arm=v('w_rad_arm'); d.rad_jaw=v('w_rad_jaw'); d.rad_back=v('w_rad_back'); d.rad_sh=v('w_rad_sh'); d.pain_type=v('w_pain_type'); d.t_pain=v('w_t_pain'); d.eva=v('w_eva'); 
        d.pallor=v('w_pallor'); d.fatigue=v('w_fatigue'); d.epigastric_pain=v('w_epigastric_pain'); d.malaise=v('w_malaise'); d.hemoptysis=v('w_hemoptysis'); d.decreased_breath_sounds=v('w_decreased_breath_sounds'); d.neuro_deficit=v('w_neuro_deficit'); d.limb_ischemia=v('w_limb_ischemia'); d.tracheal_deviation=v('w_tracheal_deviation'); d.cyanosis=v('w_cyanosis'); d.hyperventilation=v('w_hyperventilation'); d.tremors=v('w_tremors'); d.paresthesia=v('w_paresthesia');
        d.pain_no_relief=v('w_pain_no_relief'); d.pain_cades_repos=v('w_pain_cades_repos'); d.pain_inc_insp=v('w_pain_inc_insp'); d.pain_insp_rel_forward=v('w_pain_insp_rel_forward'); d.pain_max_onset=v('w_pain_max_onset'); d.pain_tearing=v('w_pain_tearing'); d.pain_unilateral=v('w_pain_unilateral'); d.pain_palpation=v('w_pain_palpation'); d.pain_after_meals=v('w_pain_after_meals'); d.regurgitations=v('w_regurgitations'); d.acid_relief=v('w_acid_relief');
        d.trouble_conscience=v('w_trouble_conscience'); d.dyspnee_severe=v('w_dyspnee_severe'); d.douleur_brutale_intense=v('w_douleur_brutale_intense'); d.douleur_persistante_20=v('w_douleur_persistante_20'); d.signes_neuro=v('w_signes_neuro');
      }
      
      if(wizardState.step===3) { 
        d.bp=v('w_bp'); d.hr=v('w_hr'); d.rr=v('w_rr'); d.spo2=v('w_spo2'); d.temp=v('w_temp'); d.glyc=v('w_glyc'); d.rf_htn=v('w_rf_htn'); d.rf_diab=v('w_rf_diab'); d.rf_smoke=v('w_rf_smoke'); d.rf_obes=v('w_rf_obes'); d.rf_dyslip=v('w_rf_dyslip'); d.rf_cardiac=v('w_rf_cardiac'); d.rf_family=v('w_rf_family'); d.rf_sed=v('w_rf_sed'); 
        d.bp_asymmetry=v('w_bp_asymmetry');
        d.rf_immobilization=v('w_rf_immobilization'); d.rf_surgery=v('w_rf_surgery'); d.rf_cancer=v('w_rf_cancer'); d.rf_contraception=v('w_rf_contraception'); d.rf_tvp=v('w_rf_tvp'); d.rf_pregnancy=v('w_rf_pregnancy'); d.rf_thrombo=v('w_rf_thrombo');
        d.hypotension=v('w_hypotension'); d.desaturation=v('w_desaturation'); d.tachycardie_majeure=v('w_tachycardie_majeure'); d.bradycardie_severe=v('w_bradycardie_severe'); d.trouble_rythme=v('w_trouble_rythme');
      }
      
      if(wizardState.step===4) { d.ex_ecg=v('w_ex_ecg_done'); d.t_ecg=v('w_t_ecg'); d.ex_iv=v('w_ex_iv_line'); d.t_iv=v('w_t_iv'); d.ex_blood=v('w_ex_blood_test'); d.t_blood=v('w_t_blood'); d.ex_monit=v('w_ex_monitoring'); d.t_monit=v('w_t_monit'); d.ex_oxy=v('w_ex_oxygen'); d.t_oxy=v('w_t_oxy'); d.ex_doc=v('w_ex_doctor_informed'); d.t_doc=v('w_t_doc'); }
      if(wizardState.step===6) { d.nurse_name=v('w_nurse'); }

      if (wizardState.step < 6) { 
        wizardState.step++; 
        router(); 
      } else { 
        if (wizardState.editingPatientId) {
          await updatePatient(wizardState.editingPatientId, {
            ...d,
            status: 'pending',
            doc_decision: false,
          });
          alert(getLang() === 'fr' ? 'Dossier modifié et renvoyé au médecin.' : 'تم تعديل الملف وإعادة إرساله للطبيب.');
          wizardState.editingPatientId = null;
        } else {
          await addPatient(d); 
          alert(getLang() === 'fr' ? 'Transmis au médecin avec succès' : 'تم إرسال الملف للطبيب بنجاح'); 
        }
        window.location.hash = '#dashboard'; 
      }
    });
  }
  
  const btnPrev = document.getElementById('btn-prev');
  if (btnPrev) btnPrev.addEventListener('click', () => { if (wizardState.step > 1) { wizardState.step--; router(); } });

  const tabUsers = document.getElementById('tab-users');
  if (tabUsers) {
    tabUsers.addEventListener('click', () => {
      adminState.tab = 'users';
      router();
    });
  }

  const tabPatients = document.getElementById('tab-patients');
  if (tabPatients) {
    tabPatients.addEventListener('click', () => {
      adminState.tab = 'patients';
      router();
    });
  }

  document.querySelectorAll('.btn-edit').forEach(btn => btn.addEventListener('click', (e) => {
    adminState.editingUserId = parseInt(e.target.getAttribute('data-id'));
    router();
  }));

  document.querySelectorAll('.btn-cancel').forEach(btn => btn.addEventListener('click', () => {
    adminState.editingUserId = null;
    router();
  }));

  document.querySelectorAll('.btn-save').forEach(btn => btn.addEventListener('click', async (e) => {
    const id = parseInt(e.target.getAttribute('data-id'));
    await saveAdminUser(id);
  }));

  document.querySelectorAll('.btn-del').forEach(btn => btn.addEventListener('click', async (e) => {
    const id = parseInt(e.target.getAttribute('data-id'));
    await deleteAdminUser(id);
  }));

  document.querySelectorAll('.btn-del-patient').forEach(btn => btn.addEventListener('click', async (e) => {
    const id = parseInt(e.target.getAttribute('data-id'));
    await deleteAdminPatient(id);
  }));
}

function renderNavbar() {
  if (window.location.hash === '' || window.location.hash === '#login' || window.location.hash === '#register') return '';
  const isAdmin = state.user.role === 'admin';
  return `
    <nav class="navbar">
      <div class="navbar-brand"><i class="fas fa-heartbeat"></i> Shayma Care</div>
      <div class="navbar-menu">
        <a href="#dashboard">${t(isAdmin ? 'dashboard_admin' : (state.user.role === 'doctor' ? 'dashboard_doc' : 'dashboard_nurse'))}</a>
        <a href="#" id="nav-logout" style="color: var(--danger-color); margin-left: 1rem;"><i class="fas fa-sign-out-alt"></i> ${t('logout')}</a>
        <button id="toggle-lang" class="btn btn-outline" style="padding: 0.2rem 0.5rem; font-size: 0.8rem; margin-left: 1rem;">${getLang() === 'fr' ? 'عربي' : 'FR'}</button>
      </div>
    </nav>
  `;
}

async function router() {
  const hash = window.location.hash || '#login';
  let content = '';
  
  if(hash !== '#login' && hash !== '#register' && !state.user) {
    return window.location.hash = '#login';
  }

  if (hash === '#login') {
    content = renderLogin();
  } else if (hash === '#register') {
    content = renderRegister();
  } else if (hash === '#dashboard') {
    if (state.user.role === 'admin') {
      window.location.hash = '#admin-dashboard';
      return;
    }
    await fetchPatients();
    content = renderNavbar() + renderDashboard();
  } else if (hash === '#admin-dashboard') {
    if (state.user.role !== 'admin') {
      window.location.hash = '#dashboard';
      return;
    }
    await fetchAdminUsers();
    await fetchPatients();
    content = renderNavbar() + renderAdminDashboard();
  } else if (hash === '#new-patient') {
    content = renderNavbar() + renderWizard();
  } else if (hash === '#med-decision') {
    content = renderNavbar() + renderDoctorView();
  }

  app.innerHTML = content;
  
  const nlg = document.getElementById('nav-logout');
  if (nlg) {
    nlg.addEventListener('click', (e) => { 
      e.preventDefault(); 
      state.user = null; 
      sessionStorage.removeItem('current_user');
      window.location.hash = '#login'; 
    });
  }
  bindEvents();
}

let livePollInterval = null;
function initLiveUpdates() {
  if (livePollInterval) clearInterval(livePollInterval);
  livePollInterval = setInterval(async () => {
    const hash = window.location.hash || '#login';
    if (state.user && (hash === '#dashboard' || hash === '#admin-dashboard')) {
      const oldPatientsJSON = JSON.stringify(state.patients);
      await fetchPatients();
      const newPatientsJSON = JSON.stringify(state.patients);
      
      if (oldPatientsJSON !== newPatientsJSON) {
        await router();
      }
    }
  }, 3000); // Poll every 3 seconds
}

window.addEventListener('hashchange', router);
setLang('fr');
router();
initLiveUpdates();
