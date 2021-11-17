// створити функцію яка обчислює та повертає площу прямокутника висотою
// function squareTriangle(a, h) {
//     return 1/2 * a * h;
// }
//
// let res = squareTriangle(2, 8);
// console.log(res);

// - створити функцію яка обчислює та повертає площу кола
// function squareRing(r) {
//     return Math.PI * r ** 2;
// }
// let result = squareRing(6);
// console.log(result);


// - створити функцію яка обчислює та повертає площу циліндру
// function squareCylinder(r, h) {
//     return 2 * Math.PI * r * (r+h);
// }
// let res = squareCylinder(2, 8);
// console.log(res);


// - створити функцію яка приймає масив та виводить кожен його елемент

// function arr() {
//     for (const argument of arguments) {
//         console.log(argument);
//     }
// }
// arr([25, 16, 8, 9, 0, -1])


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function paragraph(text) {
//     document.write(`<p>
//     ${text}
//     </p>`)
// }
// paragraph('Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium, assumenda, consequuntur dolor doloribus')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function createText(text) {
//     document.write('<ul>')
//     for (let i = 0; i < 3; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write('</ul>')
// }
// createText('item');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function createText(text, size) {
//     document.write('<ul>')
//     for (let i = 0; i < size; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write('</ul>')
// }
// createText('life is cool', 3);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// const arr = [1, 0, true, 'home', 777, false, null]
// function createArr(){
//     document.write('<ul>')
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${arr[i]}</li>`)
//     }
//     document.write('</ul>')
// }
// createArr(arr)

// const arr = [1, 0, true, 'home', 777, false, null]
// function createArr2() {
//     document.write('<ul>')
//     for (const argument of arr) {
//         document.write(`<li>${argument}</li>`)
//     }
//     document.write('</ul>')
// }
// createArr2(arr)
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// const users = [
//     {id:1, name: 'Mike', age: 40},
//     {id:2, name: 'Tom', age: 35},
//     {id:3, name: 'Peter', age: 30},
//     {id:4, name: 'Steve', age: 36}
// ]
// function createUser() {
//     document.write('<div class="box">')
//     for (const user of users) {
//         document.write('<div>')
//         for (const key in user) {
//             document.write(` ${key} ${user[key]}`)
//         }
//             document.write('</div>')
//     }
//     document.write('</div>')
// }
// createUser(users);
