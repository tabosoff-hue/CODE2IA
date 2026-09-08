document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-page]').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      window.location.href = link.getAttribute('href');
    });
  });
});
