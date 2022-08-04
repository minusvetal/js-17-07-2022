/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

"use strict";

// Код возьмите из предыдущего домашнего задания

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function () {
		personalMovieDB.count = +prompt("Яку кількість фильмів подивились?!", "");

		while (
			personalMovieDB.count == "" ||
			personalMovieDB.count == null ||
			isNaN(personalMovieDB.count)
		) {
			personalMovieDB.count = +prompt(
				"Яку кількість фильмів подивились?!",
				"Треба щось ввести!!!"
			);
		}
		personalMovieDB.writeYourGenres();
	},
	rememberMyFilms: function () {
		for (let i = 0; i < 2; i++) {
			let a = prompt("Яке останнє кіно дивилися?", "Не більш 50 знаків").trim(),
				b = +prompt("Як оціните від 0 до 10?", "Тілько цифрами");

			if (
				a != null &&
				b != null &&
				a != "" &&
				b != "" &&
				a.length <= 50 &&
				b <= 10
			) {
				personalMovieDB.movies[a] = b;
			} else {
				i--;
			}
		}
	},
	detectPersonalLevel: function () {
		if (
			personalMovieDB.count === "" ||
			personalMovieDB.count === null ||
			personalMovieDB.count === 0
		) {
			console.log("Треба ввести кількість фильмів!");
		} else if (personalMovieDB.count <= 10) {
			console.log("Замало дивися фильмів! Усього:", personalMovieDB.count);
		} else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
			console.log("Взагалі не пагано:", personalMovieDB.count);
		} else if (personalMovieDB.count > 30) {
			console.log("Та Ви знаток фильмів:", personalMovieDB.count, "шт.");
		}
	},
	toggleVisibleMyDB: function () {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
		personalMovieDB.showMyDB(personalMovieDB.privat);
	},
	showMyDB: function (hidden) {
		if (!hidden) {
			console.log("Рекомендовано для перегляду", personalMovieDB);
		} else {
			console.log("Заблоковано автором, йдіть у дупу!!!");
		}
	},
	writeYourGenres: function () {
		// for (let i = 0; i < 3; i++) {
		// 	let genre = prompt(`Ваш юлюблений жанр № ${i + 1}`, "");
		// 	if (genre == "" || genre == null) {
		// 		console.log("Чому пуста строка - треба щось написати");
		// 		i--;
		// 	} else {
		// 		personalMovieDB.genres[i] = genre;
		// 	}
		// }

		// ! вариант 2 - запорос один раз
		for (let i = 0; i < 1; i++) {
			let genres = prompt(
				`Ваш юлюблений жанр, додавати через зап'яту`,
				""
			).toLowerCase();
			if (genres == "" || genres == null) {
				console.log("Чому пуста строка - треба щось написати");
				i--;
			} else {
				personalMovieDB.genres = genres.split(", ");
				personalMovieDB.genres.sort();
			}
		}

		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Улюблений  жанр  ${i + 1} це ${item} `);
		});
		// console.log("Жанри користувача", personalMovieDB.genres);
	},
};

personalMovieDB.start();

console.log("Всі данні:", personalMovieDB);
