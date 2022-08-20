"use strict";
const box = document.getElementById("box"),
	btns = document.getElementsByTagName("button"),
	circles = document.getElementsByClassName("circle"),
	wrapper = document.querySelector(".wrapper"),
	hearts = wrapper.querySelectorAll(".heart"),
	oneHeart = wrapper.querySelector(".heart");

// box.style.backgroundColor = "green";
// box.style.width = "500px";

let num = 200;

box.style.cssText = `background-color: tomato; width: ${num}px `;

btns[1].style.borderTopLeftRadius = "100%";
btns[1].style.borderTopRightRadius = "100%";
circles[0].style.backgroundColor = "orange";

// for (let i = 0; i < hearts.length; i++) {
// 	hearts[i].style.backgroundColor = "orange";
// }

hearts.forEach((item) => {
	item.style.backgroundColor = "green";
});

const div = document.createElement("div");
div.classList.add("black"); // добавить class
// const text = document.createTextNode("Ura!!!"); добавить текст - редко

wrapper.append(div); // вставить в начало
// wrapper.appendChild(div); //! старый стандарт
// wrapper.prepend(div); вставить в конце

// hearts[0].before(div); вставить перед
// hearts[1].after(div); вставит после
// wrapper.insertBefore(div, hearts[1]); //! старый стандарт - 1) что вставляем; 2) Куда вставляем на странице

// circles[2].remove(); удалить
// wrapper.removeChild(hearts[1]); //! старый стандарт

// hearts[0].replaceWith(circles[0]); заменить лемент на..
// wrapper.replaceChild(circles[0], hearts[0]); //! старый стандарт - 1) что заменить; 2) На что менять

// ВСТАВКА в HTML
div.innerHTML = "<h1>Hello</h1>"; // можно вставить что угодно
div.insertAdjacentHTML("beforeend", "<h2>H2-Hello</h2>"); //! вставить верстку 1) Куда вставлять 2) Что вставлять в виде строки
/* 
beforebegin - перед элементом
afterbegin -  перед началом элемента
---------
beforeend -   перед концом элемента
afterend -    после элемента
*/

// div.textContent = "Hello!!"; // работает только с текстом
