import React from 'react';
import { useState } from 'react';

function useCounter(inicial){
let [counter, setCounter] = useState(inicial);

let increment = ()=>{
    setCounter(counter + 1);
}
let decrement = ()=>{
    setCounter(counter - 1);
}
return{
    counter,
    increment,
    decrement
}
}
export default useCounter;