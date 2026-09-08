document.addEventListener('DOMContentLoaded', () => {
  const messages = document.getElementById('messages');
  const promptInput = document.getElementById('prompt-input');

  function addMessage(text, type = 'ai') {
    if (!messages) return;
    const box = document.createElement('div');
    box.className = 'message ' + (type === 'user' ? 'user-message' : 'ai');
    if (type === 'user') {
      box.innerHTML = '<p></p>';
      box.querySelector('p').textContent = text;
    } else {
      box.innerHTML = '<div class="mini-avatar">✦</div><div><strong>CODE2IA</strong><p></p></div>';
      box.querySelector('p').textContent = text;
    }
    messages.appendChild(box);
    messages.scrollTop = messages.scrollHeight;
  }

  document.getElementById('send-btn')?.addEventListener('click', () => {
    const text = promptInput?.value.trim();
    if (!text) return promptInput?.focus();
    addMessage(text, 'user');
    promptInput.value = '';
    setTimeout(() => addMessage('Mode démo : le moteur IA sera connecté dans l’étape de configuration IA.'), 400);
  });

  promptInput?.addEventListener('keydown', event => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      document.getElementById('send-btn')?.click();
    }
  });

  document.getElementById('new-project')?.addEventListener('click', () => {});

  document.querySelector('[data-action="new-project"]')?.addEventListener('click', () => {
    window.location.href = 'pages/new-project.html';
  });

  document.getElementById('file-input')?.addEventListener('change', event => {
    const file = event.target.files?.[0];
    if (file) addMessage('Fichier sélectionné : ' + file.name, 'user');
  });

  document.getElementById('theme-btn')?.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('code2ia-theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
  });

  if (localStorage.getItem('code2ia-theme') === 'light') {
    document.body.classList.add('light-mode');
  }

  document.getElementById('search-btn')?.addEventListener('click', () => {
    promptInput?.focus();
    if (promptInput) promptInput.placeholder = 'Recherche ou idée à créer...';
  });

  document.getElementById('run-btn')?.addEventListener('click', () => {
    addMessage('▶ Aperçu lancé. La génération réelle sera disponible après la configuration IA.');
  });

  document.getElementById('start-btn')?.addEventListener('click', () => {
    addMessage('Aperçu de l’application lancé.');
  });

  document.getElementById('explore-btn')?.addEventListener('click', () => {
    addMessage('Exploration de l’aperçu ouverte.');
  });
});
