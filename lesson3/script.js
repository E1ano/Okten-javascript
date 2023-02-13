// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write("<div>Good morning!</div>");
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
document.write("<br>");
for (let i = 0; i < 10; i++) {
    document.write(`<div>${i} - Good morning!</div>`);
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;
while (i < 20) {
    document.write("<h1>H1</h1>");
    i++;
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let j = 0;
while (j < 20) {
    document.write(`<h1>H1 with index ${j}</h1>`);
    j++;
}
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write("<ul>");
for (let k = 0; k < listOfItems.length; k++) {
    document.write(`<li>${listOfItems[k]}</li>`);
}
document.write("</ul>");

// -----------------------------------------------
//
//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
document.write("<hr>");
for (let i = 0; i < products.length; i++) {
    document.write(`
        <div class="product-card" style="text-align: center;">
            <h3 class="product-title" style="text-transform: uppercase;color: crimson;">${products[i].title} | Price - ${products[i].price}</h3>
        <img src= ${products[i].image} alt="" class="product-image" style="height: 200px; width: 200px; border: 2px solid crimson">
        </div>
    `);
}
document.write("<hr>");

// --------------------
//     є масив
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років

console.log("----- User filter by status true -----");
for (let i = 0; i < users.length; i++) {
    if (users[i].status) {
        console.log(`User ${users[i].name}: age is ${users[i].age}, status - ${users[i].status}`);
    }
}

console.log("----- User filter by status false -----");
for (let i = 0; i < users.length; i++) {
    if (!users[i].status) {
        console.log(`User ${users[i].name}: age is ${users[i].age}, status - ${users[i].status}`);
    }
}

console.log("----- User filter by age > 30 -----");
for (let i = 0; i < users.length; i++) {
    if (users[i].age > 30) {
        console.log(`User ${users[i].name}: age is ${users[i].age}, status - ${users[i].status}`);
    }
}

//ADITIONAL1 -------------------------

// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

const numArray = [];
for (let i = 0; i < 5; i++) {
    numArray.push(i+1);
}
console.log(numArray);


const strArray = [];
for (let i = 0; i < 5; i++) {
    strArray.push(`message${i+1}`);
}
console.log(strArray);


const mixArray = [1,"man",false,3,"hello"];
console.log(mixArray);
for (let i = 0; i < 5; i++) {
    console.log(mixArray[i]);
}

//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

const emptyArray = [];
for (let k = 0; k < 5 ; k++) {
    emptyArray[k] = "any";
}
console.log(emptyArray);
//
//
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
const arr = [2,17,13,6,22,31,45,66,100,-18];
// 1. перебрати його циклом while
let iter = 0;
while(iter < arr.length) {
    console.log(arr[iter]);
    iter++;
}
// 2. перебрати його циклом for
for (let k = 0; k < arr.length ; k++) {
    console.log(arr[k]);
}
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let a = 0;
while(a < arr.length) {
    if(a % 2 !== 0) {
        console.log(arr[a]);
    }
    a++;
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let k = 0; k < arr.length ; k++) {
    if(k % 2 !== 0) {
        console.log(arr[k]);
    }
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
let b = 0;
while(b < arr.length) {
    if(b % 2 === 0) {
        console.log(arr[b]);
    }
    b++;
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let k = 0; k < arr.length ; k++) {
    if(k % 2 === 0) {
        console.log(arr[k]);
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"
for (let k = 0; k < arr.length ; k++) {
    if(arr[k] % 3 === 0) {
        arr[k] = "okten";
    }
}
console.log(arr);
// 8. вивести масив в зворотньому порядку.
for (let k = arr.length; k >= 0 ; k--) {
    console.log(arr[k]);
}
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
//
//
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор


