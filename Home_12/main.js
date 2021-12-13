// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
//https://jsonplaceholder.typicode.com/posts
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(posts => {
        const divPosts = document.createElement('div');
        divPosts.classList.add('posts')
        for (const post of posts) {
            const divPost = document.createElement('div');
            divPost.classList.add('post')
            divPost.innerHTML = `<h2>UserId: ${post.userId}</h2><h3>Id:${post.id}</h3><p>Title: ${post.title}</p><p>Body: ${post.body}</p>`

            divPosts.appendChild(divPost)
            document.body.appendChild(divPosts);
        }
    })

// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(comments=>{
        const divComments = document.createElement('div');
        divComments.classList.add('wrap');
        for (const comment of comments) {
            const divComment = document.createElement('div');
            divComment.classList.add('comment')
            const headingElement = document.createElement('h2');
            const paragraphElement = document.createElement('p');
            headingElement.innerText = ` ${comment.id}`
            paragraphElement.innerText = `${comment.name} ${comment.email} ${comment.body}`

            divComment.append(headingElement, paragraphElement);
            divComments.appendChild(divComment);
            document.body.appendChild(divComments)
        }
    })
