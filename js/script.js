function isPalindrom(word) {
    var reversWord = word.split("").reverse().join("")
    if (word == reversWord) {
        return true;
    } else {
        return false;
    }
}
function randomNumber5() {
    return Math.floor((Math.random() * 5) + 1 );
}
function lowCaseWord(fixedword) {
    return fixedword.slice(0).toLowerCase()
}


var resultElement1 = document.getElementById('result1');
var resultElement2 = document.getElementById('result2');


// parte del palindromo
var userWord = prompt('inserici una parola, vediamo se è palindroma')

if (isPalindrom(userWord)) {
    resultElement1.innerHTML = 'la parola è palindroma'
} else {
    resultElement1.innerHTML = 'la parola non è palindroma'
}

// parte del pari
var userNumber = parseInt(prompt('inserisci un numero'));
var userChoise = prompt('segli pari o dispari')
var mod = 0;

while(isNaN(userNumber)) {
    alert('devi inserire un numero');
    userNumber = parseInt(prompt('inserisci un numero'));
}


if ('pari' == lowCaseWord(userChoise) ) {
    mod = 2;
} else if ('dispari' == lowCaseWord(userChoise)) {
    mod = 3;
} else {
    alert('devi fare una scelta')
}

var tot = userNumber + randomNumber5();

if (tot % mod == 0) {
    resultElement2.innerHTML = 'hai vinto'
} else {
    resultElement2.innerHTML = 'hai perso'

}