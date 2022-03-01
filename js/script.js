/* let str = prompt('txt')

function reverseString(str) {
    
    let splitString = str.split("");
    
    let reverseArray = splitString.reverse(); 
    
    let joinArray = reverseArray.join(""); 
    return joinArray; 
} */
//console.log(reverseString(str));

/* if (reverseString(str) == str) {
    console.log ('palindromo')
} else {
    console.log ('non palindromo')
} */
//const myButton = document.getElementById('verificaPalindromo')
//myButton.addEventListener ('click', reverseString())


//utente sceglie pari o dispari
// utente sceglie numero da 1 a 5
// funzione numero random
// somma =  numero utente  + numero random
// if somma = scelta utente --> vinto
// else perso

const sceltaUtente = prompt('pari o dispari?')
const numeroUtente = parseInt(prompt('scegli un numero da uno a cinque'))
console.log(sceltaUtente)
function getRandomNum() {
    return Math.floor(Math.random() * 5);
}



let numeroRandom = getRandomNum() ;
console.log(numeroUtente)

console.log(numeroRandom)
let somma = numeroRandom + numeroUtente ;
console.log(somma)


function oddEven (numeroRandom, numeroUtente) {
     if (somma % 2 == 0) {

         console.log('pari')
     } else {
         console.log('dispari')
     }
}
/* let pari = false
let dispari = false
fin tanto che pari = true e scelta utente = pari --> utente vince 
else if pari = false e scelta utente = pari --> utente perde
else if dispari = true e sceltautente == pari -- utente vince 
else --> utente perde
 */

