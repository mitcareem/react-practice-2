import React, { useState } from "react";

const Checkbox = ({ children }) => {
    const [checked, setChecked] = useState(true);

    const all = React.Children.map(children, (child) => {
        // console.log(child)
        if (typeof child.type !== "function") {
            return child;
           
        }
        // console.log(child);
        const clone = React.cloneElement(child, {
            checked,
            setChecked,

        })
        return clone;
    })
    return all;
}

const InputCheckbox = ({ checked, setChecked }) => {
    return (
        <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
        />
    );
};

const Label = ({ setChecked, children }) => {
    return <label onClick={() => setChecked(state => !state)}>{children}</label>;
};

const App = () => {
    

    return (
        <div>
            <Checkbox>
                <InputCheckbox />
                <br />
                <Label>Check box label</Label>
            </Checkbox>
        </div>
    );
};

export default App;
