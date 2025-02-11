let sentence1 = "If a given string has either x, replace x by y. if the given string has X, replace it by Y."
let sentence2 = "";

for (let letter = 0; letter < sentence1.length; letter++) {
    if(sentence1[letter] === 'x') {
        sentence2 += 'y';
    }
    else if(sentence1[letter] === 'X') {
        sentence2 += 'Y';
    }
    else {
        sentence2 += sentence1[letter];
    }
}

console.log(sentence2);