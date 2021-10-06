import { ITodoState } from "../../types/todoTypes";

const initialState: ITodoState = {
  todoList: [],
  loading: false,
  error: "",
}

export const todoReducer = 
  (state: ITodoState = initialState, action: any): ITodoState => {
    switch(action.type){

      default:
        return state
    }
  
}