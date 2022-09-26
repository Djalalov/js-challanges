//CHALLENGE: Create a function that takes an int as arg
// and returns 'Even' for even numbers or "Odd" for odd number
//Return true if palindrome and false if not
// ex. isPalindrome('racecar') => true

function evenOrOdd(int) {
	//********* SOLUTION 1 ************//
	/* 	if (int % 2 === 0) {
		return "Even";
	}
	return "Odd"; */
	//********* SOLUTION 2 ************//
	return int % 2 === 0 ? "Even" : "Odd";
}

const output = evenOrOdd(0);
console.log(output); // Even
