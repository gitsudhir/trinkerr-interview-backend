// solution 1 
// we can convert the string into numbers and then add them 
function solution1() {
	console.log("Solution 1");
	let str1 = "123456";
	let str2 = "312321";
	console.log("Number 1 = ", str1);
	console.log("Number 2 = ", str2);
	try {
		let result = +str1 + +str2;
		let resultAsString = "" + result;
		console.log("Addition = ", resultAsString);

	} catch (error) {
		console.log(" strings should have digits from 0-9 ");
	}
}
solution1();

// solution 2
// add the number digit by digit
function solution2() {
	console.log("Solution 2");

	let str1 = "123456";
	let str2 = "312321";
	console.log("Number 1 = ", str1);
	console.log("Number 2 = ", str2);
	try {
		let num1AsArray = str1.split("");
		let num2AsArray = str2.split("");
		let result = [];
		// console.log(num1AsArray);
		let curry = 0;
		while (num1AsArray.length != 0 || num2AsArray.length != 0) {
			let num1 = +num1AsArray.pop() || 0;
			let num2 = +num2AsArray.pop() || 0;
			let tempResult = curry + num1 + num2;
			let digitAdd;
			if (tempResult > 10) {
				digitAdd = tempResult - 10;
				curry = 1;
			} else {
				digitAdd = tempResult;
				curry = 0;
			}
			result.unshift(tempResult);
		}

		let resultAsString = result.join("");
		console.log("Addition = ", resultAsString);


	} catch (error) {
		console.log(" strings should have digits from 0-9 ");

	}

}
solution2();