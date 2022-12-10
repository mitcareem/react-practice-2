import React, { useState } from "react";
import "./App.css";
// import Component from "./Component";

const Component = React.lazy(() => import("./Component"));
// React.lazy postponed this import till the point this function is called!

function loader() { // hack for eagerly loading 
    import("./Component");
}

const App = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="App">
            <h1 onMouseOver={loader} onClick={() => setShow(!show)}>App Component</h1>
            <React.Suspense fallback={<div>Loading...</div>}>
                {show && <Component />}
            </React.Suspense>
        </div>
    );
};

export default App;
