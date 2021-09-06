import { useState } from "react/cjs/react.development"

export const useCounter = (initialState = 1) => {

    const [counter, setCounter] = useState(initialState);

    const increment = () => {
        setCounter (counter + 1);
    }

    return { 
        counter, 
        increment
    }
}
