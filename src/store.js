import { configureStore, createSlice } from '@reduxjs/toolkit';

// createSlice 사용
const toDos = createSlice({
    name: "toDosReducer",
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push({ text: action.payload, id: Date.now() });
        },
        remove: (state, action) => state.filter(toDo => toDo.id !== action.payload)
    }
});

// createSlice 사용
export const { add, remove } = toDos.actions;

export default configureStore({reducer: toDos.reducer}); 

// redux toolkit 을 사용하지 않았을 때
// const ADD = 'ADD'; 
// const DELETE = 'DELETE'; 
// const addTodo = text => {
//     return {
//         type: ADD, 
//         text 
//     };
// };
// const deleteTodo = id => {
//     return {
//         type: DELETE,
//         id: parseInt(id)
//     }
// }

// const reducer = (state = [], action) => {
//     // console.log(action)
//     switch (action.type) {

//         // redux toolkit 을 사용하지 않았을 때
//         // case ADD:
//         //     return [{ text: action.text, id: Date.now() }, ...state];
//         // case DELETE:
//         //     return state.filter(toDo => toDo.id !== action.id);

//         // redux toolkit 사용 (1번)
//         case addTodo.type:
//             return [{ text: action.payload, id: Date.now() }, ...state];
//         case deleteTodo.type:
//             return state.filter(toDo => toDo.id !== action.payload);
//         default: 
//             return state;
//     }
// };

// redux toolkit 사용
// const addTodo = createAction('ADD');
// const deleteTodo = createAction('DELETE');

// redux toolkit 사용 (2번, 더 간단, good!!!)
// const reducer = createReducer([], {
//     [addTodo]: (state, action) => {
//         state.push({ text: action.payload, id: Date.now() });
//     },
//     [deleteTodo]: (state, action) => 
//         state.filter(toDo => toDo.id !== action.payload)
// });

// 기본 redux, redux toolkit 사용
// export const actionCreators = {
//     addTodo, 
//     deleteTodo,
// };