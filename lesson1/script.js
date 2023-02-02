
// - Створити змінні. Присвоїти кожному з них значення:
//   'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.

    let hello = 'hello';
    let owu = 'owu';
    let com = 'com';
    let ua = 'ua';

    let number1 = 1;
    let number2 = 10;
    let number3 = -999;
    let number4 = 123;
    const PI = 3.14;
    let float = 2.7;
    let number5 = 16;

    let truth = true;
    let untruth = false;

//   Вивести кожну змінну за допомогою: console.log

    console.log(hello);
    console.log(owu);
    console.log(com);
    console.log(ua);
    console.log(number1);
    console.log(number2);
    console.log(number3);
    console.log(number4);
    console.log(PI);
    console.log(float);
    console.log(number5);
    console.log(truth);
    console.log(untruth);
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.

    const firstName = 'Marko';
    const middleName = 'Vasylovych';
    const lastName = 'Andrusiak';

//   З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

    const person = lastName + ' ' + firstName + ' ' + middleName;
    console.log(person);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;
    let a = 100; let b = '100'; let c = true;
    console.log(typeof a, a);
    console.log(typeof b, b);
    console.log(typeof c, c);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

    const userName = prompt("What is your name?", 'name');
    const userMiddleName = prompt("What is your middle name?", 'middle name');
    const userAge = +prompt("What is your age?", 'age');
    console.log(`User: ${userName} ${userMiddleName} is ${userAge} years old`);