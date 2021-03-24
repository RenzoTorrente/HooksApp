import React, { useState } from 'react';
import AppRouter from './Approuter';
import {ContextCreado} from '../09-useContext/UserContext'
function Main(){
    const [state, setState] = useState({})
    return (
        <>
     <ContextCreado.Provider value={{
         state,
         setState
     }}>
    <AppRouter></AppRouter>
    </ContextCreado.Provider>   
   </>
    );
   
}
export default Main;