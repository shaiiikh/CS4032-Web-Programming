document.getElementById("signInForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("signInUsername").value.trim();
    let password = document.getElementById("signInPassword").value.trim();
    if (username === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }
    alert("Sign in successful!");
});

document.getElementById("signUpForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("signUpUsername").value.trim();
    let password = document.getElementById("signUpPassword").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();
    let email = document.getElementById("email").value.trim();
    let fullName = document.getElementById("fullName").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let birthdate = document.getElementById("birthdate").value.trim();

    if (username === "" || password === "" || confirmPassword === "" || email === "" || fullName === "" || phone === "" || birthdate === "") {
        alert("Please fill in all fields.");
        return;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }
    if (!/(?=.*\d)(?=.*[a-zA-Z])(?=.*\W)/.test(password)) {
        alert("Password must contain at least one digit, one letter, and one special character.");
        return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    if (!/^\d{11,}$/.test(phone)) {
        alert("Please enter a valid phone number with at least 11 digits.");
        return;
    }
    alert("Sign up successful!");
});
