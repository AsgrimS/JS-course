const movieList = document.getElementById('movie-list')

movieList.style.backgroundColor = 'red';
movieList.style.display = 'block';

const person = {
	'first name': 'Max',
	age: 30,
	hobbie: ['sports', 'gaming'],
	greet: function () {
		alert('Hi there!');
	},
};

delete person.age;
person.isAdmin = true;

console.log(person['first name']);

// person.greet();
