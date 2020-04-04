// const ids = new Set(['Hi', 'from', 'potato']);
// // console.log(ids.has(0));
// ids.add(4);
// ids.add(2);
// ids.delete(2);

// for (const entry of ids.entries()) {
// 	console.log(entry);
// }

// // console.log(ids);

// const person1 = { name: 'Max' };
// const person2 = { name: 'Manuel' };

// const personData = new Map([[person1, [{ date: 'yesterday', price: '100' }]]]);

// console.log(personData);
// console.log(personData.get(person1));

let person = { name: 'Max' };
const persons = new WeakSet();

persons.add(person);
// person = null;

console.log(persons);

const personData = new WeakMap();
personData.set(person, 'Extra info');

person = null;

console.log(personData);
