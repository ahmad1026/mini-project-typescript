import { TodoActionTypes } from '../action-types/todos';
import {TodoType} from '../../interfaces/Todo'

interface AddToDoAction {
    type: TodoActionTypes.ADDTODO;
    payload:TodoType
  }
  
interface DeleteToDoAction {
      type: TodoActionTypes.DELETETODO;
      payload:{id:string}
  }

export type TodoActions = AddToDoAction | DeleteToDoAction




