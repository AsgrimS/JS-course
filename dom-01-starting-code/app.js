const button = document.querySelector('button');

const myUl = document.querySelector('ul');

myUl.className = 'test';

button.addEventListener('click', () => {
	myUl.classList.toggle('invisible');
});
