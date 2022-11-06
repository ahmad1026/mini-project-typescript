import { TodoActionTypes } from "../action-types/todos";
import { TodoType } from "../../interfaces/Todo";

interface AddToDoAction {
  type: TodoActionTypes.ADDTODO;
  payload: TodoType;
}

interface DeleteToDoAction {
  type: TodoActionTypes.DELETETODO;
  payload: { id: string };
}

interface RquestTodos {
  type: TodoActionTypes.FETCH_TODOS_REQUEST;
}

interface FaildTodos {
  type: TodoActionTypes.FETCH_TODOS_FAILURE;
}

interface SucsessTodos {
  type: TodoActionTypes.FETCH_TODOS_SUCCESS;
  payload: TodoType[];
}

export type TodoActions =
  | AddToDoAction
  | DeleteToDoAction
  | RquestTodos
  | FaildTodos
  | SucsessTodos;
