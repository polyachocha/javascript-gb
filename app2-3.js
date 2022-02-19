'use strict'
//Задание 3
let a = -3;
let b = -9;
if (a>0 && b>0) {
    console.log (a - b);
} else if (a<0 && b<0) {
    console.log (a * b);
} else if ((a<0 && b>0) || (a>0 && b<0)) {
    console.log (a+b);
} else {
    alert ("Нужно указать 2 числа");
}
