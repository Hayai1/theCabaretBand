const btn = document.getElementById('socialToggle');
const menu = document.getElementById('socialMenu');

function setOpen(isOpen) {
  menu.classList.toggle('open', isOpen);
  btn.setAttribute('aria-expanded', String(isOpen));
  btn.textContent = isOpen ? '✕' : '☰';
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

function closeMenu() { setOpen(false); }

btn.addEventListener('click', (e) => {
  e.stopPropagation();
  setOpen(!menu.classList.contains('open'));
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});

window.addEventListener('resize', () => {
  if (window.matchMedia('(min-width: 1279px)').matches) closeMenu();
});

// REMOVE the form handling - let Django handle it
// Delete or comment out all the form handling code below