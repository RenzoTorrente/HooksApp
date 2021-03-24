import React, { useContext } from 'react';
import {ContextCreado} from '../09-useContext/UserContext';
function Home(){
const userContext = useContext(ContextCreado);
    return (
    <>
    <p>{userContext.price}</p>
    <h3>Bienvenido a la home</h3>
    </>
    );
}
export default Home;