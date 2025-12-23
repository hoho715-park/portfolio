const container = document.querySelector('.container');
const sections = document.querySelectorAll('.section');
const menu = document.querySelector('.side-menu');
const menuItems = document.querySelectorAll('.side-menu li');

let currentIndex = 0;
let isScrolling = false;

container.addEventListener('wheel', (e) => {
  e.preventDefault();
  if (isScrolling) return;

  isScrolling = true;

  if (e.deltaY > 0) {
    currentIndex = Math.min(currentIndex + 1, sections.length - 1);
  } else {
    currentIndex = Math.max(currentIndex - 1, 0);
  }

  scrollToSection(currentIndex);

  setTimeout(() => {
    isScrolling = false;
  }, 800);
}, { passive: false });

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    const index = Number(item.dataset.index);
    currentIndex = index;
    scrollToSection(index);
  });
});

function scrollToSection(index) {
  sections[index].scrollIntoView({ behavior: 'smooth' });
  updateMenu();
}

function updateMenu() {
  if (currentIndex === 0) {
    menu.style.display = 'none';
    return;
  }

  menu.style.display = 'block';

  menuItems.forEach(item => item.classList.remove('active'));
  const activeItem = menuItems[currentIndex - 1];
  if (activeItem) activeItem.classList.add('active');
}
