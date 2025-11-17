import React from "react";
import { useRecoilValue } from "recoil";
import { todoListState, completedCountState } from "../recoil/todoState";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

function TodoList() {
  const todos = useRecoilValue(todoListState);
  const completed = useRecoilValue(completedCountState);

  return (
    <div className="container">
      <h2>Recoil Todo App</h2>

      <TodoInput />

      {todos.map((todo) => (
        <TodoItem key={todo.id} item={todo} />
      ))}

      <p>Completed Tasks: {completed}</p>
    </div>
  );
}

export default TodoList;
