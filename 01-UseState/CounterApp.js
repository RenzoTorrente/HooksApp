import React, { useState } from 'react';
import CustomCounter from './CounterWhitCustomApp';

function CounterApp (){
let [counter , setcounter] = useState(0);
    return (
        <>

         <h4>Counter {counter}</h4>
        <hr/>
        <button onClick={ function sum (){
         setcounter (counter + 1);
        }} className="btn btn-primary">+1</button>

        </>
    );
}
export default CounterApp;