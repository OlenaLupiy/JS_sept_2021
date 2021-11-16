// створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//
// const arrNumbers = [1, 0, -1, 100,888];
// const arrStrings = ['honey', 'money', 'up', 'down', 'zero'];
// const arrMix = [777, 13, true, 'true', false];
// console.log(arrNumbers);
// console.log(arrStrings);
// console.log(arrMix);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
// const array = [];
// array[0] = 1;
// array[1] = true;
// array[2] = 'octen';
// array[4] = 7;
// console.log(array);


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// document.write('<div>')
// for (let i = 0; i < 10; i++) {
//     document.write(`<div> peace
//         </div>`)
// }
// document.write('</div>')

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// document.write('<div>')
// for (let i = 0; i < 10; i++) {
//     document.write(`<div> item + ${i}</div>`)
// }
// document.write('</div>')


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// document.write('<div>')
// let i = 0;
// while (i < 20){
//     document.write(`<h1>happiness</h1>`);
//     i++;
// }
// document.write('</div>')


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
// document.write('<div>');
// let i = 0;
// while (i < 20){
//     document.write(`<h1>case ${i}</h1>`);
//     i++;
// }
// document.write('</div>');


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// const arrNumbers = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
// for (let i = 0; i < arrNumbers.length; i++) {
//     console.log(arrNumbers[i]);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// const arrStrings = ['Ukraine', 'USA', 'Great Britain', 'France', 'Germane', 'Poland', 'Italy', 'Sweden', 'Spain', 'Austria'];
// for (let i = 0; i < arrStrings.length; i++) {
//     console.log(arrStrings[i]);
// }


// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// const arrMix = [1, 2, 3, false, true, 'Great Britain', 'France', 'Germane', 'Poland', 888];
// let i = 0;
// while (i < arrMix.length){
//     console.log(arrMix[i]);
//     i++;
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// const arrMix = [1, false, 3, false, true, 'Great Britain', true, 'Germane', 'Poland', 888];
// for (let i = 0; i < arrMix.length; i++) {
//     if (typeof arrMix[i]==='boolean'){
//         console.log(arrMix[i]);
//     }
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// const arrMix = [1, 2, 3, false, true, 'Great Britain', 'France', 'Germane', 'Poland', 888];
// for (let i = 0; i < arrMix.length; i++) {
//     if (typeof arrMix[i]==='number'){
//         console.log(arrMix[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// const arrMix = [1, 2, 3, false, true, 'Great Britain', 'France', 'Germane', 'Poland', 888];
// for (let i = 0; i < arrMix.length; i++) {
//     if (typeof arrMix[i] === 'string'){
//         console.log(arrMix[i]);
//     }
// }
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// const arr = [];
// arr[0] = 7;
// arr[1] = '17';
// arr[2] = 71;
// arr[3] = '72';
// arr[4] = 27;
// arr[5] = true;
// arr[6] = null;
// arr[7] = undefined;
// arr[8] = 74;
// arr[9] = '77';
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// document.write('<div')
// for (let i = 0; i < 10; i++) {
//
//     document.write(`<h2>${i}</h2>`);
//     console.log(i);
// }
// document.write('</div')
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// document.write('<div>')
// for (let i = 0; i < 100; i++) {
//     document.write(`<h3> ${i}</h3>`);
//     console.log(i);
// }
// document.write('</div>')
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// document.write('<div>')
// for (let i = 0; i < 100; i+=2) {
//     document.write(`<div> ${i}</div>`);
//     console.log(i);
// }
// document.write('</div>')
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// document.write('<div>')
// for (let i = 0; i < 100; i++) {
//     if( i % 2 === 0){
//         document.write(`<h4>${i}</h4>`);
//         console.log(i);
//     }
// }
// document.write('</div>')
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// document.write('<div>');
// for (let i = 0; i < 100; i++) {
//     if (i % 2 !==0 ){
//         document.write(`<p>${i}</p>`);
//         console.log(i);
//     }
// }
// document.write('</div>')