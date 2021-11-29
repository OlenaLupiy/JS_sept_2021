// Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
class Users {
    constructor(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, company) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = {
            street: street,
            suite: suite,
            city: city,
            zipcode: zipcode
        }
        this.geo = {
            lat: lat,
            lng: lng
        }
        this.phone = phone;
        this.website = website;
        this.company = company;
    }
}

const user = new Users(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874',
    '-37.3159','81.1496', '1-770-736-8031 x56442', 'hildegard.org',{name: 'Romaguera-Crona',catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets' });
// console.log(user)
//
// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// function Tags(titleOfTag, action, attrs) {
//     this.titleOfTaf = titleOfTag;
//     this.action = action;
//     this.attrs =  [attrs];
// }
// const aTag = new Tags('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.', [{titleOfAttr: 'name', actionOfAttr: 'Переход к области с помощью комбинации клавиш'}, {titleOfAttr: 'href', actionOfAttr: 'Задает адрес документа, на который следует перейти.'}] )
// console.log(aTag);
// const divTag = new Tags('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
//     [{titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'}, {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'}])
// console.log(divTag);
// let h1Tag = new Tags('h1', 'ег <h1> представляет собой наиболее важный заголовок первого уровня', [{titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка.'}])
// console.log(h1Tag);
// let spanTag = new Tags('span', 'Тег <span> предназначен для определения строчных элементов документа', [{titleOfAttr: 'class', actionOfAttr:'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'},
//     {titleOfAttr: 'hidden', actionOfAttr: 'Скрывает содержимое элемента от просмотра.'}, {titleOfAttr: 'id', actionOfAttr: 'Указывает имя стилевого идентификатора.'}])
// console.log(spanTag)
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
