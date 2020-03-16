const button = document.querySelector('button');

const myUl = document.querySelector('ul');

const title = document.querySelector('header');

myUl.className = 'test';

button.addEventListener('click', () => {
	myUl.classList.toggle('invisible');
});
