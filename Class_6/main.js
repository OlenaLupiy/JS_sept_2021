// Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// // Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// // let n1 = 'Harry Potter'
// // let n2 = 'Ron Whisley'
// // let n3 = 'Hermione Granger'
// //
// let changeName = (namePerson, symbol)=>{
//     let word = '';
//     if (namePerson.includes(symbol)){
//        let str= namePerson.split(symbol)
//         for (const item of str) {
//             if (item !==''){
//                 word+=item +' ';
//             }
//     }
//     }
//     return word
// }
// console.log(changeName( 'Harry..Potter', '..'));
// console.log(changeName('Ron---Whisley', '---'));
// console.log(changeName('Hermione__Granger', '__'));


//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let randomArr = (arr =[])=>{
//     for (let i = 0; i < 20; i++) {
//         arr.push(Math.round(Math.random()*100))
//     }
//     return arr;
// }
// console.log(randomArr([]));
// let randomNumbers = (arr, length, limit) =>{
//
//     for (let i = 0; i < length; i++) {
//         arr.push(Math.round(Math.random()*limit))
//     }
//     return arr
// }
// console.log(randomNumbers( [], 10, 100));
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// let arrRandom = randomArr([]);
// // console.log(arrRandom);
// arrRandom.sort((a, b)=> a-b)
//  console.log(arrRandom)
// let arrSort = randomArr([]).sort((a, b)=>a-b)
// console.log(arrSort)
//
// let arrSortDown = randomArr([]).sort((a, b)=>b-a)
// console.log(arrSortDown)


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// let evenNumber = randomArr([]).filter((value)=>{
//     return value % 2 === 0
// })
// console.log(evenNumber);
// let oddNumbers = randomArr([]).filter(value => {
//     return value % 2 !==0;
// })
// console.log(oddNumbers)
// let sortEvenNumbers = randomArr([]).filter(value => {
//     return value % 2 === 0;
// }).sort(((a, b) => {
//     return a-b;
// }))
// console.log(sortEvenNumbers);
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let changeToString = randomArr([]).map(value => {
//     return value + '';
// })
// console.log(changeToString);
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//    let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
// let nums = [11,21,3];
// let sortNums = (direction)=>{
//     if (direction === 'ascending'){
//         nums.sort((a, b)=>{
//             return a - b;
//         })
//
//     } else if (direction === 'descending'){
//         nums.sort((a, b)=>{
//             return b-a;
//         })
//     }
//     return nums;
//     }
// console.log(sortNums('ascending'));
//console.log(sortNums('descending'));
//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// coursesAndDurationArray.sort((a, b)=>b.monthDuration - a.monthDuration)
// console.log(coursesAndDurationArray)
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let newCourse = coursesAndDurationArray.filter(value => {
//     return value.monthDuration >5;
// })
// console.log(newCourse)
// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
// let cutString =(str, n) => {
// const arr = [];
//     for (let i = 0; i < str.length; i+=n) {
//         arr.push(str.substr(i, n));
//     }
//     return arr;
//
// }
// console.log(cutString('бібліотека', 3))
//
