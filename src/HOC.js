import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0)
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </>
    );
}

function HOC(props) {
    return (
        <div style={{ color: "red" }}>
            <props.component />
        </div>
    );
}
export const App = () => {
    return (
        <div>
            <HOC component={Counter}></HOC>
        </div>
    );
};

export default App;
