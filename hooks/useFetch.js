import React from 'react';
import { useEffect, useState } from 'react';

function useFetch(url){
const [state, setState] = useState({
    data: null, loading:true, error:null
});
useEffect(()=>{
  
    fetch(url)
    .then(resp => resp.json())
    .then(data =>{
      setState({
         error:null,
         loading:false,
         data:data
      })
    })
},[url]);
    return state

}
export default useFetch;