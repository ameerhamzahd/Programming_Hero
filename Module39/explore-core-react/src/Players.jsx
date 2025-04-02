import { useState, useEffect } from "react";

export default function Player() {

    const [player, setPlayer] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setPlayer(data))
    }, []);

    return (
        <div className="card">
            <h4>Players: {player.length}</h4>

            {
                player.map(plyr => <li>{plyr.name}</li>)
            }
        </div>
    )
}
