// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
//
// let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
// if(friends.length >= 3){
//     console.log('It is a big array')
// } else {
//     console.log('It is a small array')
// }
//
// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.
//
// const num1 = 19;
// const num2 = 9;
// const num3 = 18;
// if ((num1 > num2 && num1 < num3) || (num1 < num2 && num1 > num3)){
//     console.log(num1 + ' is a middle');
// } else if ((num2 < num1 && num2 > num3) || (num2 > num1 && num2 < num3)){
//     console.log(num2 + ' is a middle')
// } else if ((num3 > num1 && num3 < num2) || (num3 < num1 && num3 > num2)){
//     console.log(num3 + ' is a middle')
// }
// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }
// let a = 2;
// let b = 1;
// let result;
// (a+b < 4) ? console.log(result ='Small') : console.log('Many')
//
// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором
let number = -1;
number === 0 ? console.log(0) : number > 0 ? console.log('+') : console.log('-');
