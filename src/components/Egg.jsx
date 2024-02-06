import React, { useState } from "react";
import "./Egg.css";
import Counter from "./Counter";

function Egg() {
    const [clickCounter, setClickCounter] = useState(0);

    const handleClick = () => {
        setClickCounter(prevCounter => prevCounter + 1);
    };

    return(
        <>
            <Counter clickCounter={clickCounter} />
            <img className="egg" id="egg" src="https://png.pngtree.com/png-clipart/20230307/ourmid/pngtree-isolated-egg-on-transparent-background-png-image_6636091.png" alt="egg" onClick={handleClick} />
        </>
    );
}

export default Egg;