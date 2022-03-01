let str = prompt('txt')

function reverseString(str) {
    
    let splitString = str.split("");
    
    let reverseArray = splitString.reverse(); 
    
    let joinArray = reverseArray.join(""); 
    return joinArray; 
}
//console.log(reverseString(str));

if (reverseString(str) == str) {
    console.log ('palindromo')
} else {
    console.log ('non palindromo')
}
//const myButton = document.getElementById('verificaPalindromo')
//myButton.addEventListener ('click', reverseString())
