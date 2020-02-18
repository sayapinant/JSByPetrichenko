"use strict";

// a = 5;
// console.log(a);

let arr = ["plan.png", "orange.jpg", "apple.bmp"];

// console.log("arr " + "- object");
// console.log(typeof(2 + +"objects"));
// let answer = +prompt("Есть ли Вам 18 лет?", "Да");
// console.log(typeof(answer));

let incr = 10,
    decr = 10;

incr++;
decr--;

console.log(++incr);
console.log(--decr);

console.log(incr++);
console.log(decr--);

console.log(5 % 2);

console.log("2" === 2);

let isChecked = false,
    isClose = true;

console.log(isChecked && isClose);
console.log(isChecked || !isClose);