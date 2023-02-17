let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';
console.log(str1.length, str2.length, str3.length)

console.log(str1.toUpperCase(),str2.toUpperCase(),str3.toUpperCase())

let str4 = 'HELLO WORLD';
let str5 = 'LOREM IPSUM';
let str6 = 'JAVASCRIPT IS COOL';
console.log(str4.toLowerCase(), str5.toLowerCase(), str6.toLowerCase())

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let dirtystr = ' dirty string   '
console.log(dirtystr.substring(1,13))

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    // let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str = 'Ревуть воли як ясла повні';
console.log(str.split(' '))

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let numsy = [10,8,-7,55,987,-1011,0,1050,0];
let numsintostr = numsy.toString();
console.log(numsintostr.replaceAll(',',' '))

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
    // let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11,21,3,78,23,76,87,12,456,987,321,45,1,85,342,786];
function sortNumber(direction){
if(direction === 'ascending') {
    let ascendingsort = nums.sort((a, b) => a - b)
    console.log(ascendingsort)
    }
if(direction === 'descending') {
let descendingsort = nums.sort((a,b) => b - a)
    console.log(descendingsort)
    }
}

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let descending = coursesAndDurationArray.sort((a, b) => {
    return b.monthDuration - a.monthDuration ;
})
console.log(descending)
let durationmorethanfivemonth = coursesAndDurationArray.filter(u => u.monthDuration > 5)
console.log(durationmorethanfivemonth)
let coursesAndDurationArrayPlusIndex = coursesAndDurationArray.map((u,index) => {
    return {id: index + 1, title: u.title ,monthDuration: u.monthDuration };
})
console.log(coursesAndDurationArrayPlusIndex)


// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//

let cardpack = [
    {cardSuit:'spade',
        value: '6',
        color: 'black'},
    {cardSuit:'diamond',
        value: '6',
        color: 'red'},
    {cardSuit:'heart',
        value: '6',
        color: 'red'},
    {cardSuit:'clubs',
        value: '6',
        color: 'black'},
    {cardSuit:'spade',
        value: '7',
        color: 'black'},
    {cardSuit:'diamond',
        value: '7',
        color: 'red'},
    {cardSuit:'heart',
        value: '7',
        color: 'red'},
    {cardSuit:'clubs',
        value: '7',
        color: 'black'},
    {cardSuit:'spade',
        value: '8',
        color: 'black'},
    {cardSuit:'diamond',
        value: '8',
        color: 'red'},
    {cardSuit:'heart',
        value: '8',
        color: 'red'},
    {cardSuit:'clubs',
        value: '8',
        color: 'black'},
    {cardSuit:'spade',
        value: '9',
        color: 'black'},
    {cardSuit:'diamond',
        value: '9',
        color: 'red'},
    {cardSuit:'heart',
        value: '9',
        color: 'red'},
    {cardSuit:'clubs',
        value: '9',
        color: 'black'},
    {cardSuit:'spade',
        value: '10',
        color: 'black'},
    {cardSuit:'diamond',
        value: '10',
        color: 'red'},
    {cardSuit:'heart',
        value: '10',
        color: 'red'},
    {cardSuit:'clubs',
        value: '10',
        color: 'black'},
    {cardSuit:'spade',
        value: 'jack',
        color: 'black'},
    {cardSuit:'diamond',
        value: 'jack',
        color: 'red'},
    {cardSuit:'heart',
        value: 'jack',
        color: 'red'},
    {cardSuit:'clubs',
        value: 'jack',
        color: 'black'},
    {cardSuit:'spade',
        value: 'queen',
        color: 'black'},
    {cardSuit:'diamond',
        value: 'queen',
        color: 'red'},
    {cardSuit:'heart',
        value: 'queen',
        color: 'red'},
    {cardSuit:'clubs',
        value: 'queen',
        color: 'black'},
    {cardSuit:'spade',
        value: 'king',
        color: 'black'},
    {cardSuit:'diamond',
        value: 'king',
        color: 'red'},
    {cardSuit:'heart',
        value: 'king',
        color: 'red'},
    {cardSuit:'clubs',
        value: 'king',
        color: 'black'},
    {cardSuit:'spade',
        value: 'ace',
        color: 'black'},
    {cardSuit:'diamond',
        value: 'ace',
        color: 'red'},
    {cardSuit:'heart',
        value: 'ace',
        color: 'red'},
    {cardSuit:'clubs',
        value: 'ace',
        color: 'black'},
];
// - знайти піковий туз
cardpack.forEach(u => {
    if(u.cardSuit === 'spade'){
        if(u.value === 'ace'){
            console.log(u)
        }
    }
})
// - всі шістки
cardpack.forEach(u => {
    if(u.value === '6'){
        console.log(u)
    }
})
// - всі червоні карти
cardpack.forEach(u => {
    if(u.color === 'red'){
        console.log(u)
    }
})
// - всі буби
cardpack.forEach(u => {
    if(u.cardSuit === 'diamond'){
        console.log(u)
    }
})
// - всі трефи від 9 та більше
cardpack.forEach(u => {
    if(u.value === '10'){
        if (u.cardSuit === 'clubs'){
            console.log(u)
        }
    }
    if(u.value > '8') {
        if(u.cardSuit === 'clubs'){
            console.log(u)
        }
    }
})
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
console.log(cardpack.reduce((accumulator,value) => {
    if(value.cardSuit === 'spade'){
        accumulator.spade.push(value);
    }
    if(value.cardSuit === 'diamond'){
        accumulator.diamond.push(value);
    }
    if(value.cardSuit === 'heart'){
        accumulator.heart.push(value);
    }
    if(value.cardSuit === 'clubs'){
        accumulator.clubs.push(value);
    }
    return accumulator;
},{spade:[],diamond:[],heart:[],clubs:[]}))

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
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
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
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

coursesArray.every(value => {
  if (value === value.modules){
      console.log(value)
  }
})
let sassfinder = coursesArray.filter(u => u.modules.includes('sass'))
console.log(sassfinder)
let dockerfinder = coursesArray.filter(u => u.modules.includes('docker'))
console.log(dockerfinder)

