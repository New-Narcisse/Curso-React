
const initialState = [{
    id: 1,
    todo: 'Find the soul stones',
    done: false,
} ]


const todoReducer = ( state = initialState, action ) => {



    return state;
}


let todos = todoReducer();

console.log(todos);