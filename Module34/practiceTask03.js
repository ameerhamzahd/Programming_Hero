const loadData = async () => {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
        const data = await response.json();

        console.log(`Two SQL tables sit at the bar. A query approaches and asks "Can I join you?"`);
        console.log(data);
    }

    catch {
        console.log('Error');
    }
}

loadData();