import React, { useState } from 'react'
import { store } from "./observer";

const App = () => {
    const [state, setState] = useState(store.count)
    store.subscribe(setState)
    return (
        <div>
            <h1>{state}</h1>
            <button onClick={e => store.increment()}>INC</button>
        </div>
    )
}

export default App
