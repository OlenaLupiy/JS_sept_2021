// Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар
//

let shop = document.forms.shop;
shop.onsubmit = function (e) {
    e.preventDefault();
    let name = this.nameItem.value;
    let quantity = this.quantity.value;
    let price = this.price.value;
    let img = this.imgSrc.value;
    let arrItem = JSON.parse(localStorage.getItem('item')) || [];
    let item = {name, quantity, price, img};
    arrItem.push(item);
    localStorage.setItem('item', JSON.stringify(arrItem ))
}




