import React, {useState} from "react";




const Contador = () => {

    const stock = 200;
    const initial = 1;
    
    const [counter, setCounter] = useState(1);
        
    const handlerCounterUp = () => {
        if (counter < stock){
            setCounter(counter + 1);
        }
    };
    const handlerCounterDown = () => {
        if (counter > initial){
            setCounter(counter - 1);
        }
    };

    

    return (
        <div className="Contador">
            <h1>Monedas a adquirir</h1>
            <p>{counter}</p>
            <button onClick={handlerCounterUp}>+</button>
            <button onClick={handlerCounterDown}>-</button>
            
        </div>
    );
};

export default Contador;