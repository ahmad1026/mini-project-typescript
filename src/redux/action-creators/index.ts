import { TodoType } from "../../interfaces/Todo";
import { TodoActionTypes } from "./../action-types/todos";
import { Dispatch } from "redux";
import { TodoActions } from "../actions/todoActions";

export const addTodo = (todo: TodoType) => {
  return (dispatch: Dispatch<TodoActions>) => {
    dispatch({
      type: TodoActionTypes.ADDTODO,
      payload: todo,
    });
  };
};

export const deleteTodo = (id: string) => {
  return (dispatch: Dispatch<TodoActions>) => {
    dispatch({
      type: TodoActionTypes.DELETETODO,
      payload: { id },
    });
  };
};

/*************  fetch todos  ************************************** */

const requestGetTodos = (): TodoActions => ({
  type: TodoActionTypes.FETCH_TODOS_REQUEST,
});

const sucsessGetTodos = (todos: TodoType[]): TodoActions => ({
  type: TodoActionTypes.FETCH_TODOS_SUCCESS,
  payload: todos,
});
const faildGetTodos = (): TodoActions => ({
  type: TodoActionTypes.FETCH_TODOS_FAILURE,
});

export const boundRequestTodos = () => {
  return async (dispatch: Dispatch<TodoActions>) => {
    dispatch(requestGetTodos());
    return fetch("http://localhost:3001/todos")
      .then((res) => res.json())
      .then((json) => dispatch(sucsessGetTodos(json)))
      .catch((e) => dispatch(faildGetTodos()));
  };
};

/*************    add todo ******************************** */

const requestAddTodos = (): TodoActions => ({
    type: TodoActionTypes.FETCH_TODOS_REQUEST,
  });
  
  const sucsessAddTodos = (todos: TodoType[]): TodoActions => ({
    type: TodoActionTypes.FETCH_TODOS_SUCCESS,
    payload: todos,
  });
  const faildAddTodos = (): TodoActions => ({
    type: TodoActionTypes.FETCH_TODOS_FAILURE,
  });
  
  export const boundRequestAddTodos = () => {
    return async (dispatch: Dispatch<TodoActions>) => {
      dispatch(requestGetTodos());
      return fetch("http://localhost:3001/todos")
        .then((res) => res.json())
        .then((json) => dispatch(sucsessGetTodos(json)))
        .catch((e) => dispatch(faildGetTodos()));
    };
  };


/***********  delete Todo  ******************************** */
