// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('hello world'.length, 'lorem ipsum'.length, 'javascript is cool'.length);
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('hello world'.toUpperCase(), 'lorem ipsum'.toUpperCase(), 'javascript is cool'.toUpperCase());
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log('HELLO WORLD'.toLowerCase(), 'LOREM IPSUM'.toLowerCase(), 'JAVASCRIPT IS COOL'.toLowerCase());
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log(str.trim());
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let str2 = 'Ревуть воли як ясла повні';
function stringToArray(str) {
    return str.split(' ');
}
console.log(stringToArray(str2));
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arrayOfNumbers = [10,8,-7,55,987,-1011,0,1050,0];
const newArray = arrayOfNumbers.map((item) => item.toString());
console.log(newArray);
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];

function sortNums(array, direction) {
    if(direction === 'ascending') {
        array.sort((a,b) => a - b);
    } else if (direction === 'descending') {
        array.sort((a,b) => b - a);
    }
}

sortNums(nums,'ascending');
console.log(nums);
sortNums(nums,'descending')
console.log(nums);

function sortNums2(array, direction) {
    if(direction === 'ascending') {
        for (const arrayElement of array) {
            let temp;
            for (let i = 0; i < array.length; i++) {
                temp = array[i];
                if(array[i] > array[i+1]) {
                    array[i] = array[i+1];
                    array[i+1] = temp;
                }
            }
        }
    } else if (direction === 'descending') {
        for (const arrayElement of array) {
            let temp;
            for (let i = 0; i < array.length; i++) {
                temp = array[i];
                if(array[i] < array[i+1]) {
                    array[i] = array[i+1];
                    array[i+1] = temp;
                }
            }
        }
    }
}

sortNums2(nums,'ascending');
console.log(nums);
sortNums2(nums,'descending')
console.log(nums);
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

coursesAndDurationArray.sort((a,b) => a.monthDuration - b.monthDuration);
console.log(coursesAndDurationArray);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
coursesAndDurationArray = coursesAndDurationArray.filter(elem => {
    return elem.monthDuration > 5;
})
console.log(coursesAndDurationArray);
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
coursesAndDurationArray.map((elem, i) => {
    elem.id = i;
})
console.log(coursesAndDurationArray);
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
const deckOfCards = [
    {value: '6', suit: 'Heart', color: 'red' },
    {value: '6', suit: 'Spade', color: 'black' },
    {value: '6', suit: 'Club', color: 'black' },
    {value: '6', suit: 'Diamond', color: 'red' },
    {value: '7', suit: 'Heart', color: 'red' },
    {value: '7', suit: 'Spade', color: 'black' },
    {value: '7', suit: 'Club', color: 'black' },
    {value: '7', suit: 'Diamond', color: 'red' },
    {value: '8', suit: 'Heart', color: 'red' },
    {value: '8', suit: 'Spade', color: 'black' },
    {value: '8', suit: 'Club', color: 'black' },
    {value: '8', suit: 'Diamond', color: 'red' },
    {value: '9', suit: 'Heart', color: 'red' },
    {value: '9', suit: 'Spade', color: 'black' },
    {value: '9', suit: 'Club', color: 'black' },
    {value: '9', suit: 'Diamond', color: 'red' },
    {value: '10', suit: 'Heart', color: 'red' },
    {value: '10', suit: 'Spade', color: 'black' },
    {value: '10', suit: 'Club', color: 'black' },
    {value: '10', suit: 'Diamond', color: 'red' },
    {value: 'Jack', suit: 'Heart', color: 'red' },
    {value: 'Jack', suit: 'Spade', color: 'black' },
    {value: 'Jack', suit: 'Club', color: 'black' },
    {value: 'Jack', suit: 'Diamond', color: 'red' },
    {value: 'Queen', suit: 'Heart', color: 'red' },
    {value: 'Queen', suit: 'Spade', color: 'black' },
    {value: 'Queen', suit: 'Club', color: 'black' },
    {value: 'Queen', suit: 'Diamond', color: 'red' },
    {value: 'King', suit: 'Heart', color: 'red' },
    {value: 'King', suit: 'Spade', color: 'black' },
    {value: 'King', suit: 'Club', color: 'black' },
    {value: 'King', suit: 'Diamond', color: 'red' },
    {value: 'Ace', suit: 'Heart', color: 'red' },
    {value: 'Ace', suit: 'Spade', color: 'black' },
    {value: 'Ace', suit: 'Club', color: 'black' },
    {value: 'Ace', suit: 'Diamond', color: 'red' },
];
// - знайти піковий туз
console.log(deckOfCards.filter((item) => item.value === "Ace" && item.suit === "Spade"));

for (const card of deckOfCards) {
    if(card.value === "Ace" && card.suit === "Spade") {
        console.log(card);
    }
}
// - всі шістки
console.log(deckOfCards.filter((item) => item.value === "6"));

for (const card of deckOfCards) {
    if(card.value === "6") {
        console.log(card);
    }
}
// - всі червоні карти
console.log(deckOfCards.filter((item) => item.color === "red"));
for (const card of deckOfCards) {
    if(card.color === "red") {
        console.log(card);
    }
}
// - всі буби
console.log(deckOfCards.filter((item) => item.suit === "Diamond"));

for (const card of deckOfCards) {
    if(card.suit === "Diamond") {
        console.log(card);
    }
}
// - всі трефи від 9 та більше
console.log(deckOfCards.filter((item) => item.value !== "6" && item.value !== "7" && item.value !== "8"));

for (const card of deckOfCards) {
    if(card.value !== "6" && card.value !== "7" && card.value !== "8") {
        console.log(card);
    }
}
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

console.log(deckOfCards.reduce((accumulator, value) => {
    if (value.suit === "Spade") {
        accumulator.spades.push(value);
    }

    if (value.suit === "Diamond") {
        accumulator.diamonds.push(value);
    }

    if (value.suit === "Heart") {
        accumulator.hearts.push(value);
    }

    if (value.suit === "Club") {
        accumulator.clubs.push(value);
    }

    return accumulator;

}, {spades: [], diamonds: [], hearts:[], clubs:[]}));
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
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
// --написати пошук всіх об'єктів, в який в modules є sass
console.log(coursesArray.filter((item) => item.modules.includes('sass')));
// --написати пошук всіх об'єктів, в який в modules є docker
console.log(coursesArray.filter((item) => item.modules.includes('docker')));