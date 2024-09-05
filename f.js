// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('signup-form');
//     const feedback = document.getElementById('feedback');
    

//     // Function to validate phone number
//     function validatePhoneNumber(phone) {
//         const phoneRegex = /^\d{10}$/;
//         return phoneRegex.test(phone);
//     }

//     // Function to validate password
//     function validatePassword(password) {
//         const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//         return passwordRegex.test(password);
//     }

//     // Function to check if passwords match
//     function passwordsMatch(password, confirmPassword) {
//         return password === confirmPassword;
//     }

//     // Function to toggle password visibility
//     function togglePasswordVisibility(passwordFieldId, showButtonId, hideButtonId) {
//         const passwordField = document.getElementById(passwordFieldId);
//         const showButton = document.getElementById(showButtonId);
//         const hideButton = document.getElementById(hideButtonId);

//         showButton.addEventListener('click', () => {
//             passwordField.type = 'text';
//             showButton.style.display = 'none';
//             hideButton.style.display = 'inline';
//         });

//         hideButton.addEventListener('click', () => {
//             passwordField.type = 'password';
//             hideButton.style.display = 'none';
//             showButton.style.display = 'inline';
//         });
//     }

//     // Initialize password visibility toggles
//     togglePasswordVisibility('password', 'toggle-password-show', 'toggle-password-hide');
//     togglePasswordVisibility('confirm-password', 'toggle-confirm-password-show', 'toggle-confirm-password-hide');

//     // Form submission handler
//     form.addEventListener('submit', (event) => {
//         event.preventDefault();
//         feedback.textContent = ''; // Clear previous feedback

//         // Get form field values
//         const firstName = document.getElementById('first-name').value.trim();
//         const lastName = document.getElementById('last-name').value.trim();
//         const email = document.getElementById('email').value.trim();
//         const phone = document.getElementById('phone').value.trim();
//         const password = document.getElementById('password').value;
//         const confirmPassword = document.getElementById('confirm-password').value;

//         // Validate fields
//         let isValid = true;

//         if (!firstName) {
//             document.querySelector('.first-name-error').style.display = 'block';
//             isValid = false;
//         } else {
//             document.querySelector('.first-name-error').style.display = 'none';
//         }

//         if (!lastName) {
//             document.querySelector('.last-name-error').style.display = 'block';
//             isValid = false;
//         } else {
//             document.querySelector('.last-name-error').style.display = 'none';
//         }

//         if (!email) {
//             document.querySelector('.email-error').style.display = 'block';
//             isValid = false;
//         } else {
//             document.querySelector('.email-error').style.display = 'none';
//         }

//         if (!validatePhoneNumber(phone)) {
//             document.querySelector('.phone-error').style.display = 'block';
//             isValid = false;
//         } else {
//             document.querySelector('.phone-error').style.display = 'none';
//         }

//         if (!validatePassword(password)) {
//             document.querySelector('.password-error').style.display = 'block';
//             isValid = false;
//         } else {
//             document.querySelector('.password-error').style.display = 'none';
//         }

//         if (!passwordsMatch(password, confirmPassword)) {
//             document.querySelector('.confirm-password-error').style.display = 'block';
//             isValid = false;
//         } else {
//             document.querySelector('.confirm-password-error').style.display = 'none';
//         }

//         if (isValid) {
//             feedback.textContent = 'Form submitted successfully!';
//         } else {
//             feedback.textContent = 'Please fix the errors above.';
//         }
//         function showCongratulationsMessage() {
//             document.getElementById('registrationForm').style.display = 'none';
//             document.getElementById('congratulations').classList.remove('hidden');
//         }

//     });
// });
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');
    const feedback = document.getElementById('feedback');
    const congratulations = document.getElementById('congratulations');
    
    function validatePhoneNumber(phone) {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }

    function validatePassword(password) {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    }

    
    function passwordsMatch(password, confirmPassword) {
        return password === confirmPassword;
    }

    function togglePasswordVisibility(passwordFieldId, showButtonId, hideButtonId) {
        const passwordField = document.getElementById(passwordFieldId);
        const showButton = document.getElementById(showButtonId);
        const hideButton = document.getElementById(hideButtonId);

        showButton.addEventListener('click', () => {
            passwordField.type = 'text';
            showButton.style.display = 'none';
            hideButton.style.display = 'inline';
        });

        hideButton.addEventListener('click', () => {
            passwordField.type = 'password';
            hideButton.style.display = 'none';
            showButton.style.display = 'inline';
        });
    }

    
    togglePasswordVisibility('password', 'toggle-password-show', 'toggle-password-hide');
    togglePasswordVisibility('confirm-password', 'toggle-confirm-password-show', 'toggle-confirm-password-hide');

   
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        feedback.textContent = ''; 

       
        const firstName = document.getElementById('first-name').value.trim();
        const lastName = document.getElementById('last-name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

       
        let isValid = true;

        if (!firstName) {
            document.querySelector('.first-name-error').style.display = 'block';
            isValid = false;
        } else {
            document.querySelector('.first-name-error').style.display = 'none';
        }

        if (!lastName) {
            document.querySelector('.last-name-error').style.display = 'block';
            isValid = false;
        } else {
            document.querySelector('.last-name-error').style.display = 'none';
        }

        if (!email) {
            document.querySelector('.email-error').style.display = 'block';
            isValid = false;
        } else {
            document.querySelector('.email-error').style.display = 'none';
        }

        if (!validatePhoneNumber(phone)) {
            document.querySelector('.phone-error').style.display = 'block';
            isValid = false;
        } else {
            document.querySelector('.phone-error').style.display = 'none';
        }

        if (!validatePassword(password)) {
            document.querySelector('.password-error').style.display = 'block';
            isValid = false;
        } else {
            document.querySelector('.password-error').style.display = 'none';
        }

        if (!passwordsMatch(password, confirmPassword)) {
            document.querySelector('.confirm-password-error').style.display = 'block';
            isValid = false;
        } else {
            document.querySelector('.confirm-password-error').style.display = 'none';
        }

        if (isValid) {
            feedback.textContent = 'Form submitted successfully!';
            feedback.style.color = 'green'; 

           
            form.style.display = 'none';
            congratulations.style.display = 'block';

        } else {
            feedback.textContent = 'Please fix the errors above.';
            feedback.style.color = 'red';
        }
    });
});
