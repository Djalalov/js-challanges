//CHALLENGE: Remove the first and the last character of the
// given string

//function removeChars(str) {
//********* SOLUTION 1 ************//
//const length = str.length;
//return str.substr(1, length - 2);
//********* SOLUTION 2 ************//
//return str.slice(1, -1);
//********* SOLUTION 3 ************//
//return str.substring(1, length - 1);
//********* SOLUTION 4 ************//
//}

removeChars = str => str.slice(1, -1);

const output = removeChars("hello");
console.log(output);
