// Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// const divElement = document.createElement('div');
// divElement.classList.add('text');
// divElement.style.width = '200px';
// divElement.style.height = '200px';
// divElement.style.backgroundColor = 'silver';
// const buttonElement = document.createElement('button');
// document.body.append(divElement, buttonElement)
// buttonElement.onclick = function (){
//     divElement.style.display = 'none'
// }

// const element = document.getElementById('text');
// const buttonElement = document.getElementsByTagName('button')[0];
// buttonElement.onclick = function () {
//     element.style.display = 'none';
// }
// buttonElement.onclick = function () {
//     element.hidden = true;
// }
//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// const buttonElement = document.createElement('button');
// buttonElement.innerText = 'delete';
// document.body.appendChild(buttonElement);
// const buttonElementDelete = document.getElementsByTagName('button')[0];
// buttonElementDelete.onclick = function () {
//     buttonElement.style.display = 'none'
// }
//
// const btn = document.getElementById('btn');
// btn.onclick = ()=> {
//     btn.hidden = true;
// }
// btn.onclick = ()=>{
//     btn.style.display = 'none'
// }
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// const inputElement = document.createElement('input');
// const buttonElement = document.createElement('button');
// document.body.append(inputElement, buttonElement);
// buttonElement.onclick = function () {
//     let inputValue = +inputElement.value;
//    if(inputValue < 18){
//        console.log('You are too young')
//    } else console.log('Everything is ok');
// }
// const elementBtn = document.getElementById('button');
// const elementInput = document.getElementById('age');
// elementBtn.onclick = function () {
//     if (!elementInput.value) {
//         alert('You didnt enter age')
//     } else if (+elementInput.value < 18) {
//         alert('You are too young')
//     } else alert('Everything is OK')
// }
// - Создайте меню, которое раскрывается/сворачивается при клике
// const elementMenu = document.getElementsByClassName('menu')[0];
// const elementTitle = document.getElementsByClassName('title')[0];
// elementTitle.onclick = function () {
//     elementMenu.classList.toggle('hidden')
// }


//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания е

let comments = [
    {author: 'WS', body: 'To be or not to be'},
    {author:'L Ukrainka', body: 'Я буду крізь сльози сміятися'},
    {author: 'Shevchenko', body:'Кохайтеся, чорнобриві, та не з москалями.'}
]
// const divElement = document.createElement('div');
//
// for (const comment of comments) {
//     const itemDiv = document.createElement('div');
//    const h2Elem = document.createElement('h2');
//    const pElem = document.createElement('p');
//    const btn = document.createElement('button');
//    h2Elem.innerText = comment.author;
//    pElem.innerText = comment.body;
//    btn.innerText = 'Close me'
//
//    btn.onclick = function () {
// pElem.classList.add('hiddenElement');
//    }
//     itemDiv.append(h2Elem, pElem, btn);
//    divElement.appendChild(itemDiv)
// }
//
// document.body.appendChild(divElement);

