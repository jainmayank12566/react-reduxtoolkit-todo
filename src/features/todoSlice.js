import { createSlice,nanoid } from "@reduxjs/toolkit";
const initialState={
    todos:[
        {
            id:1,
            text:"HelloWorld",
            completed:false
        }
    ]
}
const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload,
                completed:false
            }
            state.todos.push(todo);
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload);
        },
        toggleComplete:(state,action)=>{
            state.todos=state.todos.map((todo)=>todo.id===action.payload?{...todo,completed:!todo.completed}:todo);
        },
        updateTodo:(state,action)=>{
            state.todos=state.todos.map((todo)=>todo.id===action.payload.id?action.payload.todo:todo);
        }
    }
})
export const {addTodo,removeTodo,toggleComplete,updateTodo}=todoSlice.actions;
export default todoSlice.reducer;