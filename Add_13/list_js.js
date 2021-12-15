

    let divItem = document.getElementsByClassName('item')[0];


    let items = JSON.parse(localStorage.getItem('item')) ;
    // if (items.length>=1){document.getElementById('back').style.display='block'}
    for (const item of items) {
        const div = document.createElement('div');
        div.innerHTML+= `<h3> Name: ${item.name}</h3>`;
        div.innerHTML+= `<h4> Quantity: ${item.quantity}</h4>`;
        div.innerHTML+= `<div> Price: ${item.price}.</div>`;
        div.innerHTML+= `<img src="${item.img}">`;
        const buttonDelete = document.createElement('button');
        buttonDelete.innerText = 'Delete me';
        buttonDelete.classList.add('delete');

        divItem.append(div, buttonDelete)
    }
    const btn = document.getElementById('btn');
    btn.onclick = function () {
        let ok = confirm('Do you want Delete?');
        if (ok){
        localStorage.removeItem('item');
        //divItem.innerHTML = ''
        location.reload()}
    }
    const btnsDelete= document.getElementsByClassName('delete');
        for (let i = 0; i < btnsDelete.length; i++) {
            let btn = btnsDelete[i];
            btn.onclick = function () {
                let items = JSON.parse(localStorage.getItem('item'));
                for (let j = 0; j < items.length; j++) {
                    if (j === i){
                        items.splice(i, 1);
                        localStorage.setItem('item', JSON.stringify(items));
                        location.reload();
                        break;
                    }

                }

            }
        }


