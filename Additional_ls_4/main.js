// створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

// function strange() {
//     if(arguments.length === 1){
//         console.log(arguments[0]);
//     } else if (arguments.length === 2){
//         console.log(arguments[0]+arguments[1]);
//     }
// }
// strange(1);
// strange(2, 'p')
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
// let sum = function (arr1, arr2) {
//     const  arr = [];
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (i === j){
//                 arr[i] = arr1[i] + arr2[j];
//             }
//         }
//     }
//     return arr;
// }
// console.log(sum([1, 2, 3, 4], [2, 3, 4, 5]));
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// let keyObject = function (arr) {
//     const arrKey = [];
//     for (const arrElement of arr) {
//         for (const key in arrElement) {
//            arrKey.push(key)
//         }
//     }
//     return arrKey
// }
 //console.log(keyObject([{name: 'Dima', age: 13}, {model: 'Camry'}]))
// // Чи можна це завдання вирішити без push????



//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
//
// let valueObject = function (arr) {
//     const arrValue = [];
//     for (const arrElement of arr) {
//         for (const arrKey in arrElement) {
//             arrValue.push(arrElement[arrKey])
//         }
//     }
//     console.log(arrValue);
// }
// valueObject([{name: 'Dima', age: 13}, {model: 'Camry'}])
//
//     -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
// let foo = function (arr, i) {
//     if (i < arr.length){
//         let place = arr[i];
//         arr[i] = arr[i+1];
//         arr[i+1] = place;
//     }
//     return arr
// }
// console.log(foo([9, 8, 0, 4], 0));;
// console.log(foo([9, 8, 0, 4], 1));;
// console.log(foo([9, 8, 0, 4], 2));;
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
// function zeroEnd(arr=[]) {
//     let zero;
//     for (let i = arr.length - 1; i >= 0; i--) {
//         if (arr[i] === 0){
//             zero = arr.splice(i, 1);
//             arr.push(zero[0]);
//         }
//
//     }
//     console.log(arr)
// }
// zeroEnd([1,0,6,0,3]);
// zeroEnd([0,1,2,3,4]);
// zeroEnd([0,0,1,0])
// Це рішення Віті. Не моє(((
// function zeroMove(arr = []) {
//     const zeroArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 0){
//             arr.splice(i, 1);
//            zeroArr.push(0);
//            i--;
//         }
//     }
//     console.log(arr.concat(zeroArr))
// }
// zeroMove([1,0,6,0,3]);
// zeroMove([0,1,2,3,4]);
// zeroMove([0,0,1,0])