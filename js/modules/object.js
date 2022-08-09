
// https://proglib.io/p/uchebnik-po-javascript-rabota-s-obektami-2022-08-07


const options = {
	d: "2",
	f: 1024,
	h: 9845,
	//* объект в объекте
	colors: {
		background: "red",
		color: "green",
	},
	//! makeTest - метод котрый ЯЯЯ сам сделал
	makeTest: function () {
		console.log("Вывод - test из моего метода ");
	},
};

//! заупускаем makeTest - метод котрый ЯЯЯ сам сделал
// options.makeTest();

//? delete options.d;
//* delete удаляет свойство

// console.log("Все что есть в options: ", options);
// console.log("Достучатся до color: ", options["color"]["color"]);

// Деструктуризация объекта
const { background, color } = options.colors;
console.log("background: ", background);

/*
// ? узнаем сколько всего свойств в объекте - его длинв
let counter = 0;

//!  for in - ЦИКЛ - пройдет по всем, потом закончится
// ! for of - ЦИКЛ - не работает с объектами
//* key - название свойства -- будем искать в (in) options

for (let key in options) {
	if (typeof options[key] === "object") {
		for (let i in options[key]) {
			console.log(
				`Свойство внутри 2-го объекта: ${i} имеет значение - ${options[key][i]}`
			);
			// удаляем если надо только верхний уровень без вложеных объектов
			counter++;
		}
	} else {
		console.log(`Свойство: ${key} имеет значение - ${options[key]}`);
		counter++;
	}
}

console.log(`Длина всего объкта - counter =  ${counter}`);
*/

// ! Свойства и методы которые есть уже внутри объекта
// ? https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object

//! Метод Object.keys ===========================================================
// метод Object.keys - показывает все ключи + имеет свойство length
// console.log(Object.keys(options).length);

//=======================================================================

//! Метод -  Object.assign()  ================================================
// Соединить объекты МЕТОД -  Object.assign() - 1. Аргумент - куда поместить
//                                              2. Аргумент - тот объект который помещаем

const numbers = {
	a: 2,
	b: 5,
	c: {
		x: 7,
		y: 4,
	},
};

const add = {
	d: 17,
	e: 20,
};

console.log("Object", Object.assign(numbers, add));

// TODO spread оператор - ... - оператор разворота объекта - копирует в новый объект
const q = {
	t: 15,
	f: 655,
};
const newQ = { ...q };
console.log("newQ: ", newQ);
