// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('navbar-menu');
  const closeBtn = document.getElementById('nav-close-btn');

  // Toggle menu when clicking hamburger
  toggle.addEventListener('click', function() {
    toggle.classList.toggle('active');
    menu.classList.toggle('active');
  });

  // Close menu when clicking close button
  closeBtn.addEventListener('click', function() {
    toggle.classList.remove('active');
    menu.classList.remove('active');
  });

  // Close mobile menu when clicking a link (optional)
  const links = menu.querySelectorAll('.navbar-link');
  links.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) { // mobile breakpoint
        toggle.classList.remove('active');
        menu.classList.remove('active');
      }
    });
  });

  // Optional: Close menu when clicking outside on mobile
  // This can be added if needed, but not required.
});