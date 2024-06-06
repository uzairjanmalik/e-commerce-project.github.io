function toggleMenu() {
    var menuIcon = document.querySelector('.fa-bars');
    var menuLinks = document.querySelector('.menu-links');
    if (window.innerWidth <= 550) {
      menuIcon.style.display = 'block';
      menuLinks.style.display = 'none';
    } else {
      menuIcon.style.display = 'none';
      menuLinks.style.display = 'none';
    }
  }
  
  // Call toggleMenu function initially to set the initial state
  toggleMenu();
  
  // Add event listener for window resize
  window.addEventListener('resize', toggleMenu);
  
  // Add click event listener for menu icon
  document.querySelector('.fa-bars').addEventListener('click', function() {
    var menuLinks = document.querySelector('.menu-links');
    if (menuLinks.style.display === 'block') {
      menuLinks.style.display = 'none';
    } else {
      menuLinks.style.display = 'block';
    }
  });
  
  