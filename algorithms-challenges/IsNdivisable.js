//CHALLENGE: Create a function that
//checks if a number N is divisible by two numbers X and Y.;

function nDivisible(n, x, y) {
	//********* SOLUTION 1 ************//

	/* 	const result1 = n / x;
	const result2 = n / y;

	//Getting whole number
	if (result1 % 1 === 0 && result2 % 1 === 0) {
		return true;
	} else {
		return false;
	} */

	//********* SOLUTION 2 ************//
	return !(n % x || n % y);
}

const output = nDivisible(3, 1, 5);
console.log(output); // false
