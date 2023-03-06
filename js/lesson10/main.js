let batons = document.querySelectorAll('.btn')

batons.forEach(button => {
    button.addEventListener('click', function (){
        console.log('я просто розбирався з кверіселеткором')
    })
})


let form1 = document.forms.form1;
let name = form1.name;
let surname = form1.surname;
let age = form1.age;
let divBlock = document.createElement('div')
form1.onsubmit = function (ev) {
    ev.preventDefault()
    if (age.value > 13) {
        divBlock.append(name.value, ' ', surname.value, ' ', age.value, ' years old')
        document.body.append(divBlock)
    }
}
// є сторінка, на якій є блок, я кому знаходиьтся цифра.


    // написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
// є сторінка, на якій є блок, я кому знаходиьтся цифра.
// написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let lolBlock = document.getElementById('lol');
let teperValue = parseInt(localStorage.getItem('lol')) || 0;
let newValue1 = teperValue + 666;
lolBlock.textContent = newValue1;
localStorage.setItem('lol' , newValue1)

let array = [];
for (let i = 1; i < 144701; i++) {
    array.push({ index: i, name: `farsh ${i}` })}

let sunduk = document.getElementById('crate');
let pochatokId = 0;
displayItems(pochatokId);
let nextButton = document.getElementById('вперьод');
nextButton.addEventListener('click', () => {
    pochatokId = Math.min(pochatokId + 20, array.length - 20);
    displayItems(pochatokId);
});
let prevButton = document.getElementById('назад');
prevButton.addEventListener('click', () => {
    pochatokId = Math.max(pochatokId - 20, 0);
    displayItems(pochatokId);
});
function displayItems(pochatokId) {
    sunduk.innerHTML = '';
    for (let i = pochatokId; i < pochatokId + 20 && i < array.length; i++) {
        const item = array[i];
        let div = document.createElement('div');
        div.textContent = `number: ${item.index} orks: ${item.name}`;
        sunduk.appendChild(div);
    }
}