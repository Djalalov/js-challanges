//CHALLENGE: You are given a number and you have to make it negative.
// And maybe the number is already negative.

function makeNegative(num) {
	//********* SOLUTION 1 ************//
	/* 	if (num < 0) {
		return num;
	} else {
		return num * -1;
	} */
	//********* SOLUTION 2 ************//
	//return -Math.abs(num);
	//********* SOLUTION 3 ************//
	return num < 0 ? num : -num;
}

const output = makeNegative(7);
console.log(output); // -7
