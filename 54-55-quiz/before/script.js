/*
  TODO: 2. Select all elements needed
    * The form element (has the id `quiz-form`)
    * The answer answers (have the class `answer`)
    * BONUS: The questions (have the class `question-item`)
    * BONUS: The alert (has the id `alert`)
*/

const Form = document.querySelector('form');
const answers = Array.from(document.querySelectorAll('.answer'));
const questionItems = document.querySelectorAll('.question-item');
const alert = document.querySelector('#alert');
// TODO: 3. Create a submit event listener for the form that does the following.
//    1. Prevent the default behaviour
Form.addEventListener('submit', (e) => {
	e.preventDefault();

	questionItems.forEach((questionItem) => {
		questionItem.classList.add('incorrect');
		questionItem.classList.remove('correct');
	});

	const checkedAnswers = answers.filter((answer) => answer.checked);

	checkedAnswers.forEach((answer) => {
		const isCorrect = answer.value === 'true';
		const questionAnswers = answer.closest('.question-item');

		if (isCorrect) {
			questionAnswers.classList.add('correct');
			questionAnswers.classList.remove('incorrect');
		} else {
			questionAnswers.classList.add('incorrect');
			questionAnswers.classList.remove('correct');
		}
	});

	const alltrue = checkedAnswers.every((answer) => answer.value === 'true');
	const allanswered = checkedAnswers.length === questionItems.length;
	if (alltrue && allanswered) {
		alert.classList.add('active');
		setTimeout(() => {
			alert.classList.remove('active');
		}, 2000);
	}
});
//    4. For each correct answer add the class `correct` to the parent with the class `question-item` and remove the class `incorrect`.
//    5. For each incorrect answer add the class `incorrect` to the parent with the class `question-item` and remove the class `correct`.
//    6. BONUS: Make sure unanswered questions show up as incorrect.
// The easiest way to do this is to add the incorrect class and removing
// the correct class from all question items before checking the correct answers

//    7. BONUS: If all answers are correct show the element
// with the id `alert` and hide it after one second (look into setTimeout)
//  (use the class active to show the alert and remove the class to hide it)
