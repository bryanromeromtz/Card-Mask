
const $card = document.getElementById('card');
const $date = document.getElementById('date');
const $cvv = document.getElementById('cvv');

// definiendo el cuantos caracteres son validos para cada input
const maskCard = '0000-0000-0000-0000';
const maskDate = '00/00';
const maskCvv = '###';

// variable para almacenar los caracteres
let current = '';

// guardar los caracteres en el array
let cardNumber = [];
let dateNumber = [];
let cvvNumber = [];

const handleInput = (mask, key, array) => {
    // definimos el arreglo con todas las teclas permitidas || esta variable solo permite que se ingresen numeros
    let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    if (key === 'Backspace' && array.length > 0) {
        // si presionamos la tecla backspace, eliminar el ultimo caracter
        array.pop();
        return;
    }
    // si la tecla presionada es esta en mi arreglo de numeros y si el arreglo es menor o igual a la longitud del mask
    if (numbers.includes(key) && array.length + 1 <= mask.length) {
        // y si en la el arreglo encuentra un separador como "-" o "/"  
        if (mask[array.length] === '-' || mask[array.length] === '/') {
            // si el caracter es un guion o una barra, agregarlo al array y el key que se ingrese
            array.push(mask[array.length], key);
        } else {
            // si no solamente agregar el key
            array.push(key);
        }
    }

};


// escuchar cuando se presiona una tecla
$card.addEventListener('keydown', (e) => {
    // si presionamos la tecla tab, no hacer nada
    if (e.key === 'Tab') {
        return;
    }
    // e.preventDefault() evita que se realice la accion por defecto
    e.preventDefault();
    // esta funcion permite almacenar los caracteres que se presionan en la caja de texto
    handleInput(maskCard, e.key, cardNumber);
    // unimos los valores en el arreglo
    $card.value = cardNumber.join('');
});

$date.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        return;
    }
    e.preventDefault();
    handleInput(maskDate, e.key, dateNumber);
    $date.value = dateNumber.join('');
});