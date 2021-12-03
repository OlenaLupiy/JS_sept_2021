




let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];
// З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// const arrEmpty = []
// users.forEach(value => {
//     arrEmpty.push(value.address);
//
// })
// console.log(arrEmpty);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

// const divElement = document.createElement('div');
// divElement.style.display='flex';
// divElement.style.flexWrap = 'wrap';
// users.forEach(value => {
//     const divUser = document.createElement('div');
//     divUser.classList.add('user')
//     divUser.innerText = `${value.name} ${value.age}, ${value.status}`;
//
//     for (const key in value.address) {
//         divUser.innerText+=` ${key}: ${value.address[key]}`;
//         divElement.appendChild(divUser)
//     }
//
//     document.body.append(divElement);
// })
//За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості п
// - о своїм блокам (div>div*4)
// for (const user of users) {
//     const userDiv = document.createElement('div');
//     userDiv.classList.add('user');
//     for (const key in user) {
//         const itemDiv = document.createElement('div');
//         if (typeof user[key] !== 'object'){
//             itemDiv.innerText+=` ${key}: ${user[key]}`
//         } else {
//             for (const itemKey in user[key]) {
//                 itemDiv.innerText+= ` ${itemKey}:${user[key][itemKey]}`
//
//             }
//         }
//         userDiv.append(itemDiv);
//     }
//     document.body.appendChild(userDiv)
// }
//
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок
//дресою зробити окремим блоком, з блоками для кожної властивості

// for (const user of users) {
//     const userDiv = document.createElement('div');
//     userDiv.classList.add('user');
//
//     for (const userKey in user) {
//         const itemDiv = document.createElement('div');
//         if (typeof user[userKey] === 'object'){
//             for (const userKeyKey in user[userKey]) {
//                 const divAddress = document.createElement('div');
//                 divAddress.innerText+= `${user[userKey][userKeyKey]}`
//                 itemDiv.append(divAddress);
//             }}
//          else {
//                 itemDiv.innerText+=`${user[userKey]}`;
//
//             }
//         userDiv.append(itemDiv)
//
//         }
//     document.body.appendChild(userDiv);
//     }

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
//
// const divId = document.getElementById('content');
// let wrapContent = document.getElementById('wrap');
// let ul = document.createElement('ul');
//
// if (wrapContent.children.length){
//     let h2 = document.getElementsByTagName('h2');
//     for (const h2Element of h2) {
//         const li = document.createElement('li');
//         li.innerText+= h2Element.innerText;
//         ul.append(li)
//     }
//
// }
// divId.append(ul);
//
// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
//
// ];
// const div = document.createElement('div');
// for (const rule of rules) {
//     const divRule = document.createElement('div');
//     const titleDiv = document.createElement('h2');
//     const bodyDiv = document.createElement('div');
//     titleDiv.innerText = rule.title;
//     bodyDiv.innerText = rule.body;
//     divRule.append(titleDiv, bodyDiv);
//     div.appendChild(divRule);
// }
//
// document.body.appendChild(div);