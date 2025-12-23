const container = document.querySelector('.container');
const sections = document.querySelectorAll('.section');

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

  sections[currentIndex].scrollIntoView({
    behavior: 'smooth'
  });

  setTimeout(() => {
    isScrolling = false;
  }, 800);
}, { passive: false });
