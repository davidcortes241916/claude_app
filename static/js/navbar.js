// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('navbar-toggler');
  const menu = document.getElementById('navbarNav');

  // Toggle menu when clicking hamburger
  toggle.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent event from bubbling to document
    const isOpen = toggle.getAttribute('aria-expanded') === 'true' || false;
    toggle.setAttribute('aria-expanded', !isOpen);
    menu.classList.toggle('show');

    // Add aria-label for accessibility
    toggle.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
  });

  // Close mobile menu when clicking a link
  const links = menu.querySelectorAll('.nav-link');
  links.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) { // mobile breakpoint
        toggle.setAttribute('aria-expanded', 'false');
        menu.classList.remove('show');
        toggle.setAttribute('aria-label', 'Open menu');
      }
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    // Check if click is outside the menu and the toggle button
    if (window.innerWidth <= 768) {
      if (!menu.contains(event.target) && !toggle.contains(event.target)) {
        if (menu.classList.contains('show')) {
          toggle.setAttribute('aria-expanded', 'false');
          menu.classList.remove('show');
          toggle.setAttribute('aria-label', 'Open menu');
        }
      }
    }
  });

  // Handle window resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      // If we're on desktop, ensure menu is not shown (collapsed)
      if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
      }
    }
  });
});