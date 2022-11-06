import React, { useEffect } from "react";
import Todo from "./Todo";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../redux";

const CardTodo: React.FC = () => {
  const { todos, FetchTodoStatus } = useSelector((state: State) => state.todo);
  const dispatch = useDispatch();
  const { boundRequestTodos } = bindActionCreators(actionCreators, dispatch);
  const getTodos = async () => boundRequestTodos();
  useEffect(() => {
    getTodos()
  }, []);

  const todosCom = todos.map((todo, index) => (
    <Todo todo={todo} key={todo.id} delay={index / 10} />
  ));

  return (
    <div className="grow mt-4 overflow-y-scroll border">
      {FetchTodoStatus === "pending" ? (
        <h1 className="flex justify-center "> Loading... </h1>
      ) : FetchTodoStatus === "rejected" ? (
        <h1 className="flex justify-center "> Error in fetch Todos</h1>
      ) : (
        todosCom
      )}
    </div>
  );
};

export default CardTodo;
