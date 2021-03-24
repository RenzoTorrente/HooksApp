import React, { useRef } from 'react';
import '../UseEfect/effect.css';
function FocuScreen(){
const inputref = useRef();
const handleFocus = ()=>{
inputref.current.focus();   
console.log(inputref);
}


    return (
        <>
        <input placeholder="Nombre" className="form-control" ref={inputref}/>
        <hr/>
        <button className="btn btn-primary" onClick={handleFocus}>Focus</button>
        </>
    );
}
export default  FocuScreen;
