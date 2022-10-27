import React from 'react'
import Todo from './Todo';
import {useSelector} from 'react-redux'
import { State } from '../redux';

const CardTodo:React.FC = ()=>{

    const {todos} = useSelector((state:State)=>state.todo)

    

    return(
        <div className='grow mt-4 overflow-y-scroll border'>

            {
                todos.map((todo,index)=> <Todo todo={todo} key={todo.id} delay={index/10}/>)
            }

            
        </div>

    );
}


export default CardTodo