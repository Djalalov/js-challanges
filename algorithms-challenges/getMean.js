//CHALLENGE: Get the mean of the array.

function getMean(array) {
	//********* SOLUTION 1 ************//
	/* 	let sum = array.reduce((prev, cur) => prev + cur);
	let mean = sum / array.length;
	return Math.floor(mean); */
	//********* SOLUTION 2 ************//
	const count = array.length;
	let sum = 0;

	for (let i = 0; i < count; i++) {
		sum = sum + array[i];
	}

	return Math.floor(sum / count);
}

const output = getMean([1, 2, 3]);
console.log(output); // 2
