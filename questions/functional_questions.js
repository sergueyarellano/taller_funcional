/*
┌─────────────────────────┐
│ #01 Recursividad lineal │
└─────────────────────────┘

"Write a program that prints if a number is even or not"
*/

function isEven(n) {
	return n === 0 ?
		true :
		!isEven(n-1);
}

if (true) {

	console.log('isEven(1)', isEven(1));
	console.log('isEven(24)', isEven(24));
	console.log('isEven(11)', isEven(11));
	console.log('----------------------');
}

/*
┌───────────────────────────────────────────────────┐
│ #02 Recursividad lineal, con evaluacion perezosa. │
└───────────────────────────────────────────────────┘

"Write a program that prints the numbers from 1 to 100. 
But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. 
For numbers which are multiples of both three and five print “FizzBuzz”."
*/

function fizzBuzz (n) {
	return fizzBuzzAux(n, 1);
}

function fizzBuzzAux(n, p) {
	return p > n ?
		'' :
		((p % 5 === 0 && p % 3 === 0 && 'FizzBuzz') || (p % 5 === 0 && 'Buzz') || (p % 3 === 0 && 'Fizz') || p) + '\n' + fizzBuzzAux(n, p + 1);
}

if (false) {	
	console.log('fizzBuzz(30) \n' + fizzBuzz(30));
	console.log('----------------------');

}

/*
┌───────────────────────────┐
│ #03 Recursividad multiple	│
└───────────────────────────┘

"Write a program that prints the number located at a position in the fibonacci series"
*/

function fibonacci(n) {
	return n < 2 ?
		n :
		fibonacci(n - 1) + fibonacci(n - 2);
}

// console.log(fibonacci(40));

// Optimization with memoization

var fibonacciMemo = function fibonacciMemo() {
	var memo = [0, 1];
	var fib = function fib (n) {
		var result = memo[n];
		if (typeof result !== 'number') {
			result = fib(n -1) + fib(n - 2);
			memo[n] = result;
		}
		return result;
	}
	return fib;
}();

// console.log(fibonacci(500))

/*
┌─────────────────────────────────────┐
│ #04 Recursividad multiple, con cola │
└─────────────────────────────────────┘

Write a program that prints a compressed string.
If the string is 'aabccc' the output should be 'a2bc3'
If the string is 'abc' the output should be 'abc'
*/

function compress (s) {
	return compressAux(s, 0, 1);
}

function compressAux(s, p, ac) {
	return p > s.length -1 ?
		'' :
		s.charAt(p) === s.charAt(p + 1) ?
			compressAux(s, p +1, ac + 1) :
			s.charAt(p) + (ac !== 1 ? ac : '') + compressAux(s, p + 1, 1);
}

// console.log(compress('aabbbc'))


/*
┌────────────┐
│ #05 Reduce │
└────────────┘
*/
function reduce (v, fn, o) {
	return reduceAux(v, fn, o, 0);
}

function reduceAux(v, fn, o, p) {
	return p > v.length -1 ?
		o :
		reduceAux(v, fn, fn(o, v[p], p, v), p + 1);
}

