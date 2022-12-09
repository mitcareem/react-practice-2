import { useState } from "react";

function useCounter(value) {
    const [count, setCount] = useState(value);
    const increment = () => {
        setCount(count => count + 1);
    }

    const decrement = () => {
        setCount(count => count - 1)
    }

    const reset = () => {
        setCount(count => 0)
    }

    return [count, increment, decrement, reset];
}

export default useCounter;