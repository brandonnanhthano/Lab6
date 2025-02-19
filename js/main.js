/**
 * This file should only contain functions that don't interact with the DOM.
 * That means no document.querySelector, no document.getElementById, etc.
 * This file should only contain functions that do things like calculations,
 * data manipulation, etc. This is so that we can test these functions
 * without having to worry about the DOM or the browser environment.
 */


// main.js

// Functionality to for the tab and submit button as well as an announcer for screen readers
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submitButton').addEventListener('click', function() {
      const selectedOption = document.querySelector('input[name="options"]:checked');
      const announcer = document.getElementById('liveAnnouncer');
      
      if (selectedOption) {
        announcer.textContent = 'You selected: ' + selectedOption.value;
        alert(selectedOption.value);
      } else {
        announcer.textContent = 'Please select an option before submitting';
        alert('Please select an option!');
      }
    });
  });