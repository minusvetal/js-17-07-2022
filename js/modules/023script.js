/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/
let numberOfFilms;

function start() {
	numberOfFilms = +prompt(
		"Яку кількість фильмів подивились?!",
		"Тут тілько цифри"
	).trim();

	while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt(
			"Яку кількість фильмів подивились?!",
			"Треба щось ввести!!!"
		).trim();
	}
}
// start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

function rememberMyFilms() {
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
}
rememberMyFilms();

function detectPersonalLevel() {
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
}
// detectPersonalLevel();

function showMyDB(hidden) {
	if (!hidden) {
		console.log("Рекомендовано для перегляду", personalMovieDB);
	} else {
		console.log("Заблоковано автором");
	}
}
// showMyDB(personalMovieDB.privat);

function writeYourGenres() {
	for (let i = 0; i < 3; i++) {
		let genre = prompt(`Ваш юлюблений жанр № ${i + 1}`, "").trim();
		if (genre != null && genre != "" && genre.length <= 50) {
			personalMovieDB.genres[i] = genre;
		} else {
			i--;
		}
	}
	console.log("Жанри користувача", personalMovieDB.genres);
}
// writeYourGenres();

console.log("Всі данні", personalMovieDB);
