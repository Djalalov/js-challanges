//CHALLENGE: Return the longest word of a string
// If more than one word put into array. If one word return string.

function longestWord(sen) {
	//Create filtered array
	const wordArr = sen.toLowerCase().match(/[a-zA-Z0-9]+/g);
	//wordArr => [ 'hello', 'my', 'name', 'is', 'elyorbek' ]
	//Sort by length
	const sorted = wordArr.sort((a, b) => b.length - a.length);
	// sorted => ["elyorbek", "hello", "name", "my", "is"];
	//if multiple words then put each word into array
	const longestWordArr = sorted.filter(word => {
		return word.length === sorted[0].length;
	});
	//Check if more than one arr value
	if (longestWordArr.length === 1) {
		return longestWordArr[0];
	} else {
		return longestWordArr;
	}
}
const output = longestWord("Hello my name is Elyorbek");
console.log(output); //elyorbek
