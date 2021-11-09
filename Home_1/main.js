// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
let hello = 'hello';
let owu = 'owu';
let mail = 'com';
let a = 'ua';
let num = 1;
let number = 10;
let num2 = -999;
let num3 = 123;
const pi = 3.14;
let num4 = 2.7;
let b = 16;
let tr = true;
let falsy = false;

// //     Вивести кожну змінну за допомогою: console.log , alert, document.write

// console.log(hello, owu, mail, a, num, num2,  num3)
// console.log(pi);
// console.log(num4);
// console.log(b);
// console.log(tr);
// console.log(falsy);
//
// alert(hello);
// alert(owu);
// alert(mail);
// alert(a);
// alert(num);
// alert(num2);
// alert(num3);
// alert(pi);
// alert(number);
// alert(num4);
// alert(b);
// alert(tr);
// alert(falsy);
//
// document.write(hello + '<br/>');
// document.write(owu + '<br/>');
// document.write(mail + '<br/>' );
// document.write(a + '<br/>');
// document.write(num + '<br/>');
// document.write(number + '<br/>');
// document.write(`${num2} - ${num3}`);
// document.write(`${pi} </br> ${num4}</br>`);
// document.write(`${tr} </br`)
//


// - Переприсвоїти кожній змінній з завдання значення на довільне.
//  hello = 'world';
//  owu = 'cool';
//  mail = 'gmail';
//  a = 'uk';
//  num = -1;
//  number = 100;
//  num2 = -99;
//  num3 = 321;
//
//  num4 = 6.66;
//  b = 25;
//  tr = false;
//  falsy = 'false';

//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// console.log(hello, owu, mail, a, num, num2,  num3);
// console.log(pi);
// console.log(num4);
// console.log(b);
// console.log(tr);
// console.log(falsy);
//
// alert(hello);
// alert(owu);
// alert(mail);
// alert(a);
// alert(num);
// alert(num2);
// alert(num3);
// alert(pi);
// alert(number);
// alert(num4);
// alert(b);
// alert(tr);
// alert(falsy);

// document.write(hello + '<br/>');
// document.write(owu + '<br/>');
// document.write(mail + '<br/>' );
// document.write(a + '<br/>');
// document.write(num + '<br/>');
// document.write(number + '<br/>');
// document.write(`${num2} - ${num3}`);
// document.write(`${pi} </br> ${num4}</br>`);
// document.write(`${tr} </br`)


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
// const firstName = 'Olena';
// const middleName = 'Vasylivna';
// const lastName = 'Lupiy';
// let person = firstName + ' ' + middleName + ' ' + lastName;
// console.log(person);
// person = `${firstName} ${middleName} ${lastName}`;
// console.log(person);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

// const firstName = prompt('Enter your first name', '');
// const middleName = prompt('Enter you middle name');
// const age = prompt('Enter your age');
// console.log(`Congratulate ${firstName} ${middleName}. Your age is ${age}`)


// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

// let a =100; let b ='100'; let c = true;
// console.log(typeof a, typeof b, typeof c);
// console.log(typeof b);
// console.log(typeof c);


// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
//     5 ? 6 -> true
// console.log(5<6);
// // 5 ? 6 -> false
// console.log(5>6);
// // 5 ? 6 -> false
// console.log(5===6);
// // 5 ? 6 -> false
// console.log(5>=6);
// // 10 ? 10 -> true
// console.log(10===10);
// // 10 ? 10 -> true
// console.log(10<=10);
// // 10 ? 10 -> false
// console.log(10>10);
// // 10 ? 10 -> false
// console.log(10!==10);
// // 10 ? 10 -> false
// console.log(10<10);
// // 123 ? '123' -> false
// console.log(123 === '123')
// // 123 ? '123' -> true
// console.log(123 == '123');
//
// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");
// // 205
// document.write(str - a + "<br/>");
// //15
// document.write(str * "2" + "<br/>");
// //40
// document.write(str / 2 + "<br/>");
// //10