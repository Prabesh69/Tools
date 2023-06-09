const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
  
    // Toggle Nav
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
  
      // Animate Links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
      });
  
      // Burger Animation
    //   burger.classList.toggle('toggle');
    });

  }
  
  navSlide();
  $(document).ready(function() {
    $('.carousel').carousel({
      interval: 10000, // Delay between slides in milliseconds (10 seconds)
      pause: false,   // Do not pause on hover
      wrap: true      // Continuously loop the carousel
    });
  });
  