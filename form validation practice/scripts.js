const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const errorMessage = document.getElementById('error-message');


// Check username
function checkUsername(whateveriwant) {
    const formControl = username.parentElement;

    if (username.value === "" || username.value.length < 4) {
        // Show error
        formControl.className = "form-control error";
        const errorParagraph = form.querySelector('small');
        errorParagraph.innerText = "Username must be at least 4 characters long";
    } else {
        // Success green border
        formControl.className = "form-control success";
    }
}

// Submit event listener for form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkUsername(username);
});