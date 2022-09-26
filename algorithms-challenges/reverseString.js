//CHALLENGE: Reverse a string!
// ex. reverseString('hello') => 'olleh'

function reverseString(str) {
	//********* SOLUTION 1 ************//
	/* var reverse = "";
	for (let i = str.length - 1; i >= 0; i--) {
		reverse += str[i];
	}
	return reverse; */
	//********* SOLUTION 2 ************//
	/* 	let reverse = "";
	for (let i = 0; i <= str.length - 1; i++) {
		reverse = str[i] + reverse;
	}
	return reverse; */
	//********* SOLUTION 3 ************//
	//return str.split(" ").reverse().join(" ");
	//********* SOLUTION 4 ************//
	/* let reverse = "";
	for (let char of str) {
		reverse = char + reverse;
	}
	return reverse; */
	//********* SOLUTION 5 ************//
	/* 	let reverse = "";
	str.split("").forEach(char => (reverse = char + reverse));
	return reverse; */
	//********* SOLUTION 6 ************/
	//let reduced = str.split("").reduce((reverse, char) => char + reverse);
	//return reduced;
	//********* SOLUTION 7 ************/
	let reversed = [...str].reverse().join("");
	return reversed;
}

const output = reverseString("Javascript");
console.log(output); // tpircsavaJ
