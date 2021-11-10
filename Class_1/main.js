// . Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
// const num1 = Math.floor(Math.random() * 11);
// console.log(num1);
//
// const arrRandom = [Math.floor(Math.random() * 11),
//     Math.floor(Math.random() * 11),
//     Math.floor(Math.random() * 11),
//     Math.floor(Math.random() * 11),
//     Math.floor(Math.random() * 11),
//     Math.floor(Math.random() * 11),
//     Math.floor(Math.random() * 11),
//     Math.floor(Math.random()*11),
//     Math.floor(Math.random()*11),
//     Math.floor(Math.random()*11)
// ]
// console.log(arrRandom);
// let result = 0;
// for (let i=0; i<arrRandom.length; i++){
//      result+= arrRandom[i];
// }
// console.log(result);

// const array = [1, 2, 3, 4, -9, -99, -101, 0, 69, 777];
// let rez = 0;
// for (const number of array) {
//     rez+= number
// }
// console.log(array);
// console.log(rez);

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
const book = {
    name: 'Martyn Iden',
    pages: 459,
    style: 'fiction'
};


// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори

let bookAuthor = {
    name: 'Martyn Iden',
    pages: 459,
    style: 'fiction',
    author: 'Jack london'
}
// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
// const arrBooks = [
//     {
//         name: 'Martyn Iden',
//         pages: 379,
//         style: 'fiction',
//         author: 'Jack london'
//     },
//     {
//         name: 'Black Obelisk',
//         pages: 268,
//         style: 'fiction',
//         author: 'Erich Maria Remark'
//     },
//     {
//         name: 'The fordyte Saga',
//         pages: 978,
//         style: 'novel',
//         author: 'John Galsworthy'
//     },
//
// ]
// console.log(arrBooks[0]);
// console.log(arrBooks[1]);
// console.log(arrBooks[2]);

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
// const height = 23;
// const  width = 10;
// let s = 1/2 * height * width;
// console.log(s);
// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
const heightC = 10;
 const dC = 4;
 const  v = Math.PI * ((dC/2)**2) * heightC;
console.log(v);

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
const n = 3;
const  m = 4;
// const  k = (Math.pow(n, 2) + (m ** 2))**0.5;
const k = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));
console.log(k);