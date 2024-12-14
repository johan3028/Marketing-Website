// Function to change profile picture
function changeProfilePic() {
    const fileInput = document.getElementById('uploadImage');
    const profilePic = document.getElementById('profilePic');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            profilePic.src = e.target.result;
            // Save the image URL to localStorage
            localStorage.setItem('profilePic', e.target.result);
        };
        reader.readAsDataURL(file);
    }
}

// Function to show the edit profile form
function editProfile() {
    const name = document.getElementById('name').innerText;
    const email = document.getElementById('email').innerText;
    const phone = document.getElementById('phone').innerText;

    // Pre-fill form with current profile data
    document.getElementById('newName').value = name;
    document.getElementById('newEmail').value = email;
    document.getElementById('newPhone').value = phone;

    // Show the edit form
    document.getElementById('editForm').style.display = 'block';
}

// Function to cancel profile editing
function cancelEdit() {
    document.getElementById('editForm').style.display = 'none';
}

// Function to save profile changes
function saveProfile(event) {
    event.preventDefault();

    const name = document.getElementById('newName').value;
    const email = document.getElementById('newEmail').value;
    const phone = document.getElementById('newPhone').value;

    // Update profile details
    document.getElementById('name').innerText = name;
    document.getElementById('email').innerText = email;
    document.getElementById('phone').innerText = phone;

    // Save to localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);

    // Hide the edit form
    document.getElementById('editForm').style.display = 'none';
}

// Load profile data from localStorage when the page loads
window.onload = function() {
    const storedName = localStorage.getItem('name');
    const storedEmail = localStorage.getItem('email');
    const storedPhone = localStorage.getItem('phone');
    const storedProfilePic = localStorage.getItem('profilePic');

    if (storedName) {
        document.getElementById('name').innerText = storedName;
    }

    if (storedEmail) {
        document.getElementById('email').innerText = storedEmail;
    }

    if (storedPhone) {
        document.getElementById('phone').innerText = storedPhone;
    }

    if (storedProfilePic) {
        document.getElementById('profilePic').src = storedProfilePic;
    }
};
