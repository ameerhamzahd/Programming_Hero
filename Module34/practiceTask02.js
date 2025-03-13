function tellJoke() {
    console.log(`Why don't scientist trust atoms? Beacuse they make up everything!`);
}

let counter = 0;

const jokeInterval = setInterval(() => {
    tellJoke();
    counter++;

    if (counter >= 5) {
        clearInterval(jokeInterval);
    }
}, 2000);