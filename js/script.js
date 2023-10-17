function validateName() {
    const name = document.getElementById('name').value;
    const error = document.getElementById('errorName');

    if (name.length === 0) {
        error.innerHTML = 'Please enter your Name';
        return false;
    }

    error.innerHTML = '';
    return true;
}

function validateEmail() {
    const email = document.getElementById('email').value;
    const error = document.getElementById('errorEmail');

    if (email.length === 0) {
        error.innerHTML = 'Please enter an email address';
        return false;
    }
    
    // Regular expression for email validation
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!email.match(emailPattern)) {
        error.innerHTML = 'Please enter a valid email address.';
        return false;
    }

    error.innerHTML = '';
    return true;
}

function validateMessage() {
    const message = document.getElementById('message').value;
    const error = document.getElementById('errorMessage');

    if (message.length === 0) {
        error.innerHTML = 'Please enter your message.';
        return false;
    }

    error.innerHTML = '';
    return true;
}

function handleFormSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const errorElement = document.getElementById('errorSubmit');
    errorElement.textContent = '';

    if (name.length === 0 || email.length === 0) {
        errorElement.textContent = 'Please fill in all required fields';
    } else {
        alert('Form submitted successfully!');
    }
}

const submitForm = document.getElementById('submitForm');
submitForm.addEventListener('submit', handleFormSubmit);