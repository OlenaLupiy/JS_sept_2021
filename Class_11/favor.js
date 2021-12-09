const users = JSON.parse(localStorage.getItem('key'));
const divMain = document.getElementById('main');
for (const user of users) {
    const divUser = document.createElement('div');
    divUser.innerText = `Name: ${user.name}\nAge: ${user.age}\nStatus: ${user.status}`;
    divMain.appendChild(divUser)
}
