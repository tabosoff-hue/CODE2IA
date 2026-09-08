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
    return box;
  }

  function addThinking() {
    if (!messages) return null;
    const box = document.createElement('div');
    box.className = 'message ai thinking-message';
    box.innerHTML = `
      <div class="mini-avatar thinking-avatar">✦</div>
      <div class="thinking-content">
        <strong>CODE2IA</strong>
        <div class="thinking-title"><span class="thinking-spinner"></span> Thinking...</div>
        <div class="server-status">En attente avec le serveur...</div>
      </div>
    `;
    messages.appendChild(box);
    messages.scrollTop = messages.scrollHeight;
    return box;
  }

  function finishThinking(box, text) {
    if (!box) return;
    const content = box.querySelector('.thinking-content');
    if (!content) return;
    content.innerHTML = `<strong>CODE2IA</strong><p></p>`;
    content.querySelector('p').textContent = text;
    box.classList.remove('thinking-message');
  }

  function askQuestion(question, options = []) {
    if (!messages) return;
    const box = document.createElement('div');
    box.className = 'message ai question-message';
    box.innerHTML = `
      <div class="mini-avatar">✦</div>
      <div class="question-content">
        <strong>CODE2IA</strong>
        <p></p>
        <div class="question-options"></div>
      </div>
    `;
    box.querySelector('p').textContent = question;
    const optionsBox = box.querySelector('.question-options');
    options.forEach(option => {
      const button = document.createElement('button');
      button.className = 'question-option';
      button.textContent = option;
      button.addEventListener('click', () => {
        addMessage(option, 'user');
        box.remove();
        simulateThinking('Parfait. Je continue avec cette information...');
      });
      optionsBox.appendChild(button);
    });
    messages.appendChild(box);
    messages.scrollTop = messages.scrollHeight;
  }

  function simulateThinking(finalText) {
    const thinking = addThinking();
    setTimeout(() => finishThinking(thinking, finalText), 1400);
  }

  document.getElementById('send-btn')?.addEventListener('click', () => {
    const text = promptInput?.value.trim();
    if (!text) return promptInput?.focus();
    addMessage(text, 'user');
    promptInput.value = '';

    const thinking = addThinking();

    setTimeout(() => {
      const needsClarification = /application|app|site|projet/i.test(text) && !/dakar|paris|ville|mobile|web|desktop/i.test(text);
      if (needsClarification) {
        finishThinking(thinking, 'Avant de commencer, j’ai besoin d’une précision.');
        askQuestion('Quel type d’application veux-tu créer ?', ['Application web', 'Application mobile', 'Application desktop']);
      } else {
        finishThinking(thinking, 'J’ai compris la demande. Je peux commencer la préparation du projet.');
      }
    }, 1600);
  });

  promptInput?.addEventListener('keydown', event => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      document.getElementById('send-btn')?.click();
    }
  });

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
    simulateThinking('Aperçu lancé.');
  });

  document.getElementById('start-btn')?.addEventListener('click', () => {
    simulateThinking('Préparation de l’aperçu...');
  });

  document.getElementById('explore-btn')?.addEventListener('click', () => {
    simulateThinking('Exploration de l’aperçu ouverte.');
  });
});
