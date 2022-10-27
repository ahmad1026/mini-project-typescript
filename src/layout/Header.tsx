import React from 'react'
import {motion} from 'framer-motion'
export default function Header() {
  return (
    <motion.div transition={{duration:1}} animate={{
        y:[-100,0]
    }} className='flex text-white text-2xl font-bold bg-purple-500 items-center justify-center p-4'>To-Do App</motion.div>
  )
}
