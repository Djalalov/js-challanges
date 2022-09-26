//CHALLENGE: Reverse an INTEGER!
// ex. reverseString(123) => 321

function reverseInt(int) {
	const revString = int
		.toString() // converting to string
		.split("") // converting to array
		.reverse() // reversing the order of the array
		.join(""); // converting back to string

	return parseInt(revString) * Math.sign(int);
	// convert back to integer, negative number considered returning
}

const output = reverseInt(-987654321);
console.log(output); // -123456789
