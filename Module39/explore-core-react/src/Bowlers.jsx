import { useState } from "react"

export default function Bowler() {
    const [wickets, setWickets] = useState(0);
    const [overs, setOvers] = useState(0);
    const [delivery, setDelivery] = useState(0);

    const handleWicket = () => {
        setWickets(wickets + 1);
    }

    const handleDelivery = () => {
        const updatedDelivery = delivery + 1;
        if (updatedDelivery === 6) {
            setOvers(overs + 1);
            setDelivery(0);
        } else {
            setDelivery(updatedDelivery);
        }
    }

    return (
        <div>
            <h3>Player: Ameer Hamzah Daiyan</h3>
            <p>Wickets: {wickets}</p>
            <h1>Overs: {overs}</h1>
            <p>Delivery: {delivery}</p>
            <button onClick={handleDelivery}>Delivery</button>
            <button onClick={handleWicket}>Wicket</button>
        </div>
    )
}