// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
// let divElement = document.createElement('div');
// divElement.classList.add('wrap', 'collapse', 'alpha', 'beta');
// document.body.appendChild(divElement);
// let cloneNode = divElement.cloneNode(true);
// document.body.appendChild(cloneNode);
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// let ulElement = document.getElementsByClassName('menu')[0];
// const arr = ['Main','Products','About us','Contacts'];
// for (const item of arr) {
//     let liElement = document.createElement('li');
//     liElement.innerText = item;
//     ulElement.appendChild(liElement);
// }
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// let divContainer = document.createElement('div');
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const item of coursesAndDurationArray) {
//     let divElement = document.createElement('div');
//     divElement.innerText = `Title -${item.title}, Month duration: ${item.monthDuration}`
//     divContainer.appendChild(divElement);
//     document.body.appendChild(divContainer);
// }
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
// let divContainer = document.createElement('div');
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const item of coursesAndDurationArray) {
//     let divElement = document.createElement('div');
//     divElement.classList.add('item');
//     let headingElement = document.createElement('h1');
//     headingElement.classList.add('heading');
//     headingElement.innerText = item.title;
//     let paragraphElement = document.createElement('p');
//     paragraphElement.classList.add('description');
//     paragraphElement.innerText = item.monthDuration;
//
//     divElement.appendChild(headingElement);
//     divElement.appendChild(paragraphElement);
//     divContainer.appendChild(divElement);
//     document.body.appendChild(divContainer);
// }