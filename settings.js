// Function to toggle the settings panel visibility
function toggleSettings() {
    const settingsPanel = document.getElementById('settingsPanel');
    const currentRight = settingsPanel.style.right;

    // Toggle the settings panel visibility
    if (currentRight === '0px') {
        settingsPanel.style.right = '-300px'; // Hide the panel
    } else {
        settingsPanel.style.right = '0px'; // Show the panel
    }
}

// Function to change the theme (light/dark)
function changeTheme() {
    const theme = document.getElementById('theme').value;
    if (theme === 'dark') {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
    } else {
        document.body.style.backgroundColor = '#f4f4f9';
        document.body.style.color = '#333';
    }
}

// Function to change language (can extend for multi-language support)
function changeLanguage() {
    const language = document.getElementById('language').value;
    if (language === 'id') {
        alert('Bahasa Indonesia dipilih');
    } else {
        alert('English selected');
    }
}

// Function to toggle notifications setting
function toggleNotifications() {
    const notifications = document.getElementById('notifications').checked;
    if (notifications) {
        alert('Notifications enabled');
    } else {
        alert('Notifications disabled');
    }
}

// Function to save settings (simulated for demo)
function saveSettings() {
    alert('Settings saved successfully!');
    toggleSettings(); // Close the settings panel after saving
}
