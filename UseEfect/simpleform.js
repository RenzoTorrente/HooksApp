import React, { useEffect, useState } from 'react';
import '../UseEfect/effect.css';
import Message from './message';
function SimpleForm (){
 const [formstate, setformstate] = useState({
 name : '',
 email:''
 });
const {name, email} = formstate;
useEffect(() =>{
    console.log('renderizado');
},[email])
 function handleinputchange(e){
    
  setformstate({
      ... formstate,
      [e.target.name]: e.target.value, 
  });
 }
    return (
        <>
        <h1>UseEffect</h1>
        <hr/>
        <form>
        <input type="text" placeholder="Nombre" name="name" value={name} autoComplete='on' onChange={handleinputchange} />
        <br/>
        <input type="text" placeholder="user@gmail.com" name="email" value={email} onChange={handleinputchange}/>

        </form>
        {(name == '123') && <Message/>}
        </>
      
    );
    
}
export default SimpleForm;