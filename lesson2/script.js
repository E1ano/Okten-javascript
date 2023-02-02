// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

const array = ["hi", true, 22, 3.5, "people"];
for (const element of array) {
    console.log(element);
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

const HarryPotter = {
    title: "Gifts of Death",
    pageCount: 350,
    genre: "fantasy"
}

const GreatGatsby = {
    title: "The Great Gatsby",
    pageCount: 200,
    genre: "novel"
}

const DonQuixote = {
    title: "Don Quixote",
    pageCount: 280,
    genre: "roman"
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
const newHarryPotter = {
    title: "Gifts of Death",
    pageCount: 350,
    genre: "fantasy",
    authors: ['J.K.Rowling', '57']
}

const newGreatGatsby = {
    title: "The Great Gatsby",
    pageCount: 200,
    genre: "novel",
    authors: ['F.Scott', '70']
}

const newDonQuixote = {
    title: "Don Quixote",
    pageCount: 280,
    genre: "roman",
    authors: ['Miguel de Cervantes', '80']
}
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

const userArray = [
    {
        name: "John1",
        username: "Smith",
        password: "number1"
    },
    {
        name: "John2",
        username: "Smith",
        password: "number2"
    },
    {
        name: "John3",
        username: "Smith",
        password: "number3"
    },
    {
        name: "John4",
        username: "Smith",
        password: "number4"
    },
    {
        name: "John5",
        username: "Smith",
        password: "number5"
    },
    {
        name: "John6",
        username: "Smith",
        password: "number6"
    },
    {
        name: "John7",
        username: "Smith",
        password: "number7"
    },
    {
        name: "John8",
        username: "Smith",
        password: "number8"
    },
    {
        name: "John9",
        username: "Smith",
        password: "number9"
    },
    {
        name: "John10",
        username: "Smith",
        password: "number10"
    },
];

for (const element of userArray) {
    console.log(element.password);
}

// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.

const x = 10;

// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
if (x !== 0) {
    console.log("Вірно");
} else {
    console.log("Невірно");
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число (в першу, другу, третю или четверту частину години).
let time = Math.floor(Math.random() * 59);

if (time >= 0 && time <= 15) {
    console.log(`Число ${time} попадає до 1 чверті`);
} else if (time > 15 && time <= 30) {
    console.log(`Число ${time} попадає до 2 чверті`);
} else if (time > 30 && time <= 45) {
    console.log(`Число ${time} попадає до 3 чверті`);
} else if (time > 45 && time <= 59) {
    console.log(`Число ${time} попадає до 4 чверті`);
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = Math.floor((Math.random() * 30) + 1);

if (day >= 1 && day <= 10) {
    console.log(`Число ${day} попадає у 1 декаду`);
} else if (day > 10 && day <= 20) {
    console.log(`Число ${day} попадає у 2 декаду`);
} else if (day > 20 && day <= 31) {
    console.log(`Число ${day} попадає у 3 декаду`);
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
const weekday = +prompt("Enter number of weekday: ", "1 to 7");

switch (weekday) {
    case 1 :
        alert("Monday");
        break;
    case 2 :
        alert("Tuesday");
        break;
    case 3 :
        alert("Wednesday");
        break;
    case 4 :
        alert("Thursday");
        break;
    case 5 :
        alert("Friday");
        break;
    case 6 :
        alert("Saturday");
        break;
    case 7 :
        alert("Sunday");
        break;
}
// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

const firstNum = 14;
const secondNum = 10;

if ((firstNum - secondNum) > 0) {
    console.log(firstNum);
} else if ((firstNum - secondNum) < 0) {
    console.log(secondNum);
} else console.log("Numbers are equal!");

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//   за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

//undefined, null, NaN, 0, "" (empty string), and false
let X = 12;

// 1 спосіб
if (X === "undefined" || X === 0 || X === null || X === "" || isNaN(X) || X === false) {
    X = "default";
}

// 2 спосіб
// if (!X) {
//     X = "default";
// }

console.log(X);
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const el of coursesAndDurationArray) {
    if (el.monthDuration > 5) {
        console.log("Супер!");
    }
}