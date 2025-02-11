const sentence = "Check whether a string contains all the vowels 'a, e, i, o, u'"
let a = 0; e = 0; i = 0, o = 0, u = 0;

for (let letter of sentence) {
    if (letter.toLowerCase() === 'a') {
        a++;
    }
    else if (letter.toLowerCase() === 'e') {
        e++;
    }
    else if (letter.toLowerCase() === 'i') {
        i++;
    }
    else if (letter.toLowerCase() === 'o') {
        o++;
    }
    else if (letter.toLowerCase() === 'u') {
        u++;
    }
}

if (a >= 1 && e >= 1 && i >= 1 && o >= 1 && u >= 1) {
    console.log('The string contains all the vowels.')
}
else {
    console.log('The string does not contain all the vowels.')
}