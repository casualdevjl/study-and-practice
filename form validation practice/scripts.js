const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
// const defaultErrorMessage = document.getElementById('error-message');

// defaultErrorMessage.textContent = "";

// Check username
function checkUsername(whateveriwant) {
    const formControl = whateveriwant.parentElement;

    if (whateveriwant.value === "" || whateveriwant.value.length < 4) {
        // Show error
        formControl.className = "form-control error";
        const smallUsername = form.querySelector('#error-message-username');
        smallUsername.innerText = "Username must be at least 4 characters long";
    } else {
        // Success green border
        formControl.className = "form-control success";
    }
}

function checkEmail(couldbeanything) {
    const formControl = couldbeanything.parentElement;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/;

    if (couldbeanything.value === "" || !emailPattern.test(couldbeanything.value)) {
        formControl.className = "form-control error";
        const smallEmail = form.querySelector('#error-message-email');
        smallEmail.innerText = "Please enter a valid email address";
    } else {
        formControl.className = "form-control success";
    }
}

// Submit event listener for form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkUsername(username);
    checkEmail(email);
});