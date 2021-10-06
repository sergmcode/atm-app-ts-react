import moment from "moment";

export interface ITodo {
  id: string;
  title: string;
  momentFrom: moment.Moment;
  momentDue: moment.Moment;
}

export interface ITodoState {
  todoList: ITodo[];
  loading: boolean;
  error: string;
}