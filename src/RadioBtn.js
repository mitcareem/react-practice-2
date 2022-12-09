import React from "react";

import styles from "./style.module.css";

function RadioBtn(props) {
    return (
        <label>
            {props.children}
            <input type="radio" name={props.name} />
        </label>
    );
}

function RadioGroup(props) {
    return React.Children.map(props.children, (child) => {
        React.cloneElement(child, { name: props.name })
    })
}

export const App = () => {
    return (
        <div className={styles.App}>
            <RadioGroup name="group-1">
                <RadioBtn>Option 1</RadioBtn>
                <RadioBtn>Option 1</RadioBtn>
                <RadioBtn>Option 1</RadioBtn>
            </RadioGroup>
        </div>
    );
};

export default App;
