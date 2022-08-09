// ! Замыкание функций и Лексическое окружение

// * Лексическое окружение - внутри скобок - с наружи не видно что было внутри скобок

/* Разделение лексического окружения на 2 части
        1 часть - внутренне  Лексическое окружение 
                - это объект в нем как свойства хранятся все ЛОКАЛЬНЫЕ переменные этой функции и другая инфа.
        2 часть - внешнее Лексическое окружение 
                - то которое соответствует коду снаружы этой функции.
*/

/*
let number = 5; // внешний
debugger;
function logNumber() {
	// let number = 45; // внутренний
	console.log(number);
	debugger;
}
number = 7; //внешний

logNumber();
debugger;
*/

//========================================================================================================================================================

// * Замыкание функций
// Замыкание - это функция которая запоминает свои внешние переменные и может получить к ним доступ

function createCounter() {
	let counter = 0;

	const myFunction = function () {
		debugger;
		counter = counter + 1;
		debugger;
		return counter; //создали замыкание. Будет ссылка на локальную переменную counter
	};
	return myFunction;
}
debugger;
const increment = createCounter();
debugger;
const s1 = increment();
debugger;
const s2 = increment();
debugger;
const s3 = increment();
debugger;

console.log(s1, s2, s3);
