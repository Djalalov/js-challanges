//CHALLENGE: Return true if anagram and false if not

function isAnagram(str1, str2) {
	return formatStr(str1) === formatStr(str2);

	//Helper func
	function formatStr(str) {
		return str
			.replace(/[^\w]/g, "") // exclude any character other than word or number and replace with empty string.
			.toLowerCase() // make it all lover case
			.split("") // convert to array
			.sort() // sort
			.join(""); // convert back to string
	}
}

const output = isAnagram("Dormitory", "dirty room##");
console.log(output); // true
