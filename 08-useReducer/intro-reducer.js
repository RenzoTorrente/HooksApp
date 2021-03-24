const incialstate =[{
    id:1,
    done: false,
    todo: 'comprar pan'
}];

function ToDoreducer (state = incialstate, action){
    if(action?.type === 'agregar'){
     return [...state, action.payload];
    }
    return state;
}

const newTodo = [{
    id:2,
    done: false,
    todo: 'comprar leche'
}];

const action = {
    type: 'agregar',
    payload: newTodo,
}

let todos = ToDoreducer( incialstate, action);
console.log(todos);