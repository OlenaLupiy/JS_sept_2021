const postJs = new URL(location).searchParams.get('post');
const post = JSON.parse(postJs);

const divPosts = document.getElementById('all_posts');
divPosts.innerHTML = `<h3>${post.userId} ${post.id}: ${post.title}</h3>
<p>${post.body}</p>`

const btnComments = document.createElement('button');
btnComments.innerText = 'Show all comments';
divPosts.appendChild(btnComments);

const bodyComments = document.createElement('div');
bodyComments.classList.add('comments')
document.body.appendChild(bodyComments);

btnComments.onclick = function () {
    if(bodyComments.innerText ===''){
        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
            .then(value => value.json())
            .then(comments => {
                for (const comment of comments) {
                    const bodyOneComment = document.createElement('div');
                    bodyOneComment.classList.add('comment')
                    bodyOneComment.innerHTML = `<h3>${comment.id} ${comment.name}  ${comment.email}</h3>
                  <p>${comment.body}</p>`;

                    bodyComments.appendChild(bodyOneComment);

                    btnComments.innerText = 'Hide all comments';
                }

            })
    } else {
        btnComments.innerText = 'Show all comments';
        bodyComments.innerText = '';



    }
}

