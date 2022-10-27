import { TodoActions } from './../actions/todoActions';
import { TodoActionTypes } from "../action-types/todos";
import { TodoSlice } from "../../interfaces/Todo";

const initState: TodoSlice = {
  AddStatue: "idel",
  DeleteStatue: "idel",
  todos: [],
};

export const todoReducer = (
  state: TodoSlice = initState,
  action: TodoActions
): TodoSlice => {
  const { type, payload } = action;
  switch (type) {
    case TodoActionTypes.ADDTODO:
      return {
        ...state,
        AddStatue: "idel",
        todos: [...state.todos, payload],
      };
    case TodoActionTypes.DELETETODO:
      return {
        ...state,
        todos: [...state.todos].filter(item=>item.id !== payload.id),
      };
    default:
      return state;
  }
};
