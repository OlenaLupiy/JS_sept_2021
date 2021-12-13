// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

const divWrap = document.createElement('div');
divWrap.classList.add('wrap');
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(posts => {
        const divPosts = document.createElement('div');
        divPosts.classList.add('posts')
        for (const post of posts) {
            const divPost = document.createElement('div');
            divPost.classList.add('post');
            const headingElement = document.createElement('h3');
            headingElement.innerText = `ID: ${post.id} Title: ${post.title}`;
            const pElementPost = document.createElement('p');
            pElementPost.innerText = `${post.body}`;
            const btnComment = document.createElement('button');
            btnComment.innerText = 'Show my comment';


            btnComment.onclick = (id)=> {
                fetch(`https://jsonplaceholder.typicode.com/posts/` + post.id + `/comments`)
                    .then(value => value.json())
                    .then(comments => {
                        for (const comment of comments) {
                            if (post.id === comment.postId) {
                                let divComment = document.createElement('div');
                                divComment.innerHTML = `
                   <h3>ID:${comment.body} Name: ${comment.name}</h3>
                   <p>Email: ${comment.email} Body:${comment.body}</p>`;
                                divPost.appendChild(divComment);
                            }
                            btnComment.disabled = true;
                        }
                    })
            }


            divPost.append(headingElement, pElementPost, btnComment);
            divPosts.appendChild(divPost);
            divWrap.appendChild(divPosts);

        }

    })
document.body.appendChild(divWrap);