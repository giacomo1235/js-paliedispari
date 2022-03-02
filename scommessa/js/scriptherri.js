
/* 

const userNumberType = prompt('pari o dispari?').toLowerCase();

const userNumber = parseInt(prompt('numero tra 1 e 5'));

const randomNumber = getRandomBetween (1, 5);

const sum = userNumber + randomNumber;
let result = '';
if (isEven(sum)) {
    result = 'pari';
} else {
    result = 'dispari';
}

if (userNumberType == result) {
    console.log('win')
} else {
    console.log('lost')
}
*/

function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
};

function isEven(number) {
    if (number % 2 == 0) {
        return true;
    } else {
        return false;
    }
};


const elesRadio = document.querySelectorAll('input[name="number-type"]');
const eleNumber = document.getElementById('number');
const btnPlay = document.getElementById('play');
const eleSum = document.getElementById('sum');
const eleOutput = document.getElementById('output');

btnPlay.addEventListener('click', play);

function play() {
    let eleNumbertype;
    for (let i = 0; i < elesRadio.length; i++) {
        if (elesRadio[i].checked) {
            eleNumbertype = elesRadio[i];
    }
}
    const userNumberType = eleNumbertype.value;
    const userNumber = eleNumber.value;
    const randomNumber = getRandomBetween(1, 5);
    const sum = userNumber + randomNumber;
    eleSum.innerHTML = sum;

    let result;

    if (isEven(sum)) {
        result = 'pari';
    } else {
        result = 'dispari';
    }
    
    if (userNumberType == result) {
        eleOutput.innerHTML = 'win';
    } else {
        eleOutput.innerHTML = 'lost';
    }

}
