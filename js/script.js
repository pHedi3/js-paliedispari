// parte funzioni e var di print
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


var userChoise = lowCaseWord( prompt('segli pari o dispari'))
while (userChoise != 'pari' && userChoise != 'dispari') {
    alert('devi scegliere pari o dispari')
    userChoise = lowCaseWord( prompt('segli pari o dispari'))
}

var userNumber = parseInt(prompt('inserisci un numero da 1 a 5'));
while(isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
    alert('devi inserire un numero corretto');
    userNumber = parseInt(prompt('inserisci un numero da 1 a 5'));
}

var tot = userNumber + randomNumber5();

if (('pari' == userChoise && tot % 2 == 0) || ('dispari' == userChoise && tot % 2 != 0 ) ) {
    resultElement2.innerHTML = 'hai vinto'
} else {
    resultElement2.innerHTML = 'hai perso'
}


