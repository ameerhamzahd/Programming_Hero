import { useState } from "react";

export default function ToggleText() {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? "Hide Text" : "Show Text"}
            </button>
            {isVisible && <p>"Hello, React Learner!"</p>}
        </div>
    )
}