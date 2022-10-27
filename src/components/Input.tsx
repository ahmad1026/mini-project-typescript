import React , {useState} from 'react'
import { bindActionCreators } from 'redux'
import { v4 as uuidv4 } from 'uuid';
import {useDispatch} from 'react-redux'
import {motion} from 'framer-motion'
import { actionCreators } from '../redux'

const InPut:React.FC = ()=>{
    const dispatch = useDispatch()
    const {
        addTodo
    } = bindActionCreators(actionCreators , dispatch)

    const [text , setText] = useState('')    
    const handleAddToDo = ()=>{
        addTodo({
            text,
            createdAt:Date.now(),
            id:uuidv4(),
            Done:false
        })
        setText('')

        
    }
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{        
        setText(prev=> e.target.value)

    }
    return (
        <motion.div animate={{x:[1000,0]}} transition={{duration:1}} className='flex mt-4'>
            <input value={text} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>handleChange(e)} placeholder='enter s.th...' className='border text-lg font-semibold rou grow outline-none p-4' type="text" />
            <button onClick={()=>handleAddToDo()} className='border text-white font-bold p-4 bg-purple-500 px-8'>Add</button>
        </motion.div>
    )
}

export default InPut