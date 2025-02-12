let counter = 0;

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

for(let properties in student){
    counter++;
}

console.log(counter);