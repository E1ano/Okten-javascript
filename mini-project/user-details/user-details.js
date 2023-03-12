const currentUser = JSON.parse(localStorage.getItem('user'));
const userInfo = document.querySelector('.user__info');
const postBtn = document.querySelector('.user__post');
const postsWrapper = document.querySelector('.posts__wrapper');
const backBtn = document.querySelector('.back__button');
function renderUserData(user) {
    for (const userKey in user) {
        if ( typeof user[userKey] === 'object') {
            renderUserData(user[userKey]);
        } else {
            const div = document.createElement('div');
            div.classList.add('info__field');
            div.textContent = `${userKey}: ${user[userKey]}`;
            userInfo.append(div);
        }
    }
}

renderUserData(currentUser);

const currentUserId = JSON.parse(localStorage.getItem('user')).id;
async function getUserPosts(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Problem with fetch: ', error);
    }
}

postBtn.addEventListener('click', (e) => {
    getUserPosts(currentUserId)
        .then(data => {
            for (const dataElement of data) {
                const div = document.createElement('div');
                const button = document.createElement('a');

                div.classList.add('post__title');
                button.classList.add('post__button');

                div.textContent = `title: ${dataElement.title}`;
                button.textContent = 'post detail';
                button.href = '../post-details/post-details.html';

                button.addEventListener('click', () => {
                    localStorage.setItem('post', JSON.stringify(dataElement));
                });

                div.append(button);
                postsWrapper.append(div);
            }
        })
    e.target.disabled = true;
});

backBtn.addEventListener('click', () => window.history.back());