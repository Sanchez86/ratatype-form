
function validatePassword(input) {
    const passwordPattern = /^[a-zA-Z0-9!@#$%^&*]{8,}$/;
    return passwordPattern.test(input);
}

function validateEmail(input) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(input);
}

function handleEmail() {
    const emailInput = document.getElementById('email');
    const parentInput = document.querySelector(".wrap-email");
    const errorMessage = document.querySelector(".error-email");
    const isValidEmail = validateEmail(emailInput.value);

    if (emailInput.value.length > 0) {
        parentInput.classList.add('input-active');
    } else {
        parentInput.classList.remove('input-active');
    }

    if (isValidEmail) {
        parentInput.classList.remove('border-red-500');
        errorMessage.classList.add('hidden');
    } else {
        parentInput.classList.add('border-red-500');
        errorMessage.classList.remove('hidden');
    }
}

function handlePassword() {
    const passwordInput = document.getElementById('password');
    const parentInput = document.querySelector(".wrap-password");
    const errorMessage = document.querySelector(".error-password");

    if (passwordInput.value.length > 0) {
        parentInput.classList.add('input-active');
    } else {
        parentInput.classList.remove('input-active');
    }

    if (passwordInput.value.length >= 8) {
        parentInput.classList.remove('border-red-500');
        errorMessage.classList.add('hidden');
    } else {
        parentInput.classList.add('border-red-500');
        errorMessage.classList.remove('hidden');
    }
}
