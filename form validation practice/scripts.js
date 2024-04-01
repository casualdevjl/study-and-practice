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

function checkPassword(anyinput) {
    const formControl = anyinput.parentElement;

    if (anyinput.value === "" || anyinput.value.length < 6) {
        formControl.className = "form-control error"
        const smallPassword = form.querySelector('#error-message-password');
        smallPassword.innerText = "Password must be at least 6 characters long";
    } else {
        formControl.className = "form-control success";
    }
}

function confirmPassword(theotherinput) {
    const formControl = theotherinput.parentElement;

    if (theotherinput.value === "" || theotherinput.value !== password.value) {
        formControl.className = "form-control error";
        const smallPassword2 = form.querySelector('#error-message-password2');
        smallPassword2.innerText = "Passwords do not match";
    } else {
        formControl.className = "form-control success";
        alert('Form submitted succesfully!'); // try if would work
    }
}


// Submit event listener for form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkUsername(username);
    checkEmail(email);
    checkPassword(password);
    confirmPassword(password2);
});