const testo = prompt('testo');

function isPalindrom(testo) {
    let reverseParola = '';
    for (let i = 0; i < testo.length; i++){
        reverseParola = testo[i] + reverseParola;
        console.log(reverseParola)
    }

    if (testo == reverseParola){
        return true;
    } else {
        return false;
    }
}

if (isPalindrom(testo)) {
    console.log('palindromo')
} else {
    console.log('non palindromo')
}