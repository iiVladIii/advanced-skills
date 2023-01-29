import {useState} from "react";
import cl from './Counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>{count}</h1>
            <button className={cl.button} onClick={() => setCount(() => count + 1)}>increment</button>
            <button className={cl.button} onClick={() => setCount(() => count - 1)}>decrement</button>
        </div>
    );
};

