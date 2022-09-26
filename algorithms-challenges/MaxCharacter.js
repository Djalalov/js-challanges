//CHALLENGE: Return the character that is most common in the string!
// ex. maxCharacter("Javascript") => 'a'

function maxCharacter(str) {
	//********* SOLUTION 1 ************//
	/* const charMap = {};
	let maxNum = 0;
	let maxChar = "";

	str.split("").forEach(char => {
		if (charMap[char]) {
			charMap[char]++;
		} else {
			charMap[char] = 1;
		}
	});
	console.log(charMap); // { j: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1 }
	for (let char in charMap) {
		if (charMap[char] > maxNum) {
			maxNum = charMap[char];
			maxChar = char;
		}
	} */
	//********* SOLUTION 2 ************//

	let maxNum = 0;
	let maxChar = "";
	//str.split() => [ 'balloooon' ]
	//str.split("") => ["b", "a", "l", "l", "o", "o", "o", "n"];
	console.log();
	str.split("").forEach(char => {
		if (str.split(char).length > maxNum) {
			maxNum = str.split(char).length;
			maxChar = char;
		}
	});
	return maxChar;
}

const output = maxCharacter("ballooon");
console.log(output); // o
