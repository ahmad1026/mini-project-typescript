import { TodoType } from '../../interfaces/Todo';
import { TodoActionTypes } from './../action-types/todos';
import { Dispatch } from 'redux';
import { TodoActions } from '../actions/todoActions';

export const addTodo = (todo:TodoType)=>{
    return (dispatch:Dispatch<TodoActions>)=>{
        dispatch({
            type:TodoActionTypes.ADDTODO,
            payload:todo
        })
    }
}

export const deleteTodo = (id:string)=>{
    return (dispatch:Dispatch<TodoActions>)=>{
        dispatch({
            type:TodoActionTypes.DELETETODO,
            payload:{id}
        })
    }
}

export const deletedTodo = (id:string)=>{
    return({
        type:TodoActionTypes.DELETETODO,
        payload:{id}

    })

}