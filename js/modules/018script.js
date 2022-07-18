/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

"use strict";

// Код возьмите из предыдущего домашнего задания

const numberOfFilms = +prompt(
	"Яку кількість фільмів подивились?!",
	"Тут тілько цифри"
);

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

for (let i = 0; i < 2; i++) {
	let a = prompt("Яке останнє кіно дивилися?", "Не більш 50 знаків"),
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

if (
	personalMovieDB.count === "" ||
	personalMovieDB.count === null ||
	personalMovieDB.count === 0
) {
	console.log("Треба ввести кількість фільмів!");
} else if (personalMovieDB.count <= 10) {
	console.log("Замало дивися фільмів! Усього:, personalMovieDB.count");
} else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
	console.log("Взагалі не пагано:, personalMovieDB.count");
} else if (personalMovieDB.count > 30) {
	console.log("Та Ви знаток фільмів:, personalMovieDB.count 'шт.'");
}
console.log("Все что ввел из файл 018", personalMovieDB);
