const zero_one = [1, 4, 3.99, 200, 24, 123];

const filtered = zero_one.filter(function(value) {
	return value > 5;
});

console.log(filtered);

const mapping = zero_one.map(function(value, index) {
	const mapObj = { num: value, index: index, info: 'Some number' };
	return mapObj;
});

console.log(mapping);

const reduced = zero_one.reduce(function(preVal, curVal) {
	return preVal * curVal;
});

console.log(reduced);

console.log(zero_one.join());

function findMax(...nums) {
	let currMax = nums[0];
	let currMin = nums[0];
	for (const number of nums) {
		if (number > currMax) {
			currMax = number;
		} else if (number < currMin) {
			currMin = number;
		}
	}
	answer = [currMin, currMax];
	return answer;
}

console.log(findMax(...zero_one));
const [min, max] = findMax(...zero_one);
console.log(min, max);

const uniqueNums = new Set();

uniqueNums.add(-5);