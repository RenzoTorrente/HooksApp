
import React, { useEffect } from 'react';
function Message(){
  useEffect(()=>{
   console.log('Componente Montado');
   return () =>{
   console.log('Componente Desmontado');
   }
  },[]);
    return (
 <h1>Eres un gran programador</h1>
    );
};
export default Message;
