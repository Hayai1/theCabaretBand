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

// Contact form handling function
function handleFormSubmit(e) {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');
  
  // Here you would typically send the data to a server
  console.log('Form submitted:', { name, email, message });
  
  // Show success message
  alert('Thank you for your message! We will get back to you soon.');
  
  // Reset form
  e.target.reset();
  
  // Close mobile menu if open
  closeMenu();
}

// Attach form handlers to both desktop and mobile forms
const desktopForm = document.getElementById('contactFormDesktop');
const mobileForm = document.getElementById('contactFormMobile');

if (desktopForm) {
  desktopForm.addEventListener('submit', handleFormSubmit);
}

if (mobileForm) {
  mobileForm.addEventListener('submit', handleFormSubmit);
}