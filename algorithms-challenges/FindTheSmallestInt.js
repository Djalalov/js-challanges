//CHALLENGE: Given an array of integers your
//solution should find smallest integer.

function findSmallestInt(nums) {
	let smallNumber;
	for (let i = 0; i < nums.length; i++) {
		const element = nums[i];

		if (i === 0) {
			smallNumber = element;
		}

		if (element < smallNumber) {
			smallNumber = element;
		}
	}
	return smallNumber;
}

const output = findSmallestInt([4, 5, 2, 1, 4, 2]);
console.log(output); // 1
