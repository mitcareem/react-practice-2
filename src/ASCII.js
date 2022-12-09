import React, { useState } from "react";
import "./App.css";

const App = () => {
    const [count, setCount] = useState(65);
    const [letter, setLetter] = useState(String.fromCodePoint(count));
    return (
        <div className="App">
            <h1>{count}</h1>
            <button
                onClick={() => {
                    setCount(count + 1);
                    setLetter(String.fromCodePoint(count + 1));
                }}
            >
                Click Me
            </button>
            <h1>{letter}</h1>
        </div>
    );
};

export default App;
