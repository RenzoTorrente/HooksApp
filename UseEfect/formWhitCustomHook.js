import React, {  useState } from 'react';
import '../UseEfect/effect.css';
import useForm from '../hooks/useForm';
function FormWhitCustomHook (){
 const [values, handleinputchange] = useForm({
 name : '',
 email:'',
 password:''
 });
const {name, email, password} = values;
 
    return (
        <>
        <h1>Form Whit Custom Hooks</h1>
        <hr/>
        <form>
        <input type="text" placeholder="Nombre" name="name" value={name} autoComplete='on' onChange={handleinputchange} />
        <br/>
        <input type="text" placeholder="user@gmail.com" name="email" value={email} onChange={handleinputchange}/>
         <br/>
         <input type="password" placeholder="password" name="password" value={password} onChange={handleinputchange}/>
        </form>
        </>
      
    );
}
export default FormWhitCustomHook;

