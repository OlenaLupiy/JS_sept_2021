// Всі функції повинні бути описані стрілочним типом, та selfinvoke!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою
// let sTriangle = (a, h) => 1/2 * a *h;
// console.log(sTriangle(2,5));
// (function (a, h) {
//     console.log( 1/2 * a *h);
// }(2, 5));

// - створити функцію яка обчислює та повертає площу кола
// let sRing = (r) => Math.PI * Math.pow(r, 2);
// console.log(sRing(4));
// (function (r) {
//     console.log(Math.PI * Math.pow(r, 2));
// }(3));

// - створити функцію яка обчислює та повертає площу циліндру
// let sCylinder = (r, h)=> 2 * Math.PI * r * (r+h);
// console.log(sCylinder(2, 6));
// (function (r, h) {
//     let square = 2 * Math.PI * r * (r+h);
//     console.log(square)
// }(2, 7))

// - створити функцію яка приймає масив та виводить кожен його елемент
// let arr = (arr)=>{
//     for (const element of arr) {
//         console.log(element)
//     }
// }
// arr([1, 3, 5, 7]);
// (function (arr) {
//     for (const arrElement of arr) {
//         console.log(arrElement)
//     }
// }([2, 4, 6, 8]))

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// let p = (text) =>{
//     document.write(`<p>${text}</p>`)
// }
// p('honey')
// (function (text) {
//     document.write(`<p>${text}</p>`)
// }('money'))

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let createLi = (text)=>{
//     document.write('<ul>')
//     for (let i = 0; i < 3; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write('</ul>')
// }
// createLi('butterfly')

// (function (text) {
//     document.write('<ul>')
//     for (let i = 0; i < 3; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write('</ul>')
// }('fly'))
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let createLi = (size, text) =>{
//     document.write('<ul>')
//     for (let i = 0; i < size; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write('</ul>')
// }
// createLi(3, 'boom')
// (function (size, text){
//     document.write('<ol>')
//     for (let i = 0; i < size; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write('</ol>')
// }(3, 'lol'))

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arrMix = (arr)=>{
//     document.write('<ul>')
//     for (const arrElement of arr) {
//         document.write(`<li>${arrElement}</li>`)
//     }
//     document.write('</ul>')
// }
// arrMix([1, 7, true, false, 'Peter'])
// (function (arr) {
//     document.write('<ol>')
//     for (const arrElement of arr) {
//         document.write(`<li>${arrElement}</li>`)
//     }
//     document.write('</ol>')
// }([9, 88, false, 'Ole', false]))
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// const users = [
//     {id:1, name: 'Mike', age: 40},
//     {id:2, name: 'Tom', age: 35},
//     {id:3, name: 'Peter', age: 30},
//     {id:4, name: 'Steve', age: 36}
// ]
// let userCreate = (obj) =>{
//     for (const objElement of obj) {
//         document.write(`<div>${objElement.id} - ${objElement.name} -- ${objElement.age}</div>`);
//     }
// }
// userCreate(users);
    (function (obj) {
        for (const objElement of obj) {
          document.write(`<div>${objElement.id} - ${objElement.name} - ${objElement.age}</div>`)
        }
    }([
        {id:1, name: 'Mike', age: 40},
        {id:2, name: 'Tom', age: 35},
        {id:3, name: 'Peter', age: 30},
        {id:4, name: 'Steve', age: 36}
    ]))