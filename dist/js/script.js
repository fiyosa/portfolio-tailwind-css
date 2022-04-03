// Navbar Fixed
window.onscroll = () => {
  const header = document.querySelector('header')
  const fixedNav = header.offsetTop;
  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed')
  } else {
    header.classList.remove('navbar-fixed')
  }
}

// Hamburger
const humburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu')
humburger.addEventListener('click', () => {
  humburger.classList.toggle('humburger-active');
  navMenu.classList.toggle('hidden')
})