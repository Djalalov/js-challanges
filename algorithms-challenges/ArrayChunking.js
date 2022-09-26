//CHALLENGE: Split an array into chunked arrays of a specific length
// Ex. chunkArr([1,2,3,4,5,6,7], 3) => [[1,2,3], [4,5,6], [7]]

function chunkArr(arr, length) {
	/* 	const chunkedArr = [];
    let i = 0;
  
    while (i < arr.length) {
      //Slice out from the index to the index +
      //chunk length nd push on to the chunked arr
      chunkedArr.push(arr.slice(i, i + length));
      // Increment by chunk length
      i += length;
    }
    return chunkedArr; */
	const chankedArr = [];
	arr.forEach(val => {
		const last = chankedArr[chankedArr.length - 1];
		if (!last || last.length === length) {
			chankedArr.push([val]);
		} else {
			last.push(val);
		}
	});
	return chankedArr;
}

const output = chunkArr([1, 2, 3, 4, 5, 6, 7], 3);
console.log(output); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]
