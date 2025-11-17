import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../recoil/todoState";

function TodoItem({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const index = todoList.findIndex((i) => i.id === item.id);

  const toggleComplete = () => {
    const updatedList = [...todoList];
    updatedList[index] = {
      ...item,
      isComplete: !item.isComplete,
    };
    setTodoList(updatedList);
  };

  const deleteItem = () => {
    setTodoList(todoList.filter((i) => i.id !== item.id));
  };

  return (
    <div className="todo-item">
      <input type="checkbox" checked={item.isComplete} onChange={toggleComplete} />
      <span className={item.isComplete ? "completed" : ""}>{item.text}</span>
      <button className="delete-btn" onClick={deleteItem}>Delete</button>
    </div>
  );
}

export default TodoItem;
