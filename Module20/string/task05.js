let sentence1 = "Capitalize Every first Letter of each word in a String.";
let sentence2 = "";

for (let letter = 0; letter < sentence1.length; letter++) {
    if(letter === 0)
    {
        sentence2 += sentence1[letter].toUpperCase();
    }
    else if(sentence1[letter] === ' ') {
        sentence2 += ' ' + sentence1[letter + 1].toUpperCase();
        letter++;
    }
    else {
        sentence2 += sentence1[letter];
    }
}

console.log(sentence2);