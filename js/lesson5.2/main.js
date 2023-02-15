let SOne = (a, b) => (a * b);
console.log(SOne(7 , 9))

let STwo = (radius) => (2 * Math.PI * radius);
console.log(STwo(12))

let SThree = (radius , height) => (2 * Math.PI * radius * (radius + height));
console.log(SThree(9, 9))

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
let ArrayWriter = (array) => (array)
console.log(ArrayWriter(users))

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let Pcreator = (p) => {
    document.write(`<p>${p}</p>`)
};
Pcreator('ERENYAGERR')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let Threeli = (text) => {
    document.write('<ul>')
    for (let i = 0; i < 3; i++) {
    document.write(`<li>${text}</li>`)
    }
    document.write('</ul>')
}
Threeli('lol')

// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим
let liCreator = (text ,amount) => {
    for (let i = 0; i < amount; i++){
document.write(`<ul><li>${text}</li></ul>`)
    }
}
liCreator('carpe diem memento mori', 5)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let listbuilder = (arr) => (console.log(arr))
listbuilder(['rgbr','lol','kek',523,1,6,true,false ])

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,' + '
// та виводить їх в документ. Для кожного об'єкту окремий блок.
 let x =  [
        {name: 'vasya', age: 31, index: 1},
        {name: 'petya', age: 30, index: 2},
        {name: 'kolya', age: 29, index: 3},
        {name: 'olya', age: 28, index: 4},
        {name: 'max', age: 30, index: 5},
        {name: 'anya', age: 31, index: 6},
        {name: 'oleg', age: 28, index: 7},
        {name: 'andrey', age: 29, index: 8},
        {name: 'masha', age: 30, index: 9},
        {name: 'olya', age: 31, index: 10},
        {name: 'max', age: 31, index: 11}
    ];
let userid = () => {
    document.write('<ul>')
    for (const user of x) {
        if (user.name)
            document.write(`<div><li>${user.name}</li></div>`)
    }
    document.write('</ul>')
    document.write('<ul>')
    for (const user of x) {
        if (user.age) {
            document.write(`<div><li>${user.age}</li></div>`)
        }
    }
    document.write('</ul>')
    document.write('<ul>')
    for (const user of x) {
        if (user.index) {
            document.write(`<div><li>${user.index}</li></div>`)
        }
    }
    document.write('</ul>')
}
userid(x.name,x.age,x.index)

// - створити функцію яка повертає найменьше число з масиву
let minNumber = (...MyArray) =>  console.log(Math.min(...MyArray))
minNumber(90,34,45,76,90,243,6,8,2,90)
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
let sumofnumbers = (...numbers) => {
    let crate = 0;
    for (const num of numbers) {
        crate = crate + num ;
    }
    console.log(crate)
    return crate;
}
sumofnumbers(93,414,2144,564)

let swap = (arr, index1, index2) => {
    let x1 = arr[index1];
    let x2 = arr[index2];
    arr[index1] = x2;
    arr[index2] = x1;
    return arr;
}
console.log(swap([11,22,33,44], 0,1))

let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    if (exchangeCurrency === 'USD') {
    let fromusdtouah = sumUAH * currencyValues[0].value
    console.log(fromusdtouah)}
    else if(exchangeCurrency === 'EUR') {
        let fromeurtouah = sumUAH * currencyValues[1].value
        console.log(fromeurtouah)
    }
}
exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'EUR')