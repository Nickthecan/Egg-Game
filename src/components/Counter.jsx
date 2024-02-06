import React from "react";
import "./Egg.css";

function Counter({ clickCounter }) {
    return(
        <h1 className="CounterDisplay" id="CounterDisplay">{clickCounter}</h1>
    );
}

export default Counter;