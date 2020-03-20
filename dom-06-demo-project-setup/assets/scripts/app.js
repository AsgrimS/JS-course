const addMovieModal = document.getElementById('add-modal');
const addMovieUiBtn = document.querySelector('header button');
const cancelMovieUiBtn = addMovieModal.querySelector('.btn--passive');
const confirmMovieBtn = addMovieModal.querySelector('.btn--success');

const backdrop = document.getElementById('backdrop');
const userInputs = addMovieModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');
const listRoot = document.getElementById('movie-list');

const movies = [];

function updateUi() {
	if (movies.length === 0) {
		entryTextSection.style.display = 'block';
	} else {
		entryTextSection.style.display = 'none';
	}
}

function deleteMovie(movieId) {
	let movieIndex = 0;
	for (const movie of movies ) {
		if (movie.id === movieId) {
			break;
		}
		movieIndex++;
	}
	movies.splice(movieIndex, 1);
	listRoot.children[movieIndex].remove();
}

function renderNewMovieElement(id, title, imageUrl, rating) {
	const newMovieElement = document.createElement('li');
	newMovieElement.className = 'movie-element';
	newMovieElement.innerHTML = `
	 <div class="movie-element__image">
	 	<img src="${imageUrl}" alt="${title}">
	 </div>
	 <div class="movie-element__info">
		 <h2>${title}</h2>
		 <p>${rating}/5</p>	
	 </div>
	`;
	newMovieElement.addEventListener('click', deleteMovie.bind(null, id));
	listRoot.append(newMovieElement);
}

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
	updateUi();
	console.log(movies);
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
		id: Math.random().toString(),
		title: titleValue,
		imageUrl: imageUrlValue,
		rating: ratingValue
	};

	movies.push(newMovie);
	console.log(movies);

	renderNewMovieElement(newMovie.id ,newMovie.title, newMovie.imageUrl, newMovie.rating);
	toggleAddMovieUi();
}

addMovieUiBtn.addEventListener('click', toggleAddMovieUi);
cancelMovieUiBtn.addEventListener('click', toggleAddMovieUi);
backdrop.addEventListener('click', toggleAddMovieUi);

confirmMovieBtn.addEventListener('click', addMovie);
