// - створити блок,
const block = document.createElement('div');
// - додати йому класи wrap, collapse, alpha, beta
block.classList.add('wrap','collapse','alpha','beta');
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту

block.textContent = 'Hello world';

block.style.cssText = `
    background: #f86432;
    color: #FFF;
    padding: 10px;
    margin-bottom: 20px;
`;

// - додати цей блок в body.
document.body.append(block);
// - клонувати його повністю, та додати клон в body.
const cloneBlock = block.cloneNode(true);
document.body.append(cloneBlock);
//
// - Є масив:
//     ['Main','Products','About us','Contacts']
const array = ['Main','Products','About us','Contacts'];
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
const ul = document.createElement('ul');
document.body.append(ul);

for (const item of array) {
    const li = document.createElement('li');
    li.textContent = item;
    ul.append(li);
}

//
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

for (const item of coursesAndDurationArray) {
    const course = document.createElement('div');
    for (const key in item) {
        course.textContent += `${key}: ${item[key]} | `;
        document.body.append(document.createElement('br'));
    }

    document.body.append(course);
}

// =========================
//
//     - Є масив
let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for (const item of coursesAndDurationArray2) {
    const course = document.createElement('div');
    course.classList.add('item');
    course.innerHTML = `
        <h1 class='heading'>${item.title}</h1>
        <p class='description'>${item.monthDuration}</p>`;
    document.body.append(course);
}

// ==========================
//
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

for (const item of simpsons) {
    const member = document.createElement('div');
    member.classList.add('member');
    member.innerHTML = `
        <h2>${item.name} ${item.surname} | Age ${item.age}</h2>
        <img src=${item.photo} alt="photo">
        <p>${item.info}</p>
        <hr>`;
    document.body.append(member);
}


// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом

for (const item of coursesArray) {
    const anotherCourse = document.createElement('div');
    const innerDiv = document.createElement('div');
    const ul = document.createElement('ul');

    for (const module of item.modules) {
        ul.innerHTML += `<li>${module}</li>`
    }

    anotherCourse.innerHTML = `
        <h3>Course: ${item.title}</h3>
        <span>Month duration: ${item.monthDuration}</span>
        <span>| Hour duration: ${item.hourDuration}</span>
        `;

    anotherCourse.append(innerDiv);
    innerDiv.append(ul);

    document.body.append(anotherCourse);
}


// ------------------
//
//     - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
const rectangle = document.createElement('div');
const clearRecBtn = document.createElement('button');

rectangle.style.cssText = `
    width: 100px;
    height: 100px;
    background: blue;
`;

clearRecBtn.style.cssText = `
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: red;
    cursor: pointer;
    margin: 20px 0 0 25px;
`;

rectangle.setAttribute('id', 'text');
document.body.append(rectangle,clearRecBtn);

clearRecBtn.addEventListener('click', () => {
    if (rectangle.getAttribute('id') === 'text') {
        rectangle.remove();
    }
});

const br = document.createElement('br');
document.body.append(document.createElement('br'),document.createElement('br'));
//
//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

const input = document.createElement('input');
const inputBtn = document.createElement('button');

input.type = "number";
inputBtn.style.cssText = `
    width: 50px;
    height: 15px;
    margin-left: 10px
`;

document.body.append(input, inputBtn);

inputBtn.addEventListener('click', () => {

    if(input.value < 18) {
        alert('Ваш вік менше 18 років!');
    }
})
document.body.append(document.createElement('br'),document.createElement('hr'));
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
const rowCountInput = document.createElement('input');
const columnCountInput = document.createElement('input');
const valueInput = document.createElement('input');
const newInputBtn = document.createElement('button');

newInputBtn.style.cssText = `
    width: 50px;
    height: 15px;
    margin-left: 10px
`;

rowCountInput.type = "number";
rowCountInput.placeholder = "введіть к-сть рядків";
columnCountInput.type = "number";
columnCountInput.placeholder = "введіть к-сть стовпців";
valueInput.placeholder = "символ заповнення";

document.body.append(rowCountInput, document.createElement('br'), document.createElement('br'),
                    columnCountInput, document.createElement('br'), document.createElement('br'),
                    valueInput, newInputBtn, document.createElement('br'), document.createElement('br'));

//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

newInputBtn.addEventListener('click', () => {
    const rows = +rowCountInput.value;
    const colums = +columnCountInput.value;
    const content = valueInput.value;

    const table = document.createElement('table');

    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');

        for (let k = 0; k < colums; k++) {
            const td = document.createElement('td');
            td.textContent = content;
            tr.append(td);
        }

        table.append(tr);
    }

    if (rows !== 0 && colums !== 0) {
        document.body.append(table);
    }
})