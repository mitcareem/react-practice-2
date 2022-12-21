import React from "react";
import { motion } from "framer-motion"

const MyComponent = ({ isVisible }) => (
    <motion.div animate={{ opacity: isVisible ? 1 : 0.5 }}>Pesto</motion.div>
)
const App = () => {
    return (
        <div>
            <MyComponent isVisible={false} />
        </div>
    );
};

export default App;

