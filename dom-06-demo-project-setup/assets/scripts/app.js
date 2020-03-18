const addMovieModal = document.getElementById('add-modal');
const addMovieUiBtn = document.querySelector('header button');
const cancelMovieUiBtn = addMovieModal.querySelector('.btn--passive');
const confirmMovieBtn = addMovieModal.querySelector('.btn--success');

const backdrop = document.getElementById('backdrop');
const userInputs = addMovieModal.querySelectorAll('input');

const movies = [];

function toggleMovieModal() {
	addMovieModal.classList.toggle('visible');
}

function toggleBackdrop() {
	backdrop.classList.toggle('visible');
}

function clearMovieUiInput() {
	for (const input of userInputs) {
		input.value = '';
	}
}

function toggleAddMovieUi() {
	toggleMovieModal();
    toggleBackdrop();
    clearMovieUiInput();
}

function addMovie() {
	const titleValue = userInputs[0].value.trim();
	const imageUrlValue = userInputs[1].value.trim();
	const ratingValue = userInputs[2].value.trim();

	if (
		titleValue === '' ||
		imageUrlValue === '' ||
		ratingValue === '' ||
		+ratingValue < 1 ||
		+ratingValue > 5
	) {
		alert('Please enter valid values');
		return;
	}

	const newMovie = {
		title: titleValue,
		image: imageUrlValue,
		rating: ratingValue
	};

	movies.push(newMovie);
	console.log(movies);

	toggleAddMovieUi();
}

addMovieUiBtn.addEventListener('click', toggleAddMovieUi);
cancelMovieUiBtn.addEventListener('click', toggleAddMovieUi);
backdrop.addEventListener('click', toggleAddMovieUi);

confirmMovieBtn.addEventListener('click', addMovie);
