let str = prompt('txt');
function reverseString(str) {
    
    let splitString = str.split("");
    
    let reverseArray = splitString.reverse(); 
    
    let joinArray = reverseArray.join(""); 
   /*  return joinArray;  */
    
    if (joinArray == str) {
        return true;
    } else {
        return false;
    } ; 
}

if (reverseString(str)) {
    document.getElementById('outputRisultato').innerHTML = 'PALINDROMO';
} else {
        document.getElementById('outputRisultato').innerHTML = 'NON PALINDROMO';
} ; 



document.getElementById('outputFrase').innerHTML = reverseString(str);






