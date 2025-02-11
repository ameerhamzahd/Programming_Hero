let counter = 0;
const sentence = "Count how many times a string has the letter 'a'";

for(let letter of sentence)
{
    if(letter.toLowerCase() === 'a')
    {
        counter++;
    }
}

console.log(counter);