const currentPost = JSON.parse(localStorage.getItem('post'));
const userInfo = document.querySelector('.post__info');

function renderPostData(post) {
    for (const postKey in post) {
        if ( typeof post[postKey] === 'object') {
            renderPostData(post[postKey]);
        } else {
            const div = document.createElement('div');
            div.classList.add('post__field');
            div.textContent = `${postKey}: ${post[postKey]}`;
            userInfo.append(div);
        }
    }
}

renderPostData(currentPost);

const backBtn = document.querySelector('.back__button');
backBtn.addEventListener('click', () => window.history.back());

// PostComments
const currentPostId = JSON.parse(localStorage.getItem('post')).id;
const commentsInfo = document.querySelector('.comments__info');
function renderPostComments(array) {
    for (const comments of array) {
        const wrapper = document.createElement('div');
        wrapper.classList.add('post__wrapper');
        for (const commentsKey in comments) {
            if ( typeof comments[commentsKey] === 'object') {
                renderPostComments(comments[commentsKey]);
            } else {
                const div = document.createElement('div');
                div.classList.add('post__field');
                div.textContent = `${commentsKey}: ${comments[commentsKey]}`;
                wrapper.append(div);
            }
        }
        commentsInfo.append(wrapper);
    }
}
async function getPostComments(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    const data = await response.json();
    return data;
}

getPostComments(currentPostId)
    .then(data => {
        console.log(data)
        renderPostComments(data)
    });