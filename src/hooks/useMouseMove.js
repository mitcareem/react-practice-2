import { useState, useEffect } from "react";

function useMouseMove() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    useEffect(() => {
        function handler(event) {
            const { clientX, clientY } = event;
            setX(clientX);
            setY(clientY);
        }
        window.addEventListener("mousemove", handler);

        return () => window.removeEventListener("mousemove", handler);
    });

    return [x, y];
}

export default useMouseMove;
