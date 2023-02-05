import React, { useState, memo } from "react";

const Name = memo(() => {
    return (
        <div>
            <h1>Name </h1>
        </div>
    )
})



const App = () => {
    const [value, setValue] = useState("");
    const [list, setList] = useState([]);
    return (
        <div>
            <h1>Messages</h1>
            <input
                type="text"
                onChange={(e) => {
                    setValue(e.target.value);
                    setList([...list, value]);
                }}
            />

            <ul>
                {list.map((item) => {
                    return <li key={`item-${Date.now()}`}>{item}</li>;
                })}
            </ul>
            <Name />
        </div>
    );
};

export default App;

