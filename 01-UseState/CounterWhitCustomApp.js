import React, { useState } from 'react';
import UseDecAndIncre from './UseDecAndIncre';

function CustomCounter(){
const  {state,increment, decrement} = UseDecAndIncre();
    return (
    <>
    
     <h1>CounterWhitHook {state}</h1>
    
     <button onClick={increment} className="btn btn-primary">+1</button>
     <button  onClick={decrement} className="btn btn-primary">-1</button>

    </>
    );
}


export default CustomCounter;