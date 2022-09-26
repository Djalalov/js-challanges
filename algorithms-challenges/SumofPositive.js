//CHALLENGE: Return the sum of all the positive ints

sums = arr => {
	//********* SOLUTION 1 ************//
	/* let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			sum += arr[i];
		}
	}
	return sum; */
	//********* SOLUTION 2 ************//
	return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
};

const output = sums([1, 4, 6, -7]);
console.log(output);
