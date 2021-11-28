// Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Cars(model, producer, year, maxSpeed, volume) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volume = volume;
//     this.drive = function () {
//         console.log(`Drive with speed ${this.maxSpeed}/hour`)
//     };
//     this.info = function () {
//         console.log(`Model - ${this.model}
//         Producer - ${this.producer}
//         Year - ${this.year}
//         MaxSpeed - ${this.maxSpeed}
//         Volume - ${this.volume}`)
//     };
//     this.info1 = function () {
//         for (const key in this) {
// if(typeof this[key] !== 'function') console.log(`${key} -- ${this[key]}`)
//         }
//     }
//     this.increaseSpeed = function (newSpeed) {
//         this.maxSpeed = maxSpeed + newSpeed;
//     };
//     this.changeYear = function (newValue) {
//        this.year = newValue
//     };
//     this.addDriver = function (driver) {
//        this.driver = driver
//     }
// }
// let car1 = new Cars('RAW4', 'toyota', 2019, 260, 5.4);
// console.log(car1);
// car1.drive();
// car1.info();
// // car1.info1()
// car1.increaseMaxSpeed(25);
// car1.changeYear(2020);
// car1.addDriver('olya');
// console.log(car1)

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Cars {
//     constructor(model, producer, year, speed, volume) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.speed = speed;
//         this.volume = volume;
//     }
//     drive(){
//         console.log(`Drive with speed ${this.speed}/hour`)
//     };
//     info (){
//         for (const key in this) {
//              console.log(`${key} - ${this[key]}`)
//         }
//     };
//     increaseMaxSpeed (newSpeed){
//         this.speed = this.speed + newSpeed;
//     }
//     changeYear (newValue) {
//         this.year = newValue;
//     };
//     addDriver (driver){
//         this.driver = driver;
//     }
//
// }
// let car = new Cars('cx5', 'mazda', 2021, 280, 2.5)
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(30)
// car.changeYear(2022);
// car.addDriver({name: 'olya'})
// console.log(car)
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
function Sinderella(name, age, size){
    this.name = name;
    this.age = age;
    this.size = size;
}
const arrSinderellas = [
    new Sinderella('Olya', 17, 35),
    new Sinderella('Tanya', 16, 34),
    new Sinderella('Polya', 18, 37),
    new Sinderella('Sofiya', 27, 39),
    new Sinderella('Anya', 17, 37),
    new Sinderella('Tonya', 19, 35),
    new Sinderella('Sasha', 20, 36),
    new Sinderella('Mariya', 21, 41),
    new Sinderella('Kata', 29, 38),
    new Sinderella('Halya', 37, 35)
]
console.log(arrSinderellas)
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(namePrince, age, findBoot) {
        this.namePrince = namePrince;
        this.age = age;
        this.findBoot = findBoot;
    }
}
princeRoma = new Prince('Roma', 35, 39);
console.log(princeRoma);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
const findPrince = (arrSinderellas, princeRoma)=>{
    for (const princces of arrSinderellas) {
        if (princces.size === princeRoma.findBoot){
            return ` Your Sinderrella - ${princces.name}`
        }
    }
}
console.log(findPrince(arrSinderellas, princeRoma));
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let nameSin = arrSinderellas.find((item)=>item.size === princeRoma.findBoot)
console.log(nameSin)