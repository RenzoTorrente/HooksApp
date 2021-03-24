import React, { useEffect, useReducer, useState } from 'react';
import '../08-useReducer/styles.css';
import reductora from '../08-useReducer/reductora';
import useForm from '../hooks/useForm';

function TodoApp(){
function init(){
  if(JSON.parse(localStorage.getItem('todos')) != null){
      return  JSON.parse(localStorage.getItem('todos'));
  }else{
      return [];
  }
}
  let [formstate, setform] = useState({
    description:''
  });
  let {description}= formstate;
  function handleinputchange(e){
    e.preventDefault();
    
    setform({
        ... formstate,
        [e.target.name]: e.target.value, 
    });
   }
   function reset(){
       setform({...formstate, description : ''});
   }

    let [todos, dispatch] = useReducer(reductora,[],init);
    function HandleAddTodo(e){
    e.preventDefault();
    if(description.trim().length <= 1){
        return ;
    }
    const newTodo={
        id :new Date().getTime(),
        desc: description,
        done:false   
    }
    const action = {
        type : 'add',
        payload : newTodo
    }
    dispatch(action);
    reset();
    }
    useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos));
    },[todos]);
    function handledelete(remove){
    let action ={
    type: 'delete',
    payload: remove
    }
    dispatch(action);

    }
    function handletoggle(todoid){
        dispatch({
            type:'toggle',
            payload:todoid
        })
    }
    return (
     <>
     <h1>TodoApp ({todos.length})</h1>
     <hr/>
      <div className="row">
          <div className="col-7">
              <h3>Todos</h3>
              <ul>
         {
         todos.map((todo,i)=>(
       <li 
        key ={todo.id}
        className="list-group-item"
       >
       <p className={`${todo.done && 'complete'}`} onClick={()=>{handletoggle(todo.id)}}>{i + 1}- {todo.desc}</p>
       <button className="btn btn-danger" onClick={()=>handledelete(todo.id)}>
        Borrar 
       </button>
       </li>
         ))
         }
        </ul>
          </div>
          <div className="col-5">
            <h3>Agregar</h3>
            <hr/>
            <form onSubmit={HandleAddTodo}>
                <input type="text" name="description" value={description} onChange={handleinputchange}  placeholder="Aprender"/>
                <button type="submit" className="btn btn-outline-primary">Agregar</button>
            </form>
          </div>
      </div>
     </>
    )
}
export default TodoApp;
