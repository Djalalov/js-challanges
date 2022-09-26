//CHALLENGE: Write a programm that find the
//summation of every number from 1 to NUM

function summation(num) {
	let sum = 0;
	for (let i = 1; i <= num; i++) {
		sum += i;
	}
	return sum;
}

const output = summation(3);
console.log(output); // 6
