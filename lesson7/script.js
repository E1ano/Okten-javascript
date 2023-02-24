// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const alex = new User(1, "Alex", "Bush", "alex2bush@gmail.com", "0667854361");
console.log(alex);
// створити пустий масив, наповнити його 10 об'єктами new User(....)
const users = [
    new User(1, "Alex", "Bush", "user1@gmail.com", "0667854361"),
    new User(2, "John", "Smith", "user2@gmail.com", "0667854362"),
    new User(9, "Olga", "Williams", "user3h@gmail.com", "0667854363"),
    new User(4, "Ruslan", "Brown", "user4@gmail.com", "0667854364"),
    new User(5, "Arsen", "Jones", "user5@gmail.com", "0667854365"),
    new User(6, "Yura", "Garcia", "user6@gmail.com", "0667854366"),
    new User(7,"Alex", "Bush", "user7@gmail.com", "0667854367"),
    new User(8, "Max", "Miller", "user8@gmail.com", "0667854368"),
    new User(3, "Vika", "Davis", "user9@gmail.com", "0667854369"),
    new User(10, "Anna", "Rodriges", "user10@gmail.com", "0667854371")
];
console.log(users);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

const evenUsers = users.filter(item => item.id % 2 === 0);
console.log(evenUsers);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
users.sort((a,b) => a.id - b.id);
console.log(users);
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client

const clients = [
    new Client(1, "Alex", "Bush", "user1@gmail.com", "0667854361", ["cap"]),
    new Client(2, "John", "Smith", "user2@gmail.com", "0667854362", ["cap", "t-shirt", "jacket"]),
    new Client(9, "Olga", "Williams", "user3h@gmail.com", "0667854363", ["cap", "t-shirt"]),
    new Client(4, "Ruslan", "Brown", "user4@gmail.com", "0667854364", ["cap"]),
    new Client(5, "Arsen", "Jones", "user5@gmail.com", "0667854365", ["cap", "t-shirt", "jacket"]),
    new Client(6, "Yura", "Garcia", "user6@gmail.com", "0667854366", ["cap", "t-shirt", "jacket"]),
    new Client(7,"Alex", "Bush", "user7@gmail.com", "0667854367", ["cap"]),
    new Client(8, "Max", "Miller", "user8@gmail.com", "0667854368", ["cap", "t-shirt"]),
    new Client(3, "Vika", "Davis", "user9@gmail.com", "0667854369", ["cap", "t-shirt", "jacket"]),
    new Client(10, "Anna", "Rodriges", "user10@gmail.com", "0667854371", ["cap", "t-shirt"])
];

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
clients.sort((a, b) => a.order.length - b.order.length);
console.log(clients);
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Car(model, creator, yearCreation, maxSpeed, engineVolume) {
    this.model = model;
    this.creator = creator;
    this.yearCreation = yearCreation;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    this.info = function () {
        for (const key in this) {
            if(typeof this[key] !== "function") {
                console.log(`${key}: ${this[key]}`);
            }
        }
    }

    this.increaseMaxSpeed = function (newSpeed) {
        if (newSpeed > this.maxSpeed) {
            this.maxSpeed = newSpeed;
        }
    }

    this.changeYear = function (newValue) {
        this.yearCreation = newValue;
    }

    this.addDriver = function (driver) {
        this.driver = driver;
    }

}

// Або описати так :
//
// Car.prototype.drive = function () {
//     console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
// }
//
// Car.prototype.info = function () {
//     for (const key in this) {
//         console.log(`${key}: ${this[key]}`);
//     }
// }
//
// Car.prototype.increaseMaxSpeed = function (newSpeed) {
//     this.maxSpeed = newSpeed;
// }
//
// Car.prototype.changeYear = function (newValue) {
//     this.yearCreation = newValue;
// }
//
//
// Car.prototype.addDriver = function (driver) {
//     this.driver = driver;
// }

const passat = new Car('Passat', 'Wolsvagen', 2002, 140, 1.9);
passat.drive();
passat.info();
passat.increaseMaxSpeed(180);
passat.changeYear(2023);
passat.addDriver('alex');
console.log(passat);
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car2 {

    constructor(model, creator, yearCreation, maxSpeed, engineVolume) {
        this.model = model;
        this.creator = creator;
        this.yearCreation = yearCreation;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        for (const key in this) {
            if(typeof this[key] !== "function") {
                console.log(`${key}: ${this[key]}`);
            }
        }
    }

    increaseMaxSpeed(newSpeed) {
        if (newSpeed > this.maxSpeed) {
            this.maxSpeed = newSpeed;
        }
    }

    changeYear(newValue) {
        this.yearCreation = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

const arrayOfCinderellas = [
    new Cinderella('Inna', 18, 35),
    new Cinderella('Anna', 17, 34),
    new Cinderella('Vika', 16, 36),
    new Cinderella('Nastya', 15, 34),
    new Cinderella('Solomia', 19, 36),
    new Cinderella('Katya', 20, 37),
    new Cinderella('Oksana', 21, 34),
    new Cinderella('Bogdanna', 22, 36),
    new Cinderella('Alina', 16, 36),
    new Cinderella('Olya', 17, 35),
];
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Prince extends Cinderella {
    constructor(name, age, footSize) {
        super(name, age, footSize);
    }
}

const Julian = new Prince('Julian', 23, 37);
console.log(Julian);

for (const element of arrayOfCinderellas) {
    if (element.footSize === Julian.footSize) {
        console.log(`Попелюшка ${element.name} повинна бути з принцом ${Julian.name}`);
    }
}

console.log(arrayOfCinderellas.find(item => item.footSize === Julian.footSize));