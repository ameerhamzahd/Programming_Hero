import { useState } from "react";

export default function Batsman() {
    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);

    const handleSingles = () => {
        const updatedRuns = runs + 1; 
        setRuns(updatedRuns);
    }

    const handleSixes = () => {
        const updatedRuns = runs + 6;
        const updatedSixes = sixes + 1;
        setSixes(updatedSixes);
        setRuns(updatedRuns);
    }

    return (
        <div>
            <h3>Player: Ameer Hamzah Daiyan</h3>
            <p>Six: {sixes}</p>
            <h1>Score: {runs}</h1>
            <button onClick={handleSingles}>Single</button>
            <button onClick={handleSixes}>Six</button>
        </div>
    )
}