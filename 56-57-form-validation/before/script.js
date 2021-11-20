// TODO: Select all elements needed
//    Use the HTML to figure out what classes/ids will work best for selecting each element

const form = document.querySelector('form');
const username = document.querySelector('#username');
username.style.background = 'red';

const password = document.querySelector('#password');
password.style.background = 'red';

const passConfirm = document.querySelector('#password-confirmation');
passConfirm.style.background = 'red';

const terms = document.querySelector('#terms');

const errorContainer = document.querySelector('.errors');
const errorlists = document.querySelector('.errors-list');

// TODO: Create an event listener for when the form is submitted and do the following inside of it.
//    TODO: Create an array to store all error messages and clear any old error messages
//    TODO: Define the following validation checks with appropriate error messages
//      1. Ensure the username is at least 6 characters long
//      2. Ensure the password is at least 10 characters long
//      3. Ensure the password and confirmation password match
//      4. Ensure the terms checkbox is checked
//    TODO: If there are any errors then prevent the form from submitting and show the error messages

form.addEventListener('submit', (e) => {
	const errMess = [];
	clearErrors();

	if (username.value.length < 6) {
		errMess.push('add 6 letter bitch');
	}
	if (password.value.length < 10) {
		errMess.push('add 10 pass bitch');
	}
	if (!terms.checked) {
		errMess.push('check the box bitch ');
	}

	if (errMess.length > 0) {
		e.preventDefault();
		showErrors(errMess);
	}
});
// TODO: Define this function
function clearErrors() {
	errorlists.innerText = '';
	errorContainer.classList.remove('show');
	// Loop through all the children of the error-list element and remove them
	// IMPORTANT: This cannot be done with a forEach loop or a normal for loop since as you remove children it will modify the list you are looping over which will not work
	// I recommend using a while loop to accomplish this task
	// This is the trickiest part of this exercise so if you get stuck and are unable to progress you can also set the innerHTML property of the error-list to an empty string and that will also clear the children.
	//  I recommend trying to accomplish this with a while loop, though, for practice.
	// Also, make sure you remove the show class to the errors container
}

// TODO: Define this function
function showErrors(errorMessages) {
	errorMessages.forEach((errorMessage) => {
		const li = document.createElement('li');
		li.innerText = errorMessage;
		errorlists.appendChild(li);
	});
	errorContainer.classList.add('show');
	// Add each error to the error-list element
	// Make sure to use an li as the element for each error
	// Also, make sure you add the show class to the errors container
}
