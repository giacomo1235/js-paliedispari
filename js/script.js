/*  let str = prompt('txt');

function reverseString(str) {
    
    let splitString = str.split("");
    
    let reverseArray = splitString.reverse(); 
    
    let joinArray = reverseArray.join(""); 
    return joinArray; 
}
console.log(reverseString(str));

if (reverseString(str) == str) {
    console.log ('palindromo')
} else {
    console.log ('non palindromo')
} ;
 */

// esercizio 2

const sceltaUtente = prompt('pari o dispari?')
const numeroUtente = parseInt(prompt('scegli un numero da uno a cinque'))
console.log(sceltaUtente)
function getRandomNum() {
    return Math.floor(Math.random() * 5);
}



let numeroRandom = getRandomNum() ;
console.log(numeroUtente);

console.log(numeroRandom);
let somma = numeroRandom + numeroUtente ;
console.log(somma);

function oddEven (numeroRandom, numeroUtente) {
    if (somma % 2 == 0) {
        return 'pari'
    }
    return 'dispari'
    
}

let pariDispari = oddEven()
 
if (sceltaUtente == 'pari' && pariDispari == 'pari') {
    console.log('win')
} else if (sceltaUtente == 'dispari' && pariDispari == 'dispari') {
    console.log('win')
} else {
    console.log('perso')
}


