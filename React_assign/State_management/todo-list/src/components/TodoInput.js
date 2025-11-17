import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../recoil/todoState";

function TodoInput() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const addTodo = () => {
    if (!input.trim()) return;

    setTodoList([
      ...todoList,
      {
        id: Date.now(),
        text: input,
        isComplete: false,
      },
    ]);

    setInput("");
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        placeholder="Enter task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}

export default TodoInput;
