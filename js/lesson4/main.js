function SOne (side1 , side2) {
    let result = side1 * side2;
    console.log('S = ' + result)
    return result;
}
SOne(4,6)
function STwo (Radius) {
    let result = 2 * 3.14 * Radius;
    console.log('S = ' + result);
    return result;
}
STwo(10)
function SThree (Radius , height) {
    let p = 3.141;
    let result = 2 * p * Radius * (Radius + height);
    console.log('S = ' + result);
    return result;
}
SThree(7, 12)

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
function arraywriter(array) {
    for (const arrayElement of array) {
        console.log(arrayElement)
    }
}
arraywriter(users);

function pWriter(p) {
    document.write(`<div>
<p>${p}</p>
</div>`);
}
pWriter('karma')

function licreator(text) {
    document.write(`<ul> 
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li> 
        </ul>`)
}
licreator('bad karma');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li
// визначається другим аргументом, який є числовим (тут використовувати цикл)
function manylicreator(text, lenght) {
    document.write('<ul>');
    for (let i = 0; i < lenght; i++) {
document.write(`<li>${text}</li>`)
    }
    document.write('</ul>');
}
manylicreator('inbrvper', 3)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let primitiveArray = ['iorbnrbt', 70568,'tyjnutujnyujtny',true , 'yujuyjtyun','tyrbjtyjrestawt', 856768, false , 'lol'  ]
function primitive(primitive) {
    document.write('<h1>Список примітивів</h1>')
        document.write(`<h2>${primitive}</h2>`)
    }
primitive(primitiveArray)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let userio = [
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
function lolz(name, age, index) {
    document.write('<ul>')
    for (const user of userio) {
        if (user.name) {
            document.write(`<div><li>${user.name}</li></div>`)
        }
    }
    document.write('</ul>')
    document.write('<ul>')
    for (const user of userio) {
        if (user.age) {
            document.write(`<div><li>${user.age}</li></div>`)
        }
    }
    document.write('</ul>')
    document.write('<ul>')
    for (const user of userio) {
        if (user.index) {
            document.write(`<div><li>${user.index}</li></div>`)
        }
    }
    document.write('</ul>')
}
lolz(userio.name , )

function returnMiNumber(...number){
    console.log(Math.min(...number))
    return Math.min(...number)
}
returnMiNumber(689457, 853475934, 89573573894, 89649183, 7,10,5)

let sum = [111,222,333,444]
function calculator(numbers) {

    let chest = 0;
    for (const num of numbers) {
        chest = chest + num;
    }
        console.log(chest)
        return chest;
}
calculator(sum)

function swap(arr, index1, index2) {
 console.log(arr,index1 , index2 );
 console.log(arr[1],arr[0],arr[2],arr[3])
}
swap([11,22,33,44],0,1)

function exchange(sumUAH,currencyValues,exchangeCurrency) {
    if (exchangeCurrency === 'USD') {
        let fromusdtouah = sumUAH * currencyValues[0].value
        console.log(fromusdtouah)
    }
    else if(exchangeCurrency === 'EUR') {
        let fromeurtouah = sumUAH * currencyValues[1].value
        console.log(fromeurtouah)
    }
    }
exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'EUR')