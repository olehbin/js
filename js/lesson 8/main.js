// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User (id,name,surname,email,phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.number = phone;
}
let usersarray = [
new User(1,'Oleh','Binas','lewonator@gmail.com','+380969873582'),
new User(7,'Pier','Aubameyang','npvkrtv@gmail.com','+380964678590'),
new User(3,'Olga','Yakubova','mbvrt;brt@gmail.com','+380969873582'),
new User(2,'Andre','Sukre','[rjbomrtb]@gmail.com','+380969873582'),
new User(4,'Oleksiy','Melnyk','bmlmr;br@gmail.com','+380969873582'),
new User(10,'Phil','Foden','ebrtkbrb[@gmail.com','+380967983654'),
new User(5,'Omar','Hayam','buieveer@gmail.com','+380969873582'),
new User(9,'Mason','Mount','fbtpnopbnriopbnt@gmail.com','+380939768554'),
new User(6,'Oskar','Lebron','nvlbtpm@gmail.com','+380969873582'),
new User(8,'Kai','Havertz','vnfoir@gmail.com','+380969873582')
]; 
console.log(usersarray)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filtered = usersarray.filter(value => value.id % 2 === 0 );
console.log(filtered)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let sorter = usersarray.sort((a,b) => a.id - b.id)
console.log(sorter)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client]
class Client {
    constructor(id,name,surname,email,phone,order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.number = phone;
        this.order = order
    }
}
let clientsarray = [
    new Client(1,'Oleh','Binas','leworbotevw@gmail.com','+380969873582',['beer','airpods','back to Italy']),
    new Client(7,'Pier','Aubameyang','npvkrtv@gmail.com','+380964678590',['plushy bunny','airpods','manga"Chainsaw Man"']),
    new Client(3,'Olga','Yakubova','mbvrt;brt@gmail.com','+380969873582',['beer','table','pillow']),
    new Client(2,'Andre','Sukre','[rjbomrtb]@gmail.com','+380969873582',['beer','airpods','shirt']),
    new Client(4,'Oleksiy','Melnyk','bmlmr;br@gmail.com','+380969873582',['football shoes','prof. ball','socks']),
    new Client(10,'Phil','Foden','ebrtkbrb[@gmail.com','+380967983654',['new club','socks','some trophies','tie']),
    new Client(5,'Omar','Hayam','buieveer@gmail.com','+380969873582',['beer','pants']),
    new Client(9,'Mason','Mount','fbtpnopbnriopbnt@gmail.com','+380939768554',['mouse carpet','pc mouse']),
    new Client(6,'Oskar','Lebron','nvlbtpm@gmail.com','+380969873582',['beer','airpods','pc table']),
    new Client(8,'Kai','Havertz','vnfoir@gmail.com','+380969873582',['T-shirt','airpods'])
];
console.log(clientsarray)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clientsarray.sort((a,b) => b.order.length - a.order.length))

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model,creator, year, maxSpeed, V__engine) {
    this.model = model;
    this.creator = creator;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.V__engine = V__engine;
    this.drive = function() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км/год`)
    }
    console.log(this.info = `${this.model} - model | ${this.creator} - creator | ${this.year} - year | ${this.maxSpeed} - maxSpeed | ${this.V__engine} - V__engine`)


    this.increaseMaxSpeed = function(newSpeed){
        this.maxSpeed = newSpeed
    }
    this.newValue = function (newYear){
        this.year = newYear
    }
}
let car1 = new Car('mustang','ford',2006,360,5.2)
car1.drive()
console.log(car1)
car1.increaseMaxSpeed(400)
car1.newValue(2020)
car1.driver = {name:'Yohan',age:32}

    // - (Те саме, тільки через клас)
class Cars {
    constructor(model, creator, year, maxSpeed, V__engine) {
        this.model = model;
        this.creator = creator;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.V__engine = V__engine;
            console.log(`їдемо зі швидкістю ${this.maxSpeed} км/год`)
        this.increasedMaxSpeed = function (newSpeed){
            this.maxSpeed = newSpeed
        }
        this.newValue = function (newYear){
            this.year = newYear
        }
    }
}

let cars1 = new Cars('Toyota Camry','Toyota',2018,240,2.8)
console.log(cars1)
cars1.increasedMaxSpeed(300)
cars1.newValue(2020)
cars1.driver = {name:'Andre',age:90}

//     -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// class Popelushka {
//     constructor(name,age,footSize)
//     {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//     class Prince extends Popelushka{
//         constructor(name,age,neededShoeSize){
//             super(name,age)
//             this.neededShoeSize = neededShoeSize
//             if(Charmles.neededShoeSize === maybepopelushka.footSize){
//                 console.log(maybepopelushka.name)
//             }
//         }
//     }
//
// let maybepopelushka = [
//     new Popelushka('Lisa', 21, 38),
//     new Popelushka('Bella', 24, 40),
//     new Popelushka('Helga', 17, 39),
//     new Popelushka('Lesia', 23, 42),
//     new Popelushka('Andriy', 21, 40),
//     new Popelushka('Cassie', 22, 38),
//     new Popelushka('Sonya', 19, 39),
//     new Popelushka('Daria', 18, 36),
//     new Popelushka('Billie', 20, 40),
//     new Popelushka('Anna', 18, 37)
// ]
// let Charmles = new Prince('Charmles',36,36)
// console.log(maybepopelushka)
// console.log(Charmles)

class Popelushka {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince extends Popelushka {
    constructor(name, age, neededShoeSize) {
        super(name, age);
        this.neededShoeSize = neededShoeSize;
        for (let popelushky of maybepopelushka) {
            if (popelushky.footSize === this.neededShoeSize) {
                console.log(popelushky.name +' cправжня попелюшка');
            }
        }
    }
}
let maybepopelushka = [
    new Popelushka('Lisa', 21, 38),
    new Popelushka('Bella', 24, 40),
    new Popelushka('Helga', 17, 39),
    new Popelushka('Lesia', 23, 42),
    new Popelushka('Andriy', 21, 40),
    new Popelushka('Cassie', 22, 38),
    new Popelushka('Sonya', 19, 39),
    new Popelushka('Daria', 18, 36),
    new Popelushka('Billie', 20, 40),
    new Popelushka('Anna', 18, 37),
];
let prince = new Prince('Oleh', 36, 36);
console.log(prince);
let Popelushkafinder = maybepopelushka.filter(u => u.footSize === prince.neededShoeSize)
console.log(Popelushkafinder)