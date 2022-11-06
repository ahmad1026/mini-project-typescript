import { TodoActions } from "./../actions/todoActions";
import { TodoActionTypes } from "../action-types/todos";
import { TodoSlice } from "../../interfaces/Todo";

const initState: TodoSlice = {
  FetchTodoStatus: "idel",
  AddTodoStatue: "idel",
  DeleteStatue: "idel",
  todos: [],
};

export const todoReducer = (
  state: TodoSlice = initState,
  action: TodoActions
): TodoSlice => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODOS_REQUEST:
      return {
        ...state,
        FetchTodoStatus: "pending",
      };
    case TodoActionTypes.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        FetchTodoStatus: "idel",
        todos: action.payload,
      };

    case TodoActionTypes.FETCH_TODOS_FAILURE:
      return {
        ...state,
        FetchTodoStatus: "rejected",
      };
    case TodoActionTypes.ADDTODO:
      return {
        ...state,
        AddTodoStatue: "idel",
        todos: [...state.todos, action.payload],
      };
    case TodoActionTypes.DELETETODO:
      return {
        ...state,
        todos: [...state.todos].filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};
