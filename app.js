let lastScrollTop = 0;

const header = document.querySelector("header");

window.addEventListener("scroll", function () {

  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll < lastScrollTop) {

    // SCROLLING UP
    header.classList.add("show-topbar");

  } else {

    // SCROLLING DOWN
    header.classList.remove("show-topbar");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// Close navbar dropdown when a nav link is clicked
const navbarCollapse = document.querySelector('.navbar-collapse');
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', function() {
    if (navbarCollapse.classList.contains('show')) {
      const navbarToggler = document.querySelector('.navbar-toggler');
      navbarToggler.click();
    }
  });
});