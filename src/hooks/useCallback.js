import React, { useCallback, useState } from "react";

const App = () => {
    const [state] = useState(8);
    const [count, setCount] = useState(0);


    function time(num) {
        console.log("time is called!");
        return num * num;
    }

    const value = useCallback(() => time(state), [state]);
    // console.log(value)
    return (
        <div>
            <h1>{value()}</h1>
            <p>Counter-------{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
};

export default App;
