//CHALLENGE: Capitilize the first letter of the words!
// ex. reverseString("i love javascript") => 'I Love Javascript'

function capitilizeLetter(str) {
	//********* SOLUTION 1 ************//
	/* 	const strArr = str.toLowerCase().split(" ");

	for (let i = 0; i < strArr.length; i++) {
		strArr[i] = strArr[i].substring(0, 1) //taking every first letter of the given words
    .toUpperCase() + strArr[i] // changing it to UPPERCASE
    .substring(1); // adding the rest letters of the given words starting from index 1
	}
	return strArr.join(" "); */
	//********* SOLUTION 2 ************//
	/* 	return str
		.toLowerCase()
		.split(" ")
		.map(word => word[0].toUpperCase() + word.substr(1))
		.join(" "); */
	//********* SOLUTION 3 ************//
	return str.replace(/\b[a-z]/gi, char => char.toUpperCase());
}

const output = capitilizeLetter("i love javascript");
console.log(output); // I Love Javascript
