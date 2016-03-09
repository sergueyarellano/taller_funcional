/* • 

Programacion funcional

• Su creación es debida a las necesidades de los
investigadores en el campo de la inteligencia
artificial y en sus campos secundarios del cálculo
simbólico, pruebas de teoremas, sistemas basados
en reglas y procesamiento del lenguaje natural.

• La característica principal de la programación funcional es
que los cálculos se ven como una función matemática que
hacen corresponder entradas y salidas.

• No hay noción de posición de memoria y por tanto,
necesidad de una instrucción de asignación.

• Los bucles se modelan a través de la recursividad ya que
no hay manera de incrementar o disminuir el valor de una
variable.

• Como aspecto práctico casi todos los lenguajes funcionales
soportan el concepto de variable, asignación y bucle.

• Estos elementos no forman parte del modelo funcional
“puro”.


Currificación
-------------
Las funciones con más de un argumento se pueden interpretar
como funciones que toman un único argumento y devuelven como
resultado otra función con un argumento menos.
Este mecanismo que permite representar funciones de varios
argumentos mediante funciones de un argumento se denomina
“CURRIFICACIÓN” (debido a Haskell B. Curry)

Evaluación perezosa
-------------------

Una expresión no se evalúa hasta que realmente se necesita.

En javascript existe evaluacion perezosa cuando utilizamos los operadores && y ||

http://notasjs.blogspot.com.es/2013/02/evaluacion-perezosa-de-operadores-y.html


┌───────────────────────────────┐
│ #01 Recursividad lineal	    │
┕━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┙

"Write a program that prints if a number is even or not"
*/

function isEven(n) {
	return n === 0 ?
		true :
		!isEven(n-1);
}

// console.log(isEven(101));

/*
┌───────────────────────────────────────────────────────┐
│ #02 Recursividad lineal, con evaluacion perezosa.	    │
┕━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┙

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

// console.log(fizzBuzz(100));

/*
┌───────────────────────────────┐
│ #03 Recursividad multiple	    │
┕━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┙

"Write a program that prints the number located at a position in the fibonacci series"
*/

function fibonacci(n) {
	return n < 2 ?
		n :
		fibonacci(n - 1) + fibonacci(n - 2);
}

// console.log(fibonacci(40));

// Optimization with memoization

var fibonacci = function fibonacci() {
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
┕━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┙

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
┕━━━━━━━━━━━━┙
*/
function reduce (v, fn, o) {
	return reduceAux(v, fn, o, 0);
}

function reduceAux(v, fn, o, p) {
	return p > v.length -1 ?
		o :
		reduceAux(v, fn, fn(o, v[p], p, v), p + 1);
}