document.addEventListener('click', function(e) {
  const menu = document.querySelector('.mobile-menu');
  const toggle = document.getElementById('menu-toggle');

  // Check if the click was outside the menu and hamburger
  if (!menu.contains(e.target) && !e.target.matches('.hamburger')) {
    toggle.checked = false; // Close the menu
  }
});