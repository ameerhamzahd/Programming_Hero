import { useState } from "react"

export default function Counter() {
    const counterStyle = {
        border: '2px solid maroon'
    }

    const [count, setCount] = useState(0);

    const handleArithmeticOperations = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    return (
        <div style = {counterStyle}>
            <h3>Count: {count}</h3>
            <button onClick={handleArithmeticOperations}>Add</button>
        </div>
    )
}