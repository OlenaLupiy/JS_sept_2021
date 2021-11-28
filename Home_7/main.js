// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//
// }
//
// let arrUsers = [];
// arrUsers[0] = new User(10, 'Olya', 'Komar', 'mail@gmail.com', 258974563);
// arrUsers[1] = new User(2, 'Tolya', 'Komar', 'mail@gmail.com', 258974563);
// arrUsers[2] = new User(31, 'Kolya', 'Komar', 'mail@gmail.com', 258974563);
// arrUsers[3] = new User(4, 'Vasya', 'Komar', 'mail@gmail.com', 258974563);
// arrUsers[4] = new User(15, 'Petya', 'Komar', 'mail@gmail.com', 258974563);
// arrUsers[5] = new User(6, 'Gosha', 'Komar', 'mail@gmail.com', 258974563);
// arrUsers[6] = new User(7, 'Ira', 'Komar', 'mail@gmail.com', 258974563);
// arrUsers[7] = new User(80, 'Halya', 'Komar', 'mail@gmail.com', 258974563);
// arrUsers[8] = new User(92, 'Katya', 'Komar', 'mail@gmail.com', 258974563);
// arrUsers[9] = new User(10, 'Peter', 'Komar', 'mail@gmail.com', 258974563);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filterUsers = arrUsers.filter((value) => value['id'] % 2 === 0)
//console.log(filterUsers)
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sortUsers = arrUsers.sort((a, b) => {
//     return a.id - b.id;
// })
// console.log(sortUsers);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let arrClient = [
//     new Client(10, 'Olya', 'Komar', 'mail@gmail.com', 258974563, ['potato', 'lemon']),
// new Client(2, 'Tolya', 'Komar', 'mail@gmail.com', 258974563, ['potato', 'lemon', 'bread', 'kiwi']),
// new Client(31, 'Kolya', 'Komar', 'mail@gmail.com', 258974563, ['potato']),
// new Client(4, 'Vasya', 'Komar', 'mail@gmail.com', 258974563, ['potato', 'milk', 'potato', 'lemon', 'bread', 'kiwi']),
// new Client(15, 'Petya', 'Komar', 'mail@gmail.com', 258974563, ['potato', 'lemon', 'bread', 'kiwi']),
// new Client(6, 'Gosha', 'Komar', 'mail@gmail.com', 258974563, ['potato', 'lemon', 'salt']),
// new Client(7, 'Ira', 'Komar', 'mail@gmail.com', 258974563, ['potato', 'lemon', 'bread', 'kiwi','potato', 'lemon', 'bread', 'kiwi']),
// new Client(80, 'Halya', 'Komar', 'mail@gmail.com', 258974563, ['potato', 'lemon', 'bread', 'kiwi']),
// new Client(92, 'Katya', 'Komar', 'mail@gmail.com', 258974563, ['potato', 'lemon', 'bread', 'kiwi', 'lemon']),
// new Client(11, 'Peter', 'Komar', 'mail@gmail.com', 258974563, ['potato', 'lemon', 'bread', 'kiwi', 'salt']),
// ]
// console.log(arrClient)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sortClient = arrClient.sort((a, b)=> a.order.length - b.order.length)
// console.log(sortClient)