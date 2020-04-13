class Course {
	#price;

	constructor(title, length, price) {
		this.title = title;
		this.length = length;
		this.price = price;
	}

	get price() {
		return '$' + this.#price;
	}

	set price(value) {
		if (value < 0) {
			throw 'Invalid value!';
		}
		this.#price = value;
	}

	lenghtToPrice() {
		const ratio = (this.length / this.#price).toFixed(2);
		return ratio;
	}

	summary() {
		const summaryText = `${this.title} course costs ${
			this.price
		} and takes aproximately ${this.length} hours to complete.
        The price to time ratio equals ${this.lenghtToPrice()}.`;
		return summaryText;
	}
}

class CourseList {
	constructor() {
		this.courses = [
			new Course('JS', 12, -13.99),
			new Course('CSS', 9, 15.99),
			new PracticalCourse('IDK', 12, 13, 26),
			new TheoreticalCourse('XDD', 21, 11),
		];
	}
}

class PracticalCourse extends Course {
	constructor(title, length, price, numOfExcercises) {
		super(title, length, price);
		this.numOfExcercises = numOfExcercises;
	}
}

class TheoreticalCourse extends Course {
	publish() {
		console.log('This is theo course');
	}
}

Lista = new CourseList().courses;
Lista.forEach(function (course) {
	// console.log(course);
	// console.log(course.lenghtToPrice());
	console.log(course.summary());
	if (course.numOfExcercises) {
		console.log(course.numOfExcercises);
	}
	if (course.publish) {
		course.publish();
	}
});
