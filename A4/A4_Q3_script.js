
document.addEventListener('click', function(event) {
    // Check if the user held down the Shift key during the click
    if (event.shiftKey) {
      // Display the event name in an alert dialog
      alert('Shift + click event: ' + event.type);
    }
    // Check if the user held down the Ctrl key during the click
    if (event.ctrlKey) {
      // Display the element name that triggered the event in an alert dialog
      alert('Ctrl + click event: ' + event.target.nodeName);
    }
  });
  