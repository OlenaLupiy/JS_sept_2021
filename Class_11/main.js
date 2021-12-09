//є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
localStorage.setItem('key', JSON.stringify([]))
const divContainer = document.createElement('div');
for (const user of users) {
    const userDiv = document.createElement('div');
    const userContent = document.createElement('div')
    userContent.innerText = `Name: ${user.name}\n${user.age}\n ${user.status}`;
    const btn = document.createElement('button')
    btn.innerText = 'Add to favourite';
    userDiv.append(userContent, btn);
    divContainer.appendChild(userDiv)


btn.onclick = function () {
    const arrFavourite = JSON.parse(localStorage.getItem('key'));
    arrFavourite.push(user);
    localStorage.setItem('key', JSON.stringify(arrFavourite));
    btn.disabled = true;
}}
document.body.appendChild(divContainer)

// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.