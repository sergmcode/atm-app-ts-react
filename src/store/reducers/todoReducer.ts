import { ETodoActionType, ITodoState, TTodoAction } from "../../types/todoTypes";

const initialState: ITodoState = {
  todos: [],
  error: "",
  loading: false,
}

export const todoReducer = 
  (state: Readonly<ITodoState> = initialState, 
    action: Readonly<TTodoAction>): ITodoState => {
    switch(action.type){
      case ETodoActionType.SET_TODOS:
        return { ...state, todos: action.payload }
      case ETodoActionType.SET_ERROR:
        return { ...state, error: action.payload }
      case ETodoActionType.SET_LOADING:
        return { ...state, loading: action.payload }
      default:
        return state
    }
}