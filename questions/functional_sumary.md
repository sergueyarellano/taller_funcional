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
────────────────────────────────────────────────────────────────────

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

-> Immersion
────────────────────────────────────────────────────────────────────

┉	Functional programs contain no assignment statements, so variables, once given a value, never change.

-> no state?

-> no side-effects
────────────────────────────────────────────────────────────────────

┉	Recursive functions are also naturally easy to test because they are easy to write in a pure manner, with a 
specific and consistent return value for any given input, and no side effects on external variable states.

-> easy to test
────────────────────────────────────────────────────────────────────

┉	A function call can have no effect other than to compute its result.

-> Eliminates a major source of bugs

-> Order of execution is irrelevant
────────────────────────────────────────────────────────────────────

┉	Conventional programs consist of 90% assignment statements,

-> Functional programmers can omit that!

-> Shorter programs
────────────────────────────────────────────────────────────────────

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
────────────────────────────────────────────────────────────────────

Source:
http://worrydream.com/refs/Hughes-WhyFunctionalProgrammingMatters.pdf (John Hughes, ed. D. Turner, Addison-Wesley, 1990, pp 17–42.)

