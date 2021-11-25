// - Знайти та вивести довижину настипних стрінгових значень
//'hello world', 'lorem ipsum', 'javascript is cool'
// const str = 'hello world';
// console.log(str.length);
// const str2 = 'lorem ipsum';
// console.log(str2.length);
// const str3 = 'javascript is cool';
// console.log(str3.length)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// console.log(str.toUpperCase());
// const strNew = str2.toUpperCase();
// console.log(strNew);
// console.log(str3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// console.log(str.toLowerCase());
// console.log(strNew.toLowerCase());
// console.log(str3.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.length);
// let strNew = str.trim();
// console.log(strNew.length)
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
// function stringToArray(str) {
//    let arr = str.split(' ');
//   console.log(arr);
//   document.writeln(arr);
// }
// stringToArray('Кожний мисливець бажає знати');

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
// function delete_characters(str, length) {
//     let arr = str.split(' ');
//     let word = '';
//     for (const arrElement of arr) {
//         if (arrElement.length === length){
//             console.log( arrElement);
//             word = arrElement;
//         } else {
//             return 0;
//         }
//
//     }return word;
//
// }
//
// console.log(delete_characters('Кожний мисливець бажає знати', 8));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//let str = 'HTML JavaScript PHP';
// let insert_dash = (str)=> str.replaceAll(' ', '-').toUpperCase();
//
// document.writeln(insert_dash('HTML JavaScript PHP'));
// document.writeln(insert_dash('We are the champions'));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let changeRegister = (str)=> str.replace(str[0], str[0].toUpperCase());
// console.log(changeRegister('i will win'));
// let changeRegister = (str) => str.replace(str.charAt(0), str.charAt(0).toUpperCase())
//  console.log(changeRegister('life is good'))
//
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// function capitalize(str) {
//    let arr = str.split(' ');
//    let newArr = [];
//     for (const arrElement of arr) {
//         newArr.push(arrElement[0].toUpperCase() + arrElement.slice(1))
//     }
//     return newArr.join(' ')
// }
//
// console.log(capitalize('life is good'))

