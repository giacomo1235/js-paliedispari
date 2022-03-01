
const sceltaUtente = prompt('pari o dispari?')
const numeroUtente = parseInt(prompt('scegli un numero da uno a cinque'))
console.log(sceltaUtente)
console.log(numeroUtente);


function getRandomNum() {
    return Math.floor(Math.random() * 5);
};

let numeroRandom = getRandomNum() ;

console.log(numeroRandom);

let somma = numeroRandom + numeroUtente ;

console.log(somma);
let pari = false;

function oddEven () {
    if (somma % 2 == 0) {
        console.log('pari');
        let  pari = true;
    } else {
        console.log('dispari');
    };  
};

let pariDispari = oddEven();
 
if (sceltaUtente == 'pari' && pari == true) {
    console.log('win')
} else if (sceltaUtente == 'dispari' && pari == false) {
    console.log('win')
} else {
    console.log('perso')
}


