

document.addEventListener('DOMContentLoaded', function () {
  // Selecting necessary elements
  const list = document.querySelector('.menu');
  const button = document.getElementById('toggleMenu');
  const popups = document.querySelectorAll('.popup');
  const closeButtons = document.querySelectorAll('.closeButton');

  // Function to toggle the menu visibility
  button.addEventListener('click', function () {

    list.classList.toggle('show');

  });

  // Function to show a specific popup by ID
  function showPopup(popupId) {

    const popup = document.getElementById(popupId);

    popup.classList.add('show');

  }

  // Function to close all popups
  function closePopups() {

    popups.forEach(function(popup) {

      popup.classList.remove('show');

    });
  }

  // Event listener for menu items
  list.addEventListener('click', function (event) {

    const targetId = event.target.id;

    // Check if the clicked item is a valid menu item
    if (targetId === 'aboutMe' || targetId === 'skills' || targetId === 'projects' || targetId === 'contact') {

      // Close all popups and show the selected one
      closePopups(); 
      showPopup(`${targetId}Popup`);
    }
  });

  // Event listeners for close buttons
  closeButtons.forEach(function(closeButton) {

    closeButton.addEventListener('click', closePopups);
    
  });
});
