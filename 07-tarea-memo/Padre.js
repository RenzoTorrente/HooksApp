import React, { useCallback } from 'react'
import { Hijo } from './Hijo'
import { useState } from 'react';

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    const incrementar = useCallback( ( num ) => {
        setValor( c=>  c + num )
    },[setValor]);
     const buendia = <h1>Buenos dias</h1>

    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>
            {buendia}
            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
               
            }
            {/* <Hijo /> */}
        </div>
    )
}
export default Padre;