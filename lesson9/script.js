// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
const form = document.createElement('form');
const inputName = document.createElement('input');
const inputSurname = document.createElement('input');
const inputAge = document.createElement('input');
const formBtn = document.createElement('button');

inputName.placeholder = "Enter name";
inputSurname.placeholder = "Enter surname";
inputAge.placeholder = "Enter age";
inputAge.type = "number";
inputAge.min = "0";

form.style.cssText = `
    padding-top: 50px;
    margin: 0 auto;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    row-gap: 15px;
`;

formBtn.style.cssText = `
    background: orange;
    color: #FFF;
    width: 100%;
    cursor: pointer;
`;

formBtn.textContent = "Add Data";

form.append(inputName, inputSurname, inputAge, formBtn);
document.body.append(form);

console.log(document.querySelectorAll('input'))
document.querySelectorAll('input').forEach(item => {
    item.style.border = "2px solid grey";
    item.required = true;
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const div = document.createElement('div');
    div.style.cssText = `
        margin-top: 20px;
        padding: 10px;
        background: orange;
        color: #FFF;
    `;

    div.innerHTML = `FULL NAME : ${inputName.value.toUpperCase()} ${inputSurname.value.toUpperCase()} | AGE : ${inputAge.value}`;
    document.body.append(div);
});

// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
const block = document.createElement('div');
if(!localStorage.getItem('number')) {
    localStorage.setItem("number", "0");
}
block.textContent = localStorage.getItem("number");

block.style.cssText = `
    width: 200px;
    height: 200px;
    background: transparent;
    border: 2px solid grey;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 80px;
    color: grey;
`
document.body.append(block);

let number = +localStorage.getItem("number") + 1;
localStorage.setItem("number", number.toString());
block.textContent = localStorage.getItem("number");

const clearBtn = document.createElement('button');
clearBtn.textContent = "Clear Local Storage";

clearBtn.style.cssText = `
        margin: 20px 30px;
        padding: 10px;
        background: orange;
        color: #FFF;
        cursor: pointer;
    `;
document.body.append(clearBtn);

clearBtn.addEventListener('click', () => {
    localStorage.clear();
    localStorage.setItem("number", "0");
    block.textContent = localStorage.getItem("number");
});

// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

const sessions = JSON.parse(localStorage.getItem("sessions")) || [];

sessions.push(new Date());
localStorage.setItem("sessions", JSON.stringify(sessions));


const nextPageBtn = document.createElement('a');
nextPageBtn.textContent = "go to the next page";
nextPageBtn.href = "session.html";
nextPageBtn.style.cssText = `
        box-sizing: border-box;
        display: block;
        text-decoration: none;
        color: blue;
        border: 1px solid blue;
        padding: 10px;
        width: 200px;
        text-align: center;
        margin: 0 auto;
    `;
document.body.append(nextPageBtn);

// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

const staffs = [];
function fillStaffs (array, n) {
    for (let i = 0; i < n; i++) {
        array.push({name:`staff${i+1}`, cost: `${i+1}`});
    }
}
fillStaffs(staffs, 100);
console.log(staffs);

let min = 0,
    max = 10;
const prevBtn = document.createElement('button');
const nextBtn = document.createElement('button');

prevBtn.textContent = '<';
nextBtn.textContent = '>';

prevBtn.style.cssText = `
    width: 100px;
    background: transparent;
    border: 2px solid grey;
    margin-bottom: 10px;
    cursor: pointer;
`;

nextBtn.style.cssText = `
    width: 100px;
    background: transparent;
    border: 2px solid grey;
    margin-bottom: 10px;
    cursor: pointer;
`;

document.body.append(prevBtn, nextBtn);

function showStaff() {
    for (let i = min; i < max; i++) {
        const div = document.createElement('div');
        div.classList.add('staff');
        for (const key in staffs[i]) {
            div.textContent += `${key}: ${staffs[i][key]} `;
            console.log(key, staffs[i][key]);
        }
        document.body.append(div);
    }
}

showStaff();

prevBtn.addEventListener('click', () => {
    if (min > 0) {
        min -= 10;
        max -= 10;

        document.querySelectorAll('.staff').forEach(item => item.remove());
        showStaff();
    }

});

nextBtn.addEventListener('click', () => {
    if (max < staffs.length) {
        min += 10;
        max += 10;

        document.querySelectorAll('.staff').forEach(item => item.remove());
        showStaff();
    }

});

//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)