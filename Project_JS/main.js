const divContainer = document.getElementById('container');
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        for (const user of users) {
            const userDiv = document.createElement('div');
            userDiv.classList.add('user');
            userDiv.innerText = `User ID: ${user.id}. Name: ${user.name}`;
            const detailsLink = document.createElement('a');
            detailsLink.href = `user-detail.html?user=${JSON.stringify(user)}`;
            detailsLink.innerText = 'Detail information';
            userDiv.appendChild(detailsLink);
            divContainer.append(userDiv);
        }


    })

