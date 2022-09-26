//CHALLENGE: Return the number (count) of vowels in the given string.

function countVowels(str) {
	//********* SOLUTION 1 ************//
	//let vowelCount = 0;
	/*
	str
		.replace(/[^\w]/g, "")
		.toLowerCase()
		.replace(/a|e|i|o|u/gi, vowel => (vowelCount += 1));
	return vowelCount; */
	//********* SOLUTION 2 ************//
	/* const arr = str.split("");
	for (let i = 0; i < arr.length; i++) {
		switch (arr[i]) {
			case "a":
				vowelCount++;
				break;
			case "e":
				vowelCount++;
				break;
			case "o":
				vowelCount++;
				break;
			case "i":
				vowelCount++;
				break;
			case "u":
				vowelCount++;
		}
	}
	return vowelCount; */
	//********* SOLUTION 3 ************//
	//return (str.match(/[aeiou]/gi) || []).length;
	//********* SOLUTION 4 ************//
	/* 	let vowelCount = 0;
	let vowelsArr = ["a", "e", "u", "o", "i"];
	for (let i = 0; i < str.length; i++) {
		for (let j = 0; j < vowelsArr.length; j++) {
			if (str[i] === vowelsArr[j]) {
				vowelCount++;
			}
		}
	}
	return vowelCount; */
	//********* SOLUTION 4  ************//
	let vowelsArr = ["a", "e", "u", "o", "i"];
	return str.split("").filter(letter => {
		return vowelsArr.includes(letter) ? true : false;
	}).length;
}

const output = countVowels("adam");
console.log(output); // 2
