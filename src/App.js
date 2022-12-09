import React, { useState, createContext, useContext } from "react";

const CheckboxInterface = createContext(null);

const Checkbox = ({ children }) => {
    const [checked, setChecked] = useState(true);
    return (
        <CheckboxInterface.Provider
            value={{
                checked,
                setChecked,
            }}
        >
            {children}
        </CheckboxInterface.Provider>
    );
};

const InputCheckbox = () => {
    const { checked, setChecked } = useContext(CheckboxInterface)
    return (
        <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
        />
    );
};

const Label = ({ children }) => {
    const { setChecked } = useContext(CheckboxInterface)
    return (
        <label onClick={() => setChecked((state) => !state)}>{children}</label>
    );
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
