import React, { useLayoutEffect, useRef } from 'react';
import UseDecAndIncre from '../01-UseState/UseDecAndIncre';
import useFetch from '../hooks/useFetch';
import '../UseLayoutEffect/layout.css';
function Layout(){
const ptag = useRef();
 const {counter,increment} = UseDecAndIncre(1);
  const {data} = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`);
   if(data !== null){
       var { quote} = data[0];
   }
   console.log(  quote);
   useLayoutEffect(()=>{
   console.log(ptag.current.getBoundingClientRect());
   },[data]);
    return (
   <div>
   <h1>Layout effects</h1>
    <blockquote className="blockquote text-right">
    <p ref={ptag}>{quote}</p>
    </blockquote>
   <button className="btn btn-primary" onClick={increment}>
       Next Quote
   </button>
   
   </div>
    )
}

export default Layout;