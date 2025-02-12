let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

for(let index in myObject) {
    let type = typeof myObject[index];

    console.log("key: " + index + " | type: " + type);
}