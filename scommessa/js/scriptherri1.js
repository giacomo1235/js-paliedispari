const elesRadio = document.querySelectorAll('input[name="number-type"]'); // non ritorna un vero array di elementi ma un qualcosa di simile
const eleNumber = document.getElementById('number')
const btnPlay = document.getElementById('play')
const eleSum = document.getElementById('sum')
const eleOutput = document.getElementById('output')

btnPlay.addEventListener('click', play); // play senza parentesi perchè non vogliamo eseguirlo in questo momento ma solo al click

function play() {
	let eleNumberType;
	for (let i = 0; i < elesRadio.length; i++) {
		if (elesRadio[i].checked) {
			eleNumberType = elesRadio[i];
		}
	}
	console.log('radio button', eleNumberType);
	const userNumberType = eleNumberType.value;
	console.log('userNumberType', userNumberType);
	const userNumber = parseInt(eleNumber.value);
	const randomNumber = getRandomBetween(1, 5);
	const sum = userNumber + randomNumber;
	eleSum.innerHTML = sum;
	console.log('somma', sum);

	let result;
	if (isEven(sum)) {
		result = 'pari';
	} else {
		result = 'dispari';
	}

	if (userNumberType == result) {
		eleOutput.innerHTML = 'Hai vinto';
	} else {
		eleOutput.innerHTML = 'Hai perso';
	}
}


/* funzioni */
function getRandomBetween(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function isEven(number) {
	if (number % 2 == 0) {
		return true;
	} else {
		return false;
	}
}