import React ,{ useState } from "react";
function useForm(inicialState = {}){
let [values, setValues] = useState(inicialState);
function resetear (){
    setValues(inicialState);
}
function handleinputchange(e){
    setValues({
        ... values,
        [e.target.name]: e.target.value, 
    });
   }
   return [values, handleinputchange, resetear];
}
export default useForm;