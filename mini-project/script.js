const usersWrapper = document.querySelector('.users__wrapper');

async function getUsersData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const url = 'https://jsonplaceholder.typicode.com/users';

getUsersData(url)
    .then(data => {
        for (const item of data) {
            const div = document.createElement('div');
            const button = document.createElement('a');

            div.classList.add('user');
            button.classList.add('user__button');

            div.textContent = `ID: ${item.id} | Name: ${item.name}`;
            button.textContent = 'full data';
            button.href = 'user-details/user-details.html';

            button.addEventListener('click', () => {
                localStorage.setItem('user', JSON.stringify(item));
            });

            div.append(button);
            usersWrapper.append(div);
        }
    })
