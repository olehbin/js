//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
let users = [
    {name:'task1',username:'task1', password:'task1'},
    {name: 'olga', username: 'helga', password: 589230},
    {name: 'kolya', username: 'nikolaus', password: 921723},
    {name: 'andrew', username: 'andrzej', password: 537289},
    {name: 'sofia', username: 'sonya', password: 576123},
    {name: 'lesya', username:'lesia', password: 891236},
    {name: 'alex', username: 'aleksi', password: 172489},
    {name: 'viktoria', username: 'vikus', password: 781694},
    {name: 'taras', username: 'tarik', password: 912643},
    {name: 'daria', username: 'dasha', password: 672122}
]
for (let i = 0; i < users.length; i++) {
    let user = users[i]
        document.write(`<div><ul>
${user.name} - ${user.username} - ${user.password}
</ul></div>`)
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

let userio = [
    {name:'task2',username:'task2', password:'task2'},
    {name: 'olga', username: 'helga', password: 589230},
    {name: 'kolya', username: 'nikolaus', password: 921723},
    {name: 'andrew', username: 'andrzej', password: 537289},
    {name: 'sofia', username: 'sonya', password: 576123},
    {name: 'lesya', username:'lesia', password: 891236},
    {name: 'alex', username: 'aleksi', password: 172489},
    {name: 'viktoria', username: 'vikus', password: 781694},
    {name: 'taras', username: 'tarik', password: 912643},
    {name: 'daria', username: 'dasha', password: 672122}
]
for (let x = 0; x < userio.length; x++) {
    let user = userio[x]
    document.write(`<li>${user.name}</li>`)
}


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let bojrbnrp = [
    'task3', 40688 , 'inponbptrn' , '43t34on' , true , 'pnbrbnrpt' ,79568405 , 'dkbntrobntrpm', 'tbyujkop[ybujpjo'
];
let c = 0;
while (c < bojrbnrp.length) {
    let rognbi = bojrbnrp[c];
    document.write(`<h2>${rognbi}</h2>`);
    c++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let usertop = [
    {name:'task4',username:'task4'},
    {name: 'olga', username: 'helga'},
    {name: 'kolya', username: 'nikolaus'},
    {name: 'andrew', username: 'andrzej'},
    {name: 'sofia', username: 'sonya'},
    {name: 'lesya', username:'lesia'},
    {name: 'alex', username: 'aleksi'},
    {name: 'viktoria', username: 'vikus'},
    {name: 'taras', username: 'tarik'},
    {name: 'daria', username: 'dasha'}

]
let v = 0;
while (v < usertop.length) {
    let ptbjr = usertop[v];
    document.write(`<h1> ${usertop[v].name} - ${usertop[v].username}</h1>`)
    v++;
}
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
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
document.write(`<p>html</p>`)
for (let listOfItem of listOfItems) {
    document.write(`<div><li>${listOfItem}</li></div>`)
}

// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту


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
for (let b = 0; b < products.length; b++) {
    let product = products[b];
    document.write(`<div>
<h2>${product.title} - ${product.price} UAH</h2>
<img src="${product.image}" alt="lol">
</div>`)
}


// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років

let players = [
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
for (let player of players) if (player.status === true)
{
    document.write(<h1>${player.name} - ${player.status}</h1>`)
}

let bobras = [
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
for (let bobra of bobras) {
if (bobra.status === false) {
    document.write(`<h1>${bobra.name} - ${bobra.status}</h1>`)
}
    }
let lenovos = [
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
for (let lenovo of lenovos) {
if (lenovo.age > 30) {
    document.write(`<li>${lenovo.name} - ${lenovo.age}</li>`)
    }
}