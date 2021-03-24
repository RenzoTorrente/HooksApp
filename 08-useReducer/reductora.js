 function reductora (state=[], action){

    switch(action.type){
     case  'add':
    return[...state, action.payload];
     case 'delete':
     return state.filter(todo => todo.id !== action.payload);
     case 'toggle':
         return state.map(todo =>{
         if(todo.id === action.payload){
            console.log(state);
          return{...todo, done: !todo.done}
         }else{
             return todo;
         }
         });
        default:
            return state;
    }
}
export default reductora;