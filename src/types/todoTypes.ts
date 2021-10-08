import moment from "moment";

export interface ITodo {
  id: string;
  title?: string;
  momentFrom?: moment.Moment;
  momentDue?: moment.Moment;
}

export interface ITodoState {
  todos: ITodo[];
  loading: boolean;
  error: string;
}

export enum ETodoActionType {
  SET_TODOS,
  SET_ERROR,
  SET_LOADING,
}

export interface ITodoActionSetTodos {
  type: ETodoActionType.SET_TODOS;
  payload: ITodo[];
}

export interface ITodoActionSetError {
  type: ETodoActionType.SET_ERROR;
  payload: string;
}

export interface ITodoActionSetLoading {
  type: ETodoActionType.SET_LOADING;
  payload: boolean;
}

export type TTodoAction =
  | ITodoActionSetTodos
  | ITodoActionSetError
  | ITodoActionSetLoading;
