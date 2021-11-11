// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
//
// let num1 = +prompt('Enter the first number');
// let num2 = +prompt('Enter the second number');
// if (num1 > num2){
//     console.log(`Max number is the first number and = ${num1}`);
// } else if (num1 < num2){
//     console.log(`Max number is the second number and = ${num2}`);
// } else {
//     console.log(` This number are equal; ${num1} = ${num2}`)}
// //
// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
//
//
// let numberFlat = +prompt('Enter your number');
// if (numberFlat >= 1 && numberFlat <=20){
//     console.log('This is 1');
// } else if (numberFlat >=21 && numberFlat <=48){
//     console.log('This is 2')
// } else  if (numberFlat >=49 && numberFlat <=90){
//     console.log('This is 3')
// } else {
//     console.log('It is absent')
// }
// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
//
// let number = +prompt('Enter number')
// number===10 ? console.log('True') : console.log('False');


// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else
//
// let x = [];
// if (typeof x === 'number'){
//     console.log('1');
// } else if (typeof x === 'string'){
//     console.log('2');
// } else if( typeof x === 'boolean'){
//     console.log('3')
// } else  if(typeof x === 'object'){
//     console.log('4');
// } else {
//     console.log('5')
// }

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
// let temp = 11;
// if (temp >=10 && temp <=22){
//     console.log('We go to study');
// } else {
//     console.log('We sit at home and study online')
// }
//
// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
// let numb = +prompt('Enter number');
// switch (numb) {
//     case 1:
//         console.log('Your prise is auto');
//         break;
//     case 2:
//         console.log('Your prise is moto');
//         break;
//     case 3:
//         console.log('Your prise is phone');
//         break;
//     case 4:
//         console.log('Your prise is book');
//         break;
//     case 5:
//         console.log('Your prise is money');
//         break;
//     default:
//         console.log('The number is incorrect');
//         break;
// }