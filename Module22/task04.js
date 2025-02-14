function longestWord(str, length) {
    let count = 0;
    let temp = 0;

    for (let letter of str) {
        if (letter === ' ') {
            if (temp > count) {
                count = temp;
            }

            temp = 0;
        }
        else {
            temp++;
        }
    }

    let words = str.split(' ');
    
    for(let word of words) {
        if(word.length === count) {
            return word;
        }
    }
}

let sentence = 'I am learning Programming to become a programmer';
let length = sentence.length;
let result = longestWord(sentence, length);

console.log(result);