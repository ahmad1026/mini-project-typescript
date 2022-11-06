import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { TodoType } from "../interfaces/Todo";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux";
const Todo: React.FC<{ delay: number; todo: TodoType}> = ({
  delay,
  todo,
}) => {
  const dispatch = useDispatch();
  const { deleteTodo } = bindActionCreators(actionCreators, dispatch);
  const [isVisible, setisVisible] = useState(true);

  const handleDelete = (id: string) => {
    setisVisible((prev) => !prev);
    setTimeout(() => {
      deleteTodo(id);
    }, 900);
  };

  return (
    <motion.div
      animate={isVisible ? { x: [-600, 0] } : { x: [0, -1000] }}
      transition={{ duration: 1 }}
      drag
      className="border text-lg flex justify-between items-start font-semibold p-2 px-4"
    >
      <p>{todo.text}</p>
      <button onClick={() => handleDelete(todo.id)} className="border">
        delete
      </button>
    </motion.div>
  );
};

export default Todo;
