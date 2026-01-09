const faqButtons = document.querySelectorAll('.faq-item');

faqButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    faqButtons.forEach((item) => item.setAttribute('aria-expanded', 'false'));
    button.setAttribute('aria-expanded', String(!isExpanded));
    const icon = button.querySelector('.faq-icon');
    if (icon) {
      icon.textContent = isExpanded ? '+' : '–';
    }
  });
});
