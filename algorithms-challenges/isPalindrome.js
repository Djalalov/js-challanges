//CHALLENGE: VALIDATE A PALINDROME!
//Return true if palindrome and false if not
// ex. isPalindrome('racecar') => true

function isPalindrome(str) {
	//********* SOLUTION 1 ************//
	/* let l = str.length;
	for (let i = 0; i < l / 2; i++) {
		if (str[i] !== str[l - 1 - i]) {
			return false;
		}
	}
	return true; */
	//********* SOLUTION 2 ************//
	const revString = str.split("").reverse().join("");
	return revString === str;
}

const output = isPalindrome("madam");
console.log(output); // true
