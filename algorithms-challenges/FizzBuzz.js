//CHALLENGE: print numbers from 1 to 100, but here’s the catch, multiple of 3 should print “Fizz” and similarly print “Buzz” for multiples of 5 and lastly print “FizzBuzz” for multiples of 3 and 5.

function fizzBuzz() {
	for (let i = 0; i <= 15; i++) {
		if (i % 15 == 0) console.log("FizzBuzz");
		else if (i % 3 == 0) console.log("Fizz");
		else if (i % 5 == 0) console.log("Buzz");
		else console.log(i);
	}
}
const output = fizzBuzz();
console.log(output);
/* 1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
undefined */
