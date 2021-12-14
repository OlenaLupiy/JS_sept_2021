// Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
//
// const divItem = document.getElementById('new');
// divItem.addEventListener('mousedown', function () {
//     console.log(this.classList);
//     console.log(this.id);
//     console.log(this.clientHeight +'*' + this.clientWidth);
//     console.log(this.tagName);
//
// })
// for (const child of document.body.children) {
//     child.addEventListener('mousedown', function (e) {
//         console.log(this.classList);
//         console.log(this.id);
//         console.log(this.tagName);
//         console.log(this.clientWidth + '*' + this.clientWidth);
//         console.log(e.clientX);
//         console.log(e.currentTarget);
//
//     })
// }


// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
let popBtn = document.getElementById('popBtn');
popBtn.onclick = function () {
    document.getElementsByClassName('popUp')[0].classList.toggle('show_popup');
    document.getElementsByClassName('popUp')[0].innerText+= `${this.tagName} ${this.classList} ${this.id} ${this.clientWidth}*${this.clientHeight}`

}
// -- взять массив пользователей
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
// const checkStatus = document.createElement('input');
// checkStatus.setAttribute('name', 'status');
// checkStatus.setAttribute('type', 'checkbox');
// document.body.appendChild(checkStatus);
// const checkAge = document.createElement('input');
// checkAge.setAttribute('type', 'checkbox');
// document.body.appendChild(checkAge);
// const checkCity = document.createElement('input');
// checkCity.setAttribute('type', 'checkbox');
// document.body.appendChild(checkCity);
//
// checkStatus.onclick = function (){
//     if (this.checked){
//         console.log(usersWithAddress.filter(value => !value.status));
//     }
// }
// checkAge.addEventListener('click', function () {
//     if (this.checked){
//         let filters = usersWithAddress.filter(value => value.age > 29);
//         for (const filter of filters) {
//             for (const filterKey in filter) {
//                 if (typeof filter[filterKey] === 'object'){
//                     for (const filterKeyKey in filter[filterKey]) {
//                         const divElement = document.createElement('div');
//                         divElement.innerText = filter[filterKey][filterKeyKey];
//                         document.body.appendChild(divElement);
//                     }
//                 } else {
//                     const divEl = document.createElement('div');
//                     divEl.innerText = filter[filterKey];
//                     document.body.appendChild(divEl)
//                 }
//             }
//
//         }
//
//     }
// })
// checkCity.addEventListener('click', function () {
//     if (this.checked){
//         let filtersCity = usersWithAddress.filter(value => value.address.city === 'Kyiv');
//         for (const filterCity of filtersCity) {
//             for (const key in filterCity) {
//                 if (typeof filterCity[key] === 'object'){
//                     const divCity = document.createElement('div');
//                     for (const CityKey in filterCity[key]) {
//                         divCity.innerText+= `${ CityKey}: ${ filterCity[key][CityKey]}` ;
//                         document.body.appendChild(divCity)
//                     }
//                 } else {
//                     const divEl = document.createElement('div');
//                     divEl.innerText+= filterCity[key];
//                     document.body.appendChild(divEl)
//                 }
//
//
//             }
//         }
//
//     }
// })
//
//
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
function chalenge(startElement) {
    btnForward = document.createElement('button');
    btnForward.innerText = 'Forward';
    btnBack.innerText = 'Back';
    btnForward.style.m
    btnBack = document.createElement('button');
    document.body.append(btnForward, btnBack);
    btnForward.onclick = function () {
        for (const element of startElement) {
console.log(element)
        }
    }

}
chalenge(document.body.childNodes)


// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
// let offset = 0;
// const sliderLine = document.querySelector('.slider_line');
// document.getElementsByClassName('slider_next')[0].addEventListener('click', function () {
//     offset+= 250;
//     if(offset > 750){
//         offset = 0;
//     }
//     sliderLine.style.left = -offset + 'px'
// })
// document.getElementsByClassName('slider_prev')[0].addEventListener('click', function () {
//     offset-= 250;
//     if(offset < 0){
//         offset = 750;
//     }
//     sliderLine.style.left = -offset + 'px'
// })
//
//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
// const div = document.getElementsByTagName('div')[0];
// div.addEventListener('click', function () {
//     let str = getSelection().toString().toUpperCase();
//     div.innerText = str;
//
// })


