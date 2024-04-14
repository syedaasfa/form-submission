document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Validate each field
    var isValid = true; // Flag to track overall form validity

    // Full Name Validation
    var fullName = document.getElementById('fullName');
    if (fullName.value.length < 5) {
        fullName.classList.add('is-invalid');
        isValid = false;
    } else {
        fullName.classList.remove('is-invalid');
    }

    // Email Validation
    var email = document.getElementById('email');
    if (!email.value.includes('@')) {
        email.classList.add('is-invalid');
        isValid = false;
    } else {
        email.classList.remove('is-invalid');
    }

    // Phone Number Validation
    var phoneNumber = document.getElementById('phoneNumber');
    if (phoneNumber.value === '123456789' || phoneNumber.value.length !== 10) {
        phoneNumber.classList.add('is-invalid');
        isValid = false;
    } else {
        phoneNumber.classList.remove('is-invalid');
    }

    // Password Validation
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirmPassword');
    if (password.value.length < 8 || password.value === 'password' || password.value.toLowerCase() === fullName.value.toLowerCase()) {
        password.classList.add('is-invalid');
        isValid = false;
    } else {
        password.classList.remove('is-invalid');
    }

    // Confirm Password Validation
    if (password.value !== confirmPassword.value) {
        confirmPassword.classList.add('is-invalid');
        isValid = false;
    } else {
        confirmPassword.classList.remove('is-invalid');
    }

    // Final form submission if valid
    if (isValid) {
        // Display success notification
        alert('Form submitted successfully!');

        // reset form or perform further actions
        this.reset(); 
    }
});

// Add onChange validation
document.querySelectorAll('#registrationForm input').forEach(input => {
    input.addEventListener('change', function() {
        this.classList.remove('is-invalid'); // Remove invalid class when the user corrects the input
    });
});
//password visibility funtion
function togglePasswordVisibility(fieldId) {
    var passwordInput = document.getElementById(fieldId);
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

