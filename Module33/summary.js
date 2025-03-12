// Object to JSON
const person = {
  name: 'Ameer Hamzah Daiyan',
  age: 23,
  occupation: 'MERN Developer',
  hobbies: ['Coding', 'Watching & Playing Football']
}

const newPerson1 = JSON.stringify(person);
console.log(newPerson1);

// JSON to Object
const newPerson2 = JSON.parse(newPerson1);
console.log(newPerson2);

// API (Syntax)
const handleLoadData = () => {
  fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json()).then(data => {
    console.log(data);
  });
}

// More API

// GET
const handleLoadDataOfUser = () => {
  fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(data => {
    displayDataOfUser(data);
  })
}

const displayDataOfUser = (users) => {
  const dataOfUserContainer = document.getElementById('details-of-users');

  for (let user of users) {
    const detailsOfUser = document.createElement('div');
    detailsOfUser.innerHTML = `
        <h3>${user.name}</h3>
        <p>${user.username}</p>
        <p>${user.email}</p>
        <p>${JSON.stringify(user.address)}</p>
        <p>${user.phone}</p>
        <p>${JSON.stringify(user.website)}</p>
        <p>${JSON.stringify(user.company)}</p>
        <p></p>
        `;
    dataOfUserContainer.appendChild(detailsOfUser);
  }
}

// UPDATE
const handleUpdateDataOfUser = () => {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

// POST
const handlePostDataOfUser = () => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

// Async-Await

const handleUser = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
  }
  catch {
    console.log('Error');
  }
}

handleUser();

// Interview Questions

// 1) What is an API?
// => An API (Application Programming Interface) allows communication between different software applications.

// 2) What are the HTTP methods supported by REST?
// => REST supports GET, POST, PUT, DELETE, PATCH, and OPTIONS methods.

// 3) Can you use GET request instead of PUT to create a resource?
// => No, GET is used to retrieve data, while PUT is for updating or creating resources.

// 4) What is the difference between PUT and POST? 
// => PUT updates/replaces a resource, while POST creates a new resource.

// 5) What is JSON? 
// => JSON (JavaScript Object Notation) is a lightweight data format for data exchange.

// 6) What are CRUD operations?
// => CRUD stands for Create, Read, Update, and Delete operations.

// 7) what is the file extension of JSON?
// => The file extension of JSON is .json.

// 8) What are the data types supported by JSON?
// => JSON supports strings, numbers, objects, arrays, booleans, and null.

// 9) What is the role of JSON.stringify?
// => JSON.stringify() converts a JavaScript object into a JSON string.

// 10) Show how to parse a JSON.
// => JSON.parse() converts a JSON string into a JavaScript object.

// 11) Tell us the difference between GET and POST
// => GET retrieves data, while POST sends data to create a resource.
