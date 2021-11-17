// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function returnMin(a, b, c) {
//     if(a < b && a < c){
//         return a
//     } else if (b < a && b < c){
//         return b
//     } else return c
// }
//  let min = returnMin(2, -9, 7);
// console.log(min)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function returnMax (a, b, c){
//     if(a> b && a > c){
//         return a;
//     } else if (b > a && b > c)
//         return b;
//     else return c
// }
// let max = returnMax(301, 89, 1000);
// console.log(max)

// - створити функцію яка повертає найбільше число з масиву

// function maxArr(arr) {
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max){
//             max = arr[i]
//         };
//     }
//     return max;
// }
// console.log(maxArr([1, 32, 189, -11, 0, 12, 85,366, 0, 5]))

// - створити функцію яка повертає найменьше число з масиву
// function minArr(arr) {
//     let min = arr[0];
//     for (const arrElement of arr) {
//         if (arrElement < min){
//             min = arrElement;
//         }
//     }
//     return min;
// }
//
// console.log(minArr([0, -2, 44, 89, 356, 12, 101]));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// function sumElements(arr) {
//     let sum = 0;
//     for (const arrElement of arr) {
//         sum+= arrElement
//     }
//     return sum;
// }
// console.log(sumElements([1, 2, 10]));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function avrSum(arr){
//     let sum = 0;
//     for (const arrElement of arr) {
//         sum+= arrElement;
//     }
//     return sum/arr.length
// }
//
// console.log(avrSum([2, 4, 8, 2, 20]))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function minMax() {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (let i = 0; i < arguments.length; i++) {
//         if(arguments[i] < min){
//             min = arguments[i];
//         } else if (arguments[i] > max){
//             max = arguments[i];
//         }
//     }
//     console.log(max);
//     return min;
// }
// console.log(minMax(1, 3, -9, 10001, 25, 181, -99))

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// function randomNumber(arr) {
//     for (let i = 0; i < 20; i++) {
//         arr[i] = Math.round(Math.random()*100);
//     }
//     console.log(arr)
// }
// randomNumber([])

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// function randomNumbers(arr, limit) {
//     for (let i = 0; i < limit; i++) {
//         arr[i] = Math.round(Math.random()*limit);
//     }
// console.log(arr);
// }
// randomNumbers([],15)


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// function reverse(arr) {
//     let arrNew = [];
//     return arrNew = arr.reverse()
// }
//
// console.log(reverse([1, 2, 3]))

// function reverse(arr) {
//     const  newArr = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         newArr.push(arr[i]);
//     }
//     return newArr;
// }
// console.log(reverse([1, 2, 3, 4]))