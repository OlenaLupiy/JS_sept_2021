fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        const divContainer = document.createElement('div');
        for (const user of users) {
            const userDiv = document.createElement('div');
            userDiv.innerHTML = `
            <h3>${user.id} ${user.name} ${user.username}</h3>
            <p>${user.address.street} ${user.address.city}</p>
            <p>${user.company.name}</p>`
            const btnUser = document.createElement('button');
            btnUser.innerText = 'See posts';
            userDiv.appendChild(btnUser);
            divContainer.appendChild(userDiv);

            const postDiv = document.createElement('div');
            postDiv.style.display = 'none';
            userDiv.appendChild(postDiv);

            btnUser.onclick = function () {
                if (postDiv.style.display === 'none'){
                    postDiv.style.display = 'block';
                    btnUser.innerText = 'Close Post';

                    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
                        .then(value => value.json())
                        .then(posts => {
                            for (const post of posts) {
                                const onePost = document.createElement('div');
                                onePost.innerHTML = `<h4>${post.title}</h4>
                                                         <p>${post.body}</p>`;
                                postDiv.appendChild(onePost);

                                const btnComments = document.createElement('button');
                                btnComments.innerText = 'See comments';
                                onePost.appendChild(btnComments);

                                const bodyComments = document.createElement('div');
                                bodyComments.style.display = 'none';
                                onePost.appendChild(bodyComments);

                                btnComments.onclick = function () {
                                    if (bodyComments.style.display === 'none'){
                                        bodyComments.style.display = 'block';
                                        btnComments.innerText = 'Hide comments';

                                        if (bodyComments.innerText === ''){
                                            fetch(`https://jsonplaceholder.typicode.com/posts/${user.id}/comments`)
                                                .then(value => value.json())
                                                .then(comments => {
                                                    for (const comment of comments) {
                                                        let oneComment = document.createElement('div');
                                                        oneComment.innerText = comment.body;
                                                        bodyComments.appendChild(oneComment);
                                                    }

                                                })
                                        }
                                    }else {
                                        bodyComments.style.display = 'none';
                                        btnComments.innerText = 'See all comments'
                                    }

                                }



                            }

                        })

                } else {
                    postDiv.style.display = 'none';
                    btnUser.innerText= 'See Posts'
                }
            }

        }
document.body.appendChild(divContainer)
    })