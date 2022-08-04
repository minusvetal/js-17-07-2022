//* Объектно Ориентированне Програмирование  - ООП

// прототипно-ориентированное наследование

// console.dir([1, 3, 5, 8]); prototype
const soldier = {
	health: 400,
	armor: 100,
	sayHello: function () {
		console.log("sayHello из прототипа soldier");
	},
};

// TODO Создаем НОВЫЙ объект + устанавливаем ему прототип
// TODO метод - Object.create()

const jonh = Object.create(soldier);

// const jonh = {
// 	health: 100,
// };

// ! Старый метод __proto__   - не используется но может встретися
/* jonh.__proto__ = soldier;
console.log("Jonh armor:  ", jonh.armor); */

// TODO современный метод устанавливает прототип - Object.setPrototypeOf() - 1. Аргумент - Кому присваеваем
// TODO                                                                      2. Аргумент - От кого берет prototype
Object.setPrototypeOf(jonh, soldier);
jonh.sayHello();
