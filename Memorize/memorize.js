import React, { useMemo, useState } from 'react';
import { useCouter } from '../hooks/useCouter';

export const Memorize = () => {

    const { counter, increment } =  useCouter( 400 );
    const [ show, setShow ] = useState(true);
     const procesopesado = function(number){
      for(let i =0; i< number; i++){
        console.log('simulando carga pesada');
      }
     }
   let pesadomemory =  useMemo(()=>
       procesopesado(counter), [counter]
     );
    return (
        <div>
            <h1>Counter:{counter} </h1>
            <hr />

          <p>{pesadomemory}</p>
            <button 
                className="btn btn-primary"
                onClick={ increment }
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary ml-3"
                onClick={ () => {
                    setShow( !show );
                }}
            >
                Show/Hide { JSON.stringify( show ) }
            </button>

        </div>
    )
}
export default Memorize;


