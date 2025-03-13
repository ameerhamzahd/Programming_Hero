// Creating a PROMISE
const fetchData = () => {
    return new Promise((resolve, reject) => {
        const status = true;
        if (status) {
            const mockData = {
                json: () => Promise.resolve({ name: 'Ameer Hamzah Daiyan' })
            }
            resolve(mockData);
        }
        else {
            reject('Error');
        }
    })
}

fetchData()
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error ));

// Promise.all
const URLs = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/comments/1',
    'https://jsonplaceholder.typicode.com/albums/1',
    'https://jsonplaceholder.typicode.com/photos/1',
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/users/1'
]

Promise.all(URLs.map(url => {
    return fetch(url)
                .then(response => response.json())
                .then(data => data)
}))
    .then(response => response)
    .then(data => console.log(data))
    .catch(error => console.log(error))

// Async & Await
const loadData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();

        console.log(data);
    }

    catch {
        console.log('Error');
    }
}

loadData();

// setTimeout()
setTimeout(() => {
    console.log('Hello World')
}, 3000)

// setInterval()
let counter = 0;

const clockId = setInterval(() => {
    counter++;
    console.log(counter);

    if(counter >= 8) {
        clearInterval(clockId)
    }
}, 3000);

// Interview Questions
// 1. Tell me something about JS engine v8 internal mechanism.
// => It is a high-performance JavaScript engine that compiles JavaScript into machine code for faster execution.

// 2. What is event loop in JavaScript?
// => A mechanism that handles asynchronous operations and executes code after the call stack is cleared.

// 3. If javascript is single threaded, how does it handle asynchronous call?
// => It uses an event loop, callback queue, and Web APIs to handle asynchronous tasks.

// 4. Differences between setTimeOut and SetInterval
// => setTimeout runs a function once after a delay, while setInterval runs a function repeatedly at specified intervals.

// 5. Can you explain the difference between an async function and a regular function in JavaScript?
// => An async function always returns a promise and allows await, while a regular function executes synchronously.

// 6. What's the error handling strategy for promises that were rejected while awaiting?
// => Use try...catch for handling rejected promises in async functions.

// 7. What are the states of a promise?
// => Pending, Fulfilled, Rejected.

// 8. Can you explain what the .then() method does?
// => Used to handle resolved promises and execute code after the promise is fulfilled.
