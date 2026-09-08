const translations = {
  fr: {
    newProject: '＋ Nouveau projet', workspace: 'WORKSPACE', home: 'Accueil', projects: 'Projets', templates: 'Templates', settings: 'Paramètres', connected: 'IA connectée', ws: 'Workspace', app: 'Mon application', launch: '▶ Lancer', eyebrow: '✦ AI APP BUILDER', title: 'Crée ton application', title2: 'avec l’IA.', subtitle: 'Décris ton idée, importe ton projet et laisse CODE2IA construire avec toi.', assistant: 'Assistant IA', ready: 'Qwen · Prêt', hello: 'Salut 👋 Que veux-tu créer aujourd’hui ?', userExample: 'Je veux créer une application moderne.', answer: 'Parfait. Je peux générer la structure, analyser tes fichiers et préparer ton projet.', prompt: 'Décris ton application...', attach: '↗ Joindre un fichier', preview: 'Aperçu', live: 'Live preview', start: 'Commencer', powered: '✦ POWERED BY CODE2IA', mockTitle: 'Construis|quelque chose|d’incroyable.', mockText: 'Ton application générée par l’IA apparaît ici en temps réel.', explore: 'Explorer →', files: 'Fichiers du projet', fileCount: '3 fichiers', analysis: 'Analyse IA', language: 'Langue', project: 'Projet', state: 'État', webApp: 'Application web', noProblem: '✓ Aucun problème'
  },
  en: {
    newProject: '＋ New project', workspace: 'WORKSPACE', home: 'Home', projects: 'Projects', templates: 'Templates', settings: 'Settings', connected: 'AI connected', ws: 'Workspace', app: 'My application', launch: '▶ Run', eyebrow: '✦ AI APP BUILDER', title: 'Create your application', title2: 'with AI.', subtitle: 'Describe your idea, import your project and let CODE2IA build with you.', assistant: 'AI Assistant', ready: 'Qwen · Ready', hello: 'Hi 👋 What do you want to create today?', userExample: 'I want to create a modern application.', answer: 'Perfect. I can generate the structure, analyze your files and prepare your project.', prompt: 'Describe your application...', attach: '↗ Attach a file', preview: 'Preview', live: 'Live preview', start: 'Get started', powered: '✦ POWERED BY CODE2IA', mockTitle: 'Build|something|incredible.', mockText: 'Your AI-generated application appears here in real time.', explore: 'Explore →', files: 'Project files', fileCount: '3 files', analysis: 'AI analysis', language: 'Language', project: 'Project', state: 'Status', webApp: 'Web Application', noProblem: '✓ No issues'
  },
  es: {
    newProject: '＋ Nuevo proyecto', workspace: 'ESPACIO DE TRABAJO', home: 'Inicio', projects: 'Proyectos', templates: 'Plantillas', settings: 'Configuración', connected: 'IA conectada', ws: 'Espacio', app: 'Mi aplicación', launch: '▶ Ejecutar', eyebrow: '✦ CREADOR DE APPS CON IA', title: 'Crea tu aplicación', title2: 'con IA.', subtitle: 'Describe tu idea, importa tu proyecto y deja que CODE2IA construya contigo.', assistant: 'Asistente IA', ready: 'Qwen · Listo', hello: 'Hola 👋 ¿Qué quieres crear hoy?', userExample: 'Quiero crear una aplicación moderna.', answer: 'Perfecto. Puedo generar la estructura, analizar tus archivos y preparar tu proyecto.', prompt: 'Describe tu aplicación...', attach: '↗ Adjuntar un archivo', preview: 'Vista previa', live: 'Vista previa en vivo', start: 'Comenzar', powered: '✦ POWERED BY CODE2IA', mockTitle: 'Construye|algo|increíble.', mockText: 'Tu aplicación generada por IA aparece aquí en tiempo real.', explore: 'Explorar →', files: 'Archivos del proyecto', fileCount: '3 archivos', analysis: 'Análisis IA', language: 'Idioma', project: 'Proyecto', state: 'Estado', webApp: 'Aplicación web', noProblem: '✓ Ningún problema'
  },
  de: { newProject:'＋ Neues Projekt', home:'Startseite', projects:'Projekte', templates:'Vorlagen', settings:'Einstellungen', connected:'KI verbunden', launch:'▶ Starten', assistant:'KI-Assistent', preview:'Vorschau', files:'Projektdateien', analysis:'KI-Analyse', language:'Sprache' },
  it: { newProject:'＋ Nuovo progetto', home:'Home', projects:'Progetti', templates:'Modelli', settings:'Impostazioni', connected:'IA connessa', launch:'▶ Avvia', assistant:'Assistente IA', preview:'Anteprima', files:'File del progetto', analysis:'Analisi IA', language:'Lingua' },
  pt: { newProject:'＋ Novo projeto', home:'Início', projects:'Projetos', templates:'Modelos', settings:'Configurações', connected:'IA conectada', launch:'▶ Executar', assistant:'Assistente IA', preview:'Pré-visualização', files:'Arquivos do projeto', analysis:'Análise IA', language:'Idioma' },
  ar: { newProject:'＋ مشروع جديد', home:'الرئيسية', projects:'المشاريع', templates:'القوالب', settings:'الإعدادات', connected:'الذكاء الاصطناعي متصل', launch:'▶ تشغيل', assistant:'مساعد الذكاء الاصطناعي', preview:'معاينة', files:'ملفات المشروع', analysis:'تحليل الذكاء الاصطناعي', language:'اللغة' },
  zh: { newProject:'＋ 新建项目', home:'首页', projects:'项目', templates:'模板', settings:'设置', connected:'AI 已连接', launch:'▶ 运行', assistant:'AI 助手', preview:'预览', files:'项目文件', analysis:'AI 分析', language:'语言' },
  ja: { newProject:'＋ 新しいプロジェクト', home:'ホーム', projects:'プロジェクト', templates:'テンプレート', settings:'設定', connected:'AI 接続済み', launch:'▶ 実行', assistant:'AI アシスタント', preview:'プレビュー', files:'プロジェクトファイル', analysis:'AI 分析', language:'言語' },
  ko: { newProject:'＋ 새 프로젝트', home:'홈', projects:'프로젝트', templates:'템플릿', settings:'설정', connected:'AI 연결됨', launch:'▶ 실행', assistant:'AI 어시스턴트', preview:'미리보기', files:'프로젝트 파일', analysis:'AI 분석', language:'언어' }
};

const languageNames = { fr:'Français', en:'English', es:'Español', de:'Deutsch', it:'Italiano', pt:'Português', ar:'العربية', zh:'中文', ja:'日本語', ko:'한국어' };

function setLanguage(lang) {
  const t = translations[lang] || translations.fr;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key]) el.placeholder = t[key];
  });
  const title = document.querySelector('[data-i18n-title]');
  if (title && t.title) title.innerHTML = `${t.title}<br><span>${t.title2 || ''}</span>`;
  const mockTitle = document.querySelector('[data-i18n-mock-title]');
  if (mockTitle && t.mockTitle) mockTitle.innerHTML = t.mockTitle.split('|').join('<br>');
  localStorage.setItem('code2ia-language', lang);
  const select = document.getElementById('language-select');
  if (select) select.value = lang;
}

document.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('language-select');
  if (select) {
    select.innerHTML = Object.entries(languageNames).map(([code, name]) => `<option value="${code}">${name}</option>`).join('');
    select.addEventListener('change', e => setLanguage(e.target.value));
  }
  setLanguage(localStorage.getItem('code2ia-language') || 'fr');
});
