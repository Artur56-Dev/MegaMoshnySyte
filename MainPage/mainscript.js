const div = document.querySelector('.header');
const threshold = div.offsetTop;

window.addEventListener('scroll', () => {
  if (window.pageYOffset > threshold) {
    div.classList.add('fixed-top');
  } else {
    div.classList.remove('fixed-top');
  }
});
