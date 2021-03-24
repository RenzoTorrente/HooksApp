import React, { useContext } from 'react';
import {ContextCreado} from '../09-useContext/UserContext';

function Login(){
  const {state, setState} = useContext(ContextCreado);
  console.log(state);
    return (
    <>
    <h3>Login Page</h3>
    {JSON.stringify(state)}
    <button className="btn btn-outline-primary" onClick={()=> setState({
        user: 'Raul',
        profesion:'Astronauta'
    })}>Cambiar estado</button>
    
    </>
    );
}
export default Login;