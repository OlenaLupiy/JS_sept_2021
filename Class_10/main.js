// створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// const elementBtn = document.getElementById('btn');
//  let f1 = document.forms.f1;
//  let f2 = document.forms.f2;
// elementBtn.onclick = function () {
//     console.log(f1.user.value);
//     console.log(f1.number.value);
//     console.log(f2.place.value);
//     console.log(f2.street.value);
// }
// let divContainer1 = document.createElement('div');
// divContainer1.innerText = 'Container 1';
// divContainer1.style.margin = '10px';
// document.body.appendChild(divContainer1);
//
// let divContainer2 = document.createElement('div');
// divContainer2.innerText = 'Container 2';
// divContainer2.style.margin = '10px';
// document.body.appendChild(divContainer2);
//
// let form1 = document.createElement('form');
// form1.setAttribute('name', 'formOne');
// divContainer1.appendChild(form1);
//
// let form2 = document.createElement('form');
// form2.setAttribute('name', 'formTwo');
// divContainer2.appendChild(form2);
//
//
// let  input1 = document.createElement('input');
// input1.setAttribute('name', 'inputOne');
// let input2 = document.createElement('input');
// input2.setAttribute('name', 'inputTwo');
// let input3 = document.createElement('input');
// input3.setAttribute('name', 'inputThree');
// let input4 = document.createElement('input');
// input4.setAttribute('name', 'inputFour');
//
// form1.append(input1, input2);
// form2.append(input3, input4);
//
// const  btn = document.createElement('button');
// btn.innerText = 'Enter';
// document.body.append(btn);
// //
// //
// btn.addEventListener('click', function () {
//     console.log(document.forms.formOne.inputOne.value);
//     console.log(document.forms.formOne.inputTwo.value);
//     console.log(document.forms.formTwo.inputThree.value);
//     console.log(document.forms.formTwo.inputFour.value);
// })
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// const inputOne = document.createElement('input');
// const inputTwo = document.createElement('input');
// const inputThree = document.createElement('input');
//
// const btn = document.createElement('button');
// btn.innerText = 'Create table';
//
// document.body.append(inputOne, inputTwo, inputThree, btn);
//
// btn.addEventListener('click', function () {
//     let tr = +inputOne.value;
//     let td = +inputTwo.value;
//     let enterText = inputThree.value;
//
//     function generationTable(tr, td, inner) {
//         let table = document.createElement('table');
//         let divTable = document.createElement('div');
//
//         table.style.border = '1px solid red';
//         divTable.appendChild(table);
//         document.body.appendChild(divTable);
//         for (let i = 0; i < tr; i++) {
//             let  tr = document.createElement('tr');
//             tr.style.border = '1px solid yellow';
//             for (let j = 0; j < td; j++) {
//                 let td = document.createElement('td');
//                 td.style.border = '1px solid blue';
//                 td.innerText = `${inner}`;
//                 table.appendChild(tr);
//                 tr.appendChild(td);
//             }
//         }
//     }
//     generationTable(tr, td, enterText)
// })

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
const badWords = ['fuck', 'бляха-муха', 'блін', 'пся крев', 'curva'];
const inputEl = document.createElement('input');
const btnCheck = document.createElement('button');
btnCheck.innerText = 'Check';
document.body.append(inputEl, btnCheck)
//
// btnCheck.addEventListener('click', function () {
//     let inputWord = inputEl.value;
//     for (const word of badWords) {
//         if (inputWord === word) {
//             alert('Be careful');
//             inputEl.value = '';
//             return;
//         }
//     }
//     if (inputWord) {
//         alert('Ok');
//         inputEl.value;
//     }
//})


//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
// const badWords = ['fuck', 'бляха-муха', 'блін', 'пся крев', 'curva'];


btnCheck.addEventListener('click', function () {
    let inputWord = inputEl.value;
    for (const word of badWords) {
        if (inputWord.includes(word)) {
            alert('Be careful');
            inputEl.value = '';

        }
    }
    if (inputWord) {
        alert('Ok');
        inputEl.value;
    }
})