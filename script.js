// JavaScript for form validation
const loginForm = document.getElementById('loginForm');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission for validation
    
    let isValid = true;

    // Validate email
    const email = emailField.value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailRegex)) {
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    // Validate password
    const password = passwordField.value;
    if (!password) {
        passwordError.style.display = 'block';
        isValid = false;
    } else {
        passwordError.style.display = 'none';
    }

    if (isValid) {
        // Simulate a successful login
        alert('Login Berhasil!');
        
        // Redirect to the sidebar page after login is successful
        window.location.href = "sidebar.html"; // Ganti dengan halaman yang sesuai
    }
});

// Google login (simulated)
document.getElementById('googleLoginBtn').addEventListener('click', function() {
    alert('Login with Google (Simulasi)');
});
