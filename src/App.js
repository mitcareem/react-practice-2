import React from "react";
import User from "./Error/User";
import ErrorBoundary from "./Error/ErrorBoundary";

const App = () => {

    return (
        <div>
            <h1>Hello from App!</h1>
            <ErrorBoundary>
                <User />
            </ErrorBoundary>
        </div>
    );
};

export default App;
