const contactPanel = document.querySelector('.contact-panel');
const openBtn = document.querySelector('.header-burger-button');
const closeBtn = document.querySelector('.close-button');
const mobileMenu = document.querySelector('.mobile-menu');

openBtn.addEventListener('click', () => {
  if (window.innerWidth > 1024) {
    contactPanel.classList.toggle('is-active');
  } else {
    mobileMenu.classList.toggle('is-active');
    openBtn.classList.toggle('is-active');

    mobileMenu.querySelectorAll('.is-open')
      .forEach(el => el.classList.remove('is-open'));
  }
});

closeBtn.addEventListener('click', () => {
  contactPanel.classList.remove('is-active');
});

document.addEventListener('click', (e) => {
  const isClickInside =
    contactPanel.contains(e.target) ||
    openBtn.contains(e.target) ||
    mobileMenu.contains(e.target);

  if (!isClickInside) {
    contactPanel.classList.remove('is-active');
    mobileMenu.classList.remove('is-active');
    openBtn.classList.remove('is-active');

    mobileMenu.querySelectorAll('.is-open')
      .forEach(el => el.classList.remove('is-open'));
  }
});

document.querySelectorAll('.submenu-toggle').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();

    const item = btn.closest('li');
    const parent = item.parentElement;

    const isOpen = item.classList.contains('is-open');

    parent.querySelectorAll(':scope > li.is-open').forEach(el => {
      if (el !== item) el.classList.remove('is-open');
    });

    if (!isOpen) {
      item.classList.add('is-open');
    } else {
      item.classList.remove('is-open');
    }
  });
});