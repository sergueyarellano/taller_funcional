/*
Functional programming
----------------------
┉	Functional programming is so called because its fundamental operation is
the application of functions to arguments.

-> g (f input)
-> Functions as citizens with privileges
-> High order functions
-> Lazy evaluation

Javascript:
Lazy evaluation only in Logical Operators || &&

'Gollum' || 'Smeagol'
'Mortal kombat' && 'Fatality'
─────────────────────────────────────────────────────────────────────────────────

┉	Typically the main function is defined in terms of
other functions, which in turn are defined in terms of still more functions, until
at the bottom level the functions are language primitives

Javascript:
Boolean
Null
Undefined
Number
String
Symbol (new in ECMAScript 6)

-> Verbosity?
─────────────────────────────────────────────────────────────────────────────────

┉	Functional programs contain no assignment statements, so variables, once given a value, never change.

-> no state?
-> no side-effects
─────────────────────────────────────────────────────────────────────────────────

┉	Recursive functions are also naturally easy to test because they are easy to write in a pure manner, with a 
specific and consistent return value for any given input, and no side effects on external variable states.

-> easy to test
─────────────────────────────────────────────────────────────────────────────────

┉	A function call can have no effect other than to compute its result.

-> Eliminates a major source of bugs
-> Order of execution is irrelevant
─────────────────────────────────────────────────────────────────────────────────

┉	Conventional programs consist of 90% assignment statements,

-> Functional programmers can omit that!
-> Shorter programs
─────────────────────────────────────────────────────────────────────────────────

Discussion: 
"It is a logical impossibility to make a language more powerful by omitting features, no matter 
how bad they may be"
- Structured vs unstructured

-> essential "gotos"?
-> small modules can be coded quickly and easily
-> general-purpose modules can be reused, leading to faster development of subsequent programs
-> the modules of a program can be tested independently, helping to reduce the time spent debugging
-> "to increase one’s ability to modularize a problem conceptually, one must provide new kinds of glue in 
the programming language"
-> "modularity is the key to successful programming"
─────────────────────────────────────────────────────────────────────────────────

Source:
http://worrydream.com/refs/Hughes-WhyFunctionalProgrammingMatters.pdf (John Hughes, ed. D. Turner, Addison-Wesley, 1990, pp 17–42.)
*/
/*
Reduce family
-------------

*/

/*
RECURSION
---------

┌─────────────────────────┐
│ #01 Lineal recursion	  │
└─────────────────────────┘

"Write a program that prints if a number is even or not"
*/

function isEven(n) {
	return n === 0 ?
		true :
		!isEven(n-1);
}

// console.log('isEven(1)', isEven(1));
// console.log('isEven(24)', isEven(24));
// console.log('isEven(11)', isEven(11));
// console.log('----------------------');


/*
┌───────────────────────────────────────────────────┐
│ #02 Lineal recursion, lazy evaluation. 			│
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
│ #03 Multiple Recursion	│
└───────────────────────────┘

"Write a program that prints the number located at a position in the fibonacci series"
*/

function fibonacci(n) {
	return n < 2 ?
		n :
		fibonacci(n - 1) + fibonacci(n - 2);
}

// console.log(fibonacci(45));

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

// console.log(fibonacciMemo(555))

/*
┌───────────────┐
│ #04 Tail call │
└───────────────┘

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


function repeated (v) {
	return repeatedAux(v, 0, 1);
}

function repeatedAux (v, p, m) {
	return p > v.length - 1 || m > v.length - 1?
		false :
		v[p] === v[m] || repeatedAux(v, p, m + 1) || repeatedAux(v, p + 1, p + 2);
}

console.log(repeated([6,2,3,4,2]))
