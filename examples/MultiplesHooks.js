import React from 'react';
import UseDecAndIncre from '../01-UseState/UseDecAndIncre';
import useFetch from '../hooks/useFetch';
function MultiplesHooks(){
 const {counter,increment} = UseDecAndIncre(1);
  const {loading, data} = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`);
   if(data !== null){
       var {author , quote} = data[0];
   }
   console.log( author, quote);
    return (
   <div>
   <h1>Breaking Bad Qoutes</h1>
   {
    loading 
    ?
    (
    <div className="alert alert-info text-center">
       Loading...
     </div>
    )
    :
    (
        <blockquote className="blockqoute text-right">
        <p>{quote}</p>
        <footer className="blockqoute-footer">{author}</footer>
       </blockquote>
    )
       
   }
   <button className="btn btn-primary" onClick={increment}>
       Next Quote
   </button>
   
   </div>
    )
}

export default MultiplesHooks;