
const $card = document.getElementById('card');
const $date = document.getElementById('date');
const $cvv = document.getElementById('cvv');

const maskCard = '0000-0000-0000-0000';
const maskDate = '00/00';
const maskCvv = '000';

let current = '';

let cardNumber = [];
let dateNumber = [];
let cvvNumber = [];


$card.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        return;
    }
    e.preventDefault();
    handleInput(maskCard, e.key, cardNumber);
});


const handleInput = (mask, key, array) => {

};