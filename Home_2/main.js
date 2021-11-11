// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
//
// let time = 59;
// if (time >=0 && time < 15){
//     console.log('It is the first part');
// } else if (time >=15 && time < 30){
//     console.log('It is the second part')
// } else if (time >=30 && time < 45) {
//     console.log('It is the third part')
// } else {
//     console.log('It is the fourth part')
// }
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
// let day = 31;
// if (day > 0 && day <=10){
//     console.log('The first decade');
// } else if (day > 10 && day <= 20){
//     console.log('The second decade');
// } else if (day > 20 && day <=31){
//     console.log('The third decade')
// }
// - У нас є змінна test не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
//
// let test = false;
// if(test){
//     console.log('False')
// } else {
//     console.log('true')
// }
// if(!test){
//     console.log('True')
// } else {
//     console.log('False')
// }
// !test ? console.log('true') : console.log('false');
// test ? console.log('true') : console.log('false');


// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
// let a = -3;
// if (a!==0){
//     console.log('True')
// } else {
//     console.log('False')
// }
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
//
// let day = 4;
// switch (day){
//     case 1:
//         console.log('Study and work');
//         break;
//     case 2:
//         console.log('Study and walk');
//         break;
//     case 3:
//         console.log('Study and play');
//         break;
//     case 4:
//         console.log('Study and sign');
//         break;
//     case 5:
//         console.log('Study and read');
//         break;
//     case 6:
//         console.log('Rest and sleep');
//         break;
//     case 7:
//         console.log('Rest and eat');
//         break;
//     default:
//     break;
// }


// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
//  let year = 1956;
// if (year % 4 === 0){
//     console.log('Високосний рік')
// } else {
//     console.log('Ordinary year')
// }
//


// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
//Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScrip
// let officialName = prompt('Enter name');
// if (officialName === 'ECMAScript'){
//     alert('Correct!')
// }
// else {
//     alert("Don't know? ECMAScript!")
// }