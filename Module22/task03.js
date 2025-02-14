function vowelCounter(str, length) {
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E' , 'I', 'O', 'U'];
    for (let character of str) {
        if (vowels.includes(character.toLowerCase()) || vowels.includes(character.toUpperCase())) {
            count++;
        }
    }

    return count;
}

let sentence = 'Ameer Hamzah Daiyan';
let length = sentence.length;
let result = vowelCounter(sentence);

console.log(result);