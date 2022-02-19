'use strict'
//Задание 5
/**
 * 
 * @param {number} num1 
 * @param {num2} num2 
 * @returns {number} 
 */
 function sum (num1, num2) {
    return num1 + num2;
}
let result = sum (6, 7);

/**
 * 
 * @param {number} num3 
 * @param {number} num4 
 * @returns {number} 
 */
function dif (num3, num4) {
    return num3 - num4;
}
let result2 = dif (14, 4);

/**
 * 
 * @param {number} num5 
 * @param {number} num6 
 * @returns {number}
 */
function div (num5, num6) {
    return num5 / num6;
}
let result3 = div (30, 6);

/**
 * 
 * @param {number} num7 
 * @param {number} num8 
 * @returns {number}
 */
function mul (num7, num8) {
    return num7 * num8;
}
let result4 = mul (7, 5);

/**
 * 
 * @param {number} arg1 
 * @param {number} arg2 
 * @param {string} operation название математической операции
 * @returns {number}
 */
function mathOperation (arg1, arg2, operation){
    switch (operation) {
        case "сложение":
            return sum (arg1, arg2);
        case "вычитание":
            return dif (arg1, arg2);
        case "деление":
            return div (arg1, arg2);
        case "умножение":
            return mul (arg1, arg2);
    }
}
console.log (mathOperation (100, 10, "сложение"));
console.log (mathOperation (100, 10, "вычитание"));
console.log (mathOperation (100, 10, "деление"));
console.log (mathOperation (100, 10, "умножение"));