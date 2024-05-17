// Fetch and update serial monitor data
function updateSerialData() {
    // Replace this with your code to fetch data from your spreadsheet
    const newData = "New serial data: " + Math.random(); // Example random data

    // Update the text content of the serial data element
    const serialDataElement = document.getElementById("serial-data");
    serialDataElement.textContent = newData;
}

// Update serial data periodically (every 1 second in this example)
setInterval(updateSerialData, 1000);
const ledBulb = document.getElementById('led-bulb_1');
const toggleButton = document.getElementById('checkbox_1');

toggleButton.addEventListener('change', function() {
  ledBulb.classList.toggle('on', this.checked);
});
const ledBulb_2 = document.getElementById('led-bulb_2');
const toggleButton_2 = document.getElementById('checkbox_2');

toggleButton_2.addEventListener('change', function() {
  ledBulb_2.classList.toggle('on', this.checked);
});
const ledBulb_3 = document.getElementById('led-bulb_3');
const toggleButton_3 = document.getElementById('checkbox_3');

toggleButton_3.addEventListener('change', function() {
  ledBulb_3.classList.toggle('on', this.checked);
});
const ledBulb_4 = document.getElementById('led-bulb_4');
const toggleButton_4 = document.getElementById('checkbox_4');

toggleButton_4.addEventListener('change', function() {
  ledBulb_4.classList.toggle('on', this.checked);
});
const ledBulb_5 = document.getElementById('led-bulb_5');
const toggleButton_5 = document.getElementById('checkbox_5');

toggleButton_5.addEventListener('change', function() {
  ledBulb_5.classList.toggle('on', this.checked);
});

// Dashboard settings
const settingsForm = document.getElementById('settings-form');
const updateButton = document.getElementById('update-button');

updateButton.addEventListener('click', function(event) {
    event.preventDefault();
    
    // Fetch and update dashboard settings
    // Replace this with your code to update settings
    alert('Settings updated successfully!');
});

// Menu functionality
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(function(menuItem) {
    menuItem.addEventListener('click', function() {
        // Toggle active class for menu items
        menuItems.forEach(function(item) {
            item.classList.remove('active');
        });
        this.classList.add('active');
        
        // Implement logic to switch between dashboard sections based on clicked menu item
        const sectionId = this.dataset.section;
        // Example: display or hide dashboard sections based on sectionId
    });
    
});// JavaScript for digital display monitor
// Update value automatically at regular intervals
setInterval(updateValue, 1000); // Update every 2 seconds








