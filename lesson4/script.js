// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function calcRectangleArea(a, b) {
    return a * b;
}

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function calcCircleArea(r) {
    return (3.14 * r * r); //πR2
}

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function calcCylinderArea(h, r) {
    return (2 * 3.14 * r * (h + r)); // 2πRH + 2πR2 = 2πR(H + R),
}

// - створити функцію яка приймає масив та виводить кожен його елемент
function logArray(arr) {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createParagraph(text) {
    document.write(`<p>${text}</p>`);
}

createParagraph("some text");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createList(text) {
    document.write('<ul>');
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}

createList("some text");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createList2(text, amount) {
    document.write('<ul>');
    for (let i = 0; i < amount; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}

createList2("some text", 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function createList3(arr) {
    document.write('<ul>');
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write('</ul>');
}

createList3([false, 1, 2, 3, "hello"]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function showObjectElements(arr) {
    for (const arrElement of arr) {
        document.write('<div>');
        for (const objKey in arrElement) {
            document.write(`<div>${objKey}: ${arrElement[objKey]}</div>`);
        }
        document.write('</div>');
        document.write('<br>');
    }
}

showObjectElements([{id: 1, name: "John", age: 20}, {id: 2, name: "John2", age: 22}, {id: 3, name: "John3", age: 24}])

// - створити функцію яка повертає найменьше число з масиву
function minElement(arr) {
    let minValue = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (minValue > arr[i]) {
            minValue = arr[i];
        }
    }
    return minValue;
}

console.log(minElement([22, 13, 14, 4, 2, 60]));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sumElementsOfArray(arr) {
    let sum = 0;
    for (const arrElement of arr) {
        sum += arrElement;
    }
    return sum;
}

console.log(sumElementsOfArray([1, 2, 3, 4, 5]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
function swapElements(arr, index1, index2) {
    let temp;
    temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}

console.log(swapElements([1, 2, 3, 4, 5], 3, 4));
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let amount = 0;
    for (const arrElement of currencyValues) {
        if (arrElement.currency === exchangeCurrency) {
            amount = arrElement.value;
        }
    }
    return sumUAH / amount;
}

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));