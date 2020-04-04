// const numbers = [1, 2, 3];
// console.log(numbers);

// // const moreNumbers = Array(5, 2);
// // console.log(moreNumbers);

// // const yetMoreNumbers = Array.of(1, 2);
// // console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobbies = ['Cooking', 'Sports'];
// const personalData = [30, 'Max', {moreDetail: []}];

// const analyticsData = [[1, 1.6], [-5.4, 2.1]];

// for (const data of analyticsData) {
//   for (const dataPoint of data) {
//     console.log(dataPoint);
//   }
// }

// console.log(personalData[1]);

// const hobbies = ['sports', 'gaming'];

// hobbies.push('cooking');
// hobbies.unshift('cdoding');

// hobbies.pop();
// hobbies.shift();

// hobbies[1] = 'coding';
// hobbies[5] = 'music';

// hobbies.splice(1, 0, 'Good food');
// hobbies.splice(1, 0);
// console.log(hobbies);

// const testResults = [1, 2, 5.6, 2.99, 12.1, 2, 245];
// // const storedResults = testResults.slice(1, 3);
// const storedResults = testResults.concat([5, 2, 1]);

// const indexOf = storedResults.indexOf(2);
// const lastIndexOf = storedResults.lastIndexOf(2);

// testResults.push(101);

// console.log(storedResults, testResults);
// console.log(indexOf);
// console.log(lastIndexOf);

// const personalData = [{ name: 'Max' }, { name: 'Manuel' }];

// const manuel = personalData.find(function(person, idx, persons) {
// 	return person.name === 'Manuel';
// });

// console.log(manuel);

// const maxIndex = personalData.findIndex(function(person, idx, persons) {
// 	return person.name === 'Max';
// });

// console.log(maxIndex);

// const prices = [10.99, 5.99, 3.88, 6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// // for (const price of prices) {
// // 	taxAdjustedPrices.push(price * (1 + tax));
// // }

// prices.forEach(function(price, idx, prices){
//     const priceObj = {index: idx, taxAdjPrice: price * (1 + tax)}
//     taxAdjustedPrices.push(priceObj);
// });

// console.log(prices);

// const prices = [10.99, 5.99, 3.88, 6.59];
// const tax = 0.19;

// const taxAdjustedPrices = prices.map(function(price, idx, prices) {
// 	const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
// 	return priceObj;
// });

// // console.log(prices, taxAdjustedPrices);

// const sortedPrices = prices.sort(function(a, b) {
// 	if (a > b) {
// 		return 1;
// 	} else if (a === b) {
// 		return 0;
// 	} else {
// 		return -1;
// 	}
// });

// // console.log(sortedPrices.reverse());

// const filteredArray = prices.filter(function(price, index, prices) {
// 	return price > 6;
// });

// // console.log(filteredArray);

// const sum = prices.reduce(function(prevValue, curValue, curIndex, prices) {
// 	return prevValue + curValue;
// }, 0);

// console.log(sum);

// const data = 'new york;10.99;2000';

// const transData = data.split(';');

// console.log(transData);

// const name = ['Max', 'Scwarts'];
// const nameF = name.join(' ');
// console.log(nameF);

// const copiedName = [...name];
// console.log(copiedName);
