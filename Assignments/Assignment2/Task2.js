function validateSignupForm(event) {
    event.preventDefault();

    let usernameInput = document.getElementById('username');
    let usernameValue = usernameInput.value.trim();
    if (usernameValue === "") {
        showError("Username is required.");
        return;
    }

    let passwordInput = document.getElementById('password');
    let passwordValue = passwordInput.value;
    if (passwordValue.length < 6) {
        showError("Password must be at least 6 characters long.");
        return;
    }

    let birthdateInput = document.getElementById('birthdate');
    let birthdateValue = birthdateInput.value;
    if (!isValidDate(birthdateValue)) {
        showError("Invalid birthdate format.");
        return;
    }

    let emailInput = document.getElementById('email');
    let emailValue = emailInput.value.trim();
    if (!isValidEmail(emailValue)) {
        showError("Invalid email address.");
        return;
    }

    alert("Signup successful!");
    resetForm('signupForm');
}

function validateSignInForm(event) {
    event.preventDefault();

    let signInUsernameInput = document.getElementById('signInUsername');
    let signInUsernameValue = signInUsernameInput.value.trim();
    if (signInUsernameValue === "") {
        showError("Username is required.");
        return;
    }

    let signInPasswordInput = document.getElementById('signInPassword');
    let signInPasswordValue = signInPasswordInput.value;
    if (signInPasswordValue === "") {
        showError("Password is required.");
        return;
    }

    alert("Sign In successful!");
    resetForm('signInForm');
}

function showError(message) {
    alert(message);
}

function isValidDate(dateString) {
    let regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(dateString);
}

function isValidEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function resetForm(formId) {
    document.getElementById(formId).reset();
}
