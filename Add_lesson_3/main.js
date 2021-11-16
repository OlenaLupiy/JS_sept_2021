// Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
// const array = [];
// let x = 0;
// for (let i = 0; i < 50; i++) {
//     array[i] = x;
//     x+= 2;
// }
//console.log(array)

//     b. заповнити його 50 непарними числами за допомоги циклу.
// const array = [];
// let x = 1;
// for (let i = 0; i < 50; i++) {
//     array[i] = x;
//     x+= 2;
// }
// console.log(array)

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// const array = [];
// for (let i = 0; i < 20; i++) {
//     array[i] = (Math.floor(Math.random()*10));
// }
// console.log(array)

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// const array = [];
// for (let i = 0; i < 20; i++) {
//     let randomNumber = Math.floor(Math.random()*800);
//     if (randomNumber > 7 && randomNumber < 733){
//         array[i] = randomNumber;
//     }
// }
// console.log(array)

//2. Вивести за допомогою console.log кожен третій елемен

// const arr = [];
// for (let i = 0; i < 20; i+= 3) {
//     let randomNumber = Math.floor(Math.random()*800);
//     if (randomNumber > 7 && randomNumber < 733){
//         arr[i] = randomNumber;
//     }
//     console.log(arr[i]);
// }




//3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// const arr = [1, 3, 8, 7, 77, 897, 48, 444, 89, 69, 58, 55, 75, 14, 49, 85, 12, 13,12, 22];
// for (let i = 0; i < arr.length; i+=3) {
//     if (arr[i] % 2 === 0){
//         console.log(arr[i]);
//     }
// }



// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

// const arr = [1, 3, 8, 7, 77, 897, 48, 444, 89, 69, 58, 55, 75, 14, 49, 85, 12, 13,12, 22];
// const arrNew = [];
// for (let i = 0; i < arr.length; i+=3) {
//     if (arr[i] % 2 === 0){
//         //console.log(arr[i]);
//         arrNew[i] = arr[i];
//         console.log(arrNew[i]);
//     }
//
// }


// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// const arr = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0){
//         console.log(arr[i-1])
//     }
//     }

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// const arr = [100,250,50,168,120,345,188];
// let sum = 0;
// for (const number1 of arr) {
//     sum+= number1
// };
//     let check = sum/arr.length;
//     console.log(check);


//
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// const arr = [2, 48, 63, 98, 1, 14];
// const arrNew = []
// for (let i = 0; i < arr.length; i++) {
//     arrNew[i] = arr[i] *5;
// }
// console.log(arrNew);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
//
// const arr = [1, 25, true, 'ok', 23, false, 25, 'cola', -9];
// const arrNew = [];
// for (let i = 0; i < arr.length; i++) {
//     if(typeof arr[i] === 'number'){
//         arrNew[i] = arr[i];
//     }
// }
// console.log(arrNew)
// //
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
//  ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]

// for (const user of usersWithId) {
//     for (const city of citiesWithId) {
//         if (user.id === city.user_id){
//             user.address = city;
//         }
//     }
// }
// console.log(usersWithId);

//
//
//
//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// const arr = [1, 23, 4, 8, 9, 15, 14, 9, 22, 16, 8, 7];
// for (const number of arr) {
//     if (number % 2 === 0){
//         console.log(number);
//     }
// }
//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
// const arr = [1, 23, 4, 8, 9, 15, 14, 9, 22, 16, 8, 7];
//  const newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     newArr[i] = arr[i];
// }
// console.log(newArr)


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// const arr = [ 'a', 'b', 'c'];
// let word = '';
// for (let i = 0; i < arr.length; i++) {
//     word+= arr[i];
// }
// console.log(word)
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// const  arr = [ 'a', 'b', 'c', 'd'];
// let word = '';
// let i = 0;
// while (i < arr.length){
//     word+= arr[i];
//     i++;
// }
// console.log(word)
// - Дано масив: [ 'a', 'b', 'c', 'd', 'e'] . За допомогою циклу for of зібрати всі букви в слово.

// const  arr = [ 'a', 'b', 'c', 'd', 'e'];
// let word = '';
// for (const wordElement of arr) {
//     word+= wordElement;
// }
// console.log(word);
