import { ETodoActionType, ITodo, TTodoAction } from "../../types/todoTypes";
import { Dispatch } from "redux";
import { TRootState } from "../store";

export function setError(error: string): TTodoAction {
  return { type: ETodoActionType.SET_ERROR, payload: error }
}

export function setLoading(loading: boolean): TTodoAction {
  return { type: ETodoActionType.SET_LOADING, payload: loading }
}

export function setTodos(todos: ITodo[]): TTodoAction {
  return { type: ETodoActionType.SET_TODOS, payload: todos }
}

export function fetchTodos() {
  return async function(dispatch: Dispatch, getState: () => TRootState) {
    
  }
}