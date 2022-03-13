/*import {useState, useContext} from 'react';
import { TradeContext } from '../../Context/TradeContext';
import {Link} from 'react-router-dom'



const Counter = ({coinsData}) => {

    const{addItem} = useContext(TradeContext);

    const [initial,setInitial] = useState(0);
    const handlerCounterUp = () => {
        if ((initial => 0) && (initial < coinsData.cantidad)){
            setInitial(initial + 1);
        }
    }

    const handlerCounterDown = () => {
        if(initial > 0){
            setInitial(initial -1);
        }
    }


  return (
    <div>
        <div>
            <button onClick={handlerCounterDown}>-</button>
            <p>{initial}</p>
            <button onClick={handlerCounterUp}>+</button>
        </div>

        <br/>

        <div>
            <button onClick={()=>{addItem(coinsData, initial)}}>Add To Trade</button>
            <button><Link to="../trade">Go To Trade</Link></button>
        </div>
    </div>
  )
};

export default Counter;
*/

//------------------------------------------------------------------------------------------------

import {useState, useContext} from 'react';
import { TradeContext } from '../../Context/TradeContext';
import {Link} from 'react-router-dom'

const Counter = (coinsData) => {

    const stock = 200;
    const initial = 1;
    const{addItem} = useContext(TradeContext);
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

<div>
        <div>
            <button onClick={handlerCounterDown}>-</button>
            <p>{initial}</p>
            <button onClick={handlerCounterUp}>+</button>
        </div>

        

        <div>
            <button onClick={()=>{addItem(coinsData)}}>Add To Trade</button>
            <button><Link to="../trade">Go To Trade</Link></button>
        </div>
    </div>
  )
};

export default Counter;

//-----------------------------------------------------------------------------

/*import React, {useState} from "react";




const counter = () => {

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
        <div className="counter">
            <h1>Monedas a adquirir</h1>
            <p>{counter}</p>
            <button onClick={handlerCounterUp}>+</button>
            <button onClick={handlerCounterDown}>-</button>
            
        </div>
    );
};

export default counter;

*/