// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
//
const formUser = document.forms.form;
let username = formUser.username;
let age = formUser.age;
const btn = document.getElementById('btn');

function createUser(username, age) {
    let user = {
        name: username,
        age: age,
    }
    localStorage.setItem('key', JSON.stringify(user))
}
btn.onclick = function (e) {
    e.preventDefault()
    createUser(username.value, age.value);
}




// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
let btnCar = document.getElementById('btnCar');
let formCar = document.forms.formCar;
let model = formCar.model;
let type = formCar.type;
let volume = formCar.volume;
let createCars = (model, type, volume)=>{
    let arr = JSON.parse(localStorage.getItem('car')) || [];

    arr.push({model, type, volume});
    localStorage.setItem('car', JSON.stringify(arr));
}
btnCar.addEventListener('click', function (e) {
    e.preventDefault();
    createCars(model.value, type.value, volume.value)

})