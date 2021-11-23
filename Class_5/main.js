// Всі функції повинні бути описані стрілочним типом, та selfinvoke!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let returnMin = (a, b, c)=>{
//     if(a < b && a < c) {
//         return a
//     } else if (b < c && b < a){
//         return b
//     } else return c
// }
// console.log(returnMin(22, 17, 9));
// (function (a, b, c) {
//     if(a < b && a < c) {
//         console.log(a)
//     } else if (b < c && b < a){
//         console.log(b)
//     } else console.log(c)
//
// }(2, -3, -7))
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let returnMax = (a, b,c) =>{
//     if (a > b && a > c){
//         return a
//     } else if (b > a && b > c){
//         return b
//     } else return c
// }
// console.log(returnMax(44, 180, 23));
// (function (a, b,c){
//     if (a > b && a > c){
//         console.log(a)
//     } else if (b > a && b > c){
//         console.log(b)
//     } else console.log(c)
//
// }(111, 500, 84))

// - створити функцію яка повертає найбільше число з масиву
// let returnMaxArr = (arr) => {
//     let max = arr[0];
//     for (const number of arr) {
//         if (number > arr[0]) {
//             max = number
//         }
//     }
//     return max
// }
// console.log(returnMaxArr([12, 4, 15, 89, -9, 8]));
// (function (arr) {
//     let max = arr[0];
//     for (const number of arr) {
//         if (number > max) {
//             max = number
//         }
//     }
//     console.log( max)
// }([2, 189, 30, 330]))

// - створити функцію яка повертає найменьше число з масиву
// const returnMinArr = (arr) => {
//     let min = arr[0];
//     for (const minElement of arr) {
//         if (minElement < min){
//             min = minElement
//         }
//     }
//     return min
// }
// console.log(returnMinArr([8, 89, 111, -2, 4, 56]));

// (function (arr) {
//     let min = arr [0];
//     for (const minElement of arr) {
//         if (minElement < min){
//             min = minElement
//         }
//     }
//     console.log(min)
// }([23, 0, -4,-2, 14]))
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let sumNumbers = (arr)=> {
//     let sum = 0;
//     for (const number of arr) {
//         sum+= number;
//     }
//     return sum;
// }
// console.log(sumNumbers([1, 2, 10]));

// (function (arr) {
//     let sum = 0;
//     for (const num of arr) {
//         sum+= num;
//     }
//     console.log(sum)
// }([1, 2, 12]))
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let returnAvrArr = (arr) =>{
//     let sum = 0;
//     for (const number of arr) {
//         sum+= number;
//     }
//     return sum/arr.length;
// }
// console.log(returnAvrArr([2, 4, 8, 6]))

// (function (arr){
//     let sum = 0;
//     for (const num of arr) {
//         sum+= num;
//     }
//     console.log(sum/arr.length)
// }([1, 3, 8]))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let returnMaxMin = (...rest) => {
//     let min = rest[0];
//     let max = rest[0];
//     for (const num of rest) {
//         if(num < min){
//             min = num;
//         } if (num > max){
//             max = num;
//         }
//     }
//     console.log(max);
//     return min;
// }
// console.log(returnMaxMin(1, 17, -4, 289, 56))
// (function () {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const num of arguments) {
//         if (num < min){
//             min = num;
//         }
//          if (num > max){
//             max = num;
//         }
//
//     }
//     console.log(max);
//     console.log(min)
// }(2, 9, 89, -111, -233, 0, 11))

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let randomNumber = (arr) => {
//     for (let i = 0; i < 10; i++) {
//         arr[i] = Math.round(Math.random()*100)
//     }
//     return arr
// }
// console.log(randomNumber([]))
// (function (arr) {
//     for (let i = 0; i < 10; i++) {
//         arr[i] = Math.round(Math.random()*100);
//     }
//     console.log(arr);
// }([]))
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let randomCreate = (size, limit)=>{
//     let arr = [];
//     for (let i = 0; i < size; i++) {
//         arr[i] = ( Math.round(Math.random()*limit));
//     }
//     return arr;
// }
// console.log(randomCreate(9, 20))
// (function (size, limit) {
//     const arr = [];
//     for (let i = 0; i < size; i++) {
//         arr.push(Math.round(Math.random()*limit))
//     }
//     console.log(arr);
// }(5, 100))
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let reverse = (arr) => {
//     const arrReverse = [];
//     for (let i = arr.length - 1, ri = 0; i >= 0; i--, ri++) {
//         arrReverse[ri] = arr[i]
//     }
//     return arrReverse
// }
// console.log(reverse([1, 2, 3]))
// let reverse = (arr) => {
//     return  arr.reverse();
//
// }
// console.log(reverse([1, 2, 3, 4, 5]))
// let reverse = (arr) =>{
//     const arrReverse = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//        arrReverse.push(arr[i]);
//     }
//     return arrReverse;
// }
// console.log(reverse([1, 3, 5, 7, 9]))
// (function (arr) {
//     const arrNew = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         arrNew.push(arr[i])
//     }
//     console.log(arrNew)
// }([0, 2, 4, 6, 8]))

//