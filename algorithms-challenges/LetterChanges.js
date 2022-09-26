//CHALLENGE: Change every letter of the string to the one that follows
// it and capitalize the vowels.
// Z should return to A.
// ex. 'hello there' => 'Ifmmp Uifsf'

function letterChanges(str) {
	let newStr = str.toLowerCase().replace(/[a-z]/gi, char => {
		// g --> global & i --> case sensitive
		if (char === "z" || char === "Z") {
			return "a";
		} else {
			return String.fromCharCode(char.charCodeAt() + 1);
		}
	});

	let formatStr = newStr;
	newStr = formatStr.replace(/a|e|i|o|u/gi, vowel => vowel.toUpperCase());
	return newStr;
}

const output = letterChanges("Hellotherez");
console.log(output); // IfmmpUIfsfA
