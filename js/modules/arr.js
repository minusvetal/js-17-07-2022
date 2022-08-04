// Работа с массивами

// ! Псевдомассив
// ! Псевдомассив выглядит как обычный массив - НО нет МЕТОДОВ. Структура хранит данные по порядку.

// TODO Методы ===============================

const arr = [1, 52, 36, 996, 8];

//? Перебор массива

// TODO  for
// for (let i = 0; i < arr.length; i++) {
// 	console.log(`arr ${i} = `, arr[i]);
// }

// TODO  for of - ЦИКЛ - работает с массиво подобными сущностями: массив, строка, псевдомассив, map, set
// TODO                  может использовать break continue

// for (let value of arr) {
// 	console.log("value", value);
// }

// TODO Mетод forEach() - вызывает callback function - проходит по каждому элементу массива,
// TODO        и применяет эту function  на каждом элементе масива.
// TODO        Принимает 3 аргумента - 1 - 'item' тот элемент который мы сейчас перебираем
// TODO                                2 - 'i' № номер по порядку
// TODO                                3 - 'arr' в каком массиве ковыряемся

// arr.forEach(function (item, i, arr) {
// 	console.log(
// 		`Номер по порядку: ${i}, значение элемента ${item}, название массива где перебираем ${arr} `
// 	);
// });

// TODO Метод  .pop() - удаляет последний элемент массива
// arr.pop();
// console.log("arr", arr);

// TODO Метод  .push() - добавляет элемент в конец массива
// arr.push(22);
// console.log("arr", arr);

// ! Метод  .shift() - удаляет в начале и возвращает его -- меняет индекс элемента --- не используют
// ! Метод  .unshift() - добавляет в начале -- меняет индекс элемента --- не используют

// TODO Метод  .join(', ') - возвращает из массива в строку. Через любой знак: "-"  ","  "."  ";"  ":"

// TODO Метод  .split(', ') - разбивает и возвращает из строки массив. Через любой знак: "-"  ","  "."  ";"  ":"
// const str = prompt("", "Введите названия через запятую");
// const products = str.split(", ");
// console.log("products:", products.join(" - "));

// TODO Метод  .sort() - возвращает строку. Буквы сортирует По алфавиту!
// TODO -----  .sort()                      Цифры - надо вернуть callback function compareNum(a, b) { return a - b }
// arr.sort(compareNum);
// console.log(arr);

// Если цыфры - то запуск compareNum()
// function compareNum(a, b) {
// 	return a - b;
// }

// TODO Метод  .slice() - делает ПОВЕРХНОСТНУЮ копию массива
/* const newArr = arr.slice(); // Поверхностная копия массива arr
newArr[1] = "Заменили цыфры";
console.log("Arr", arr);
console.log("newArr", newArr);
*/

// TODO spread оператор - ... - оператор разворота массива - копирует в новый массив

const video = ["youtube", "vimeo", "rutube"],
	blogs = ["wordpress", "live", "blogger"],
	internet = [...video, ...blogs, "facebook"];
console.log("internet: ", internet);
