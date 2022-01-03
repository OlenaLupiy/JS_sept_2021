const JsUser = new URL(location).searchParams.get('user');

const user = JSON.parse(JsUser);

const divMain = document.getElementById('userAll');



divMain.innerHTML = `
<h2>User_id:${user.id}, name: ${user.name}</h2>
<p>Username: ${user.username}; email: ${user.email}</p>
<div>Address: street- ${user.address.street} <br>
               suite - ${user.address.suite} <br>
               city - ${user.address.city} <br>
               zipcode - ${user.address.zipcode}
               <p>Geo: Lat - ${user.address.geo.lat} <br>
               Lng - ${user.address.geo.lng}</p></div>
         <div> Phone: ${user.phone}, website: ${user.website} <br>
         Company: ${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}</div>`;


const btnPostOfCurrentUser = document.createElement('button');
btnPostOfCurrentUser.innerText = 'Show All Titles of Posts';
divMain.appendChild(btnPostOfCurrentUser);

const divOfPosts = document.createElement('div');
divOfPosts.classList.add('posts')
document.body.appendChild(divOfPosts);

btnPostOfCurrentUser.onclick = function () {
    if (divOfPosts.innerText ===''){
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(posts => {
            for (const post of posts) {

                const titlePostDiv = document.createElement('div');
                titlePostDiv.classList.add('title')

                titlePostDiv.innerHTML = `<h3>${post.title}</h3>`;
                divOfPosts.appendChild(titlePostDiv);

                const postLink = document.createElement('a');
                postLink.innerText = 'See post details';

                postLink.href =`post-details.html?post=${JSON.stringify(post)}`
                titlePostDiv.appendChild(postLink);

                btnPostOfCurrentUser.innerText = 'Hide All Title of Posts'
            }

        })
}else {
        btnPostOfCurrentUser.innerText = 'Show All Titles of Posts';
        divOfPosts.innerText ='';


    }
}

