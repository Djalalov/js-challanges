//CHALLENGE: Take an array of arrays amd flatten to a single arr

function flattenArr(arrays) {
	//********* SOLUTION 1 ************//
	//return arrays.reduce((a, b) => a.concat(b), []);
	//********* SOLUTION 2 ************//
	//return [].concat.apply([], arrays);
	//********* SOLUTION 3 ************//
	return [].concat(...arrays);
}

const output = flattenArr([
	[1, 2, 3],
	[4, 5, 6],
	[7, 4, 5],
]);
console.log(output); // [1, 2, 3, 4, 5, 6, 7, 4, 5]
