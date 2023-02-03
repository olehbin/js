let randomwordsandnumbers = ['wefpew', 2313 , 'ennovp', true , 12943 , 'paskuda' , '80' , false , 777 , 666 ]
    console.log(randomwordsandnumbers[0])
    console.log(randomwordsandnumbers[1])
    console.log(randomwordsandnumbers[2])
    console.log(randomwordsandnumbers[3])
    console.log(randomwordsandnumbers[4])
    console.log(randomwordsandnumbers[5])
    console.log(randomwordsandnumbers[6])
    console.log(randomwordsandnumbers[7])
    console.log(randomwordsandnumbers[8])
    console.log(randomwordsandnumbers[9])


let books = [
    {title: 'Harry Potter', pagecount:999 , genre:'Fantasy'},
    {title: 'Around the world for 80 days', pagecount: 269, genre: 'novel'},
    {title: 'The Witcher', pagecount: 574 , genre: 'novel'}
]
console.log(books)


let bookswithauthors = [
    {title: 'Harry Potter', pagecount:999 , genre:'Fantasy',author: [{name: 'Joanne Rowling', age: 57}]},
    {title: 'Around the world for 80 days', pagecount: 269, genre: 'novel',author: [{name: 'Jules Varne', age: 77 }]},
    {title: 'The Witcher', pagecount: 574, genre: 'novel', author: [{name: 'Andzrej Sapkowski',age: 74}]}
]
console.log(bookswithauthors)



let users = [
    {name:'vasyl',username:'vasiliy', password:123453},
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
console.log( users[0]['password'])
console.log( users[1]['password'])
console.log( users[2]['password'])
console.log( users[3]['password'])
console.log( users[4]['password'])
console.log( users[5]['password'])
console.log( users[6]['password'])
console.log( users[7]['password'])
console.log( users[8]['password'])
console.log( users[9]['password'])


let x = -3 ;
if (x !== 0) {
    console.log('Right')                        // при а=1 вірно , при 0 не вірно , при -3 теж вірно
}
else
    console.log('oh shit')

let time = +prompt('write your time(minutes) here');
if (time < 15) {
    console.log("it`s a first quarter of a hour");
}
else if (time < 30) {
    console.log('it`s a second quarter of a hour');
}
else if (time < 45) {
    console.log('it`s a third quarter of a hour');
}
else if (time < 60) {
    console.log('it`s a fourth quarter of a hour');
}
else {
    console.log('please.. number from 1 to 59!!!!!')
}


let day = +prompt('write any day number');
if (day === 0) {
    console.log('не існує нульового дня')
}
else if (day <= 10) {
    console.log('перша декада')
}
else if (day <= 20) {
    console.log('друга декада')
}
else if (day <= 31) {
    console.log('третя декада')
}
else {
    console.log('від 1 до 31!!!!!')
}

let number = +prompt('write number from 1 to 7 and get a day from monday to sunday');
    switch (number){
        case 1 :
            console.log('monday')
            break;
        case 2 :
            console.log('tuesday')
            break;
        case 3 :
            console.log('Wednesday')
            break;
        case 4 :
            console.log('Thursday')
            break;
        case 5 :
            console.log('Friday')
            break;
        case 6 :
            console.log('Saturday')
            break;
        case 7 :
            console.log('Sunday')
            break;
    }

    let firstnumber = +prompt('write first number');
    let secondnumber = +prompt('write second number');
     if (firstnumber > secondnumber) {
         console.log(firstnumber + ' bigger than ' + secondnumber)
     }
     else if (firstnumber < secondnumber) {
         console.log(secondnumber + ' bigger than ' + firstnumber)
     }
     else if (firstnumber === secondnumber) {
         console.log('ohhh... you write 2 similar numbers!!!')
     }
     else
         console.log('ohhh... just write random 2 numbers.. okay???')

// є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення
// змінної х являється falsy (хибноподібні, тобто приводиться до false)

let xxx = (null || 'default')

console.log(xxx)