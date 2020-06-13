import React, { useState } from "react";
import TodoItem from "./TodoItem";
import './Todo.css';

const Todo = () => {
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const clickButton = () => {
    addItem(value);
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const addItem = (text) => {
    setValue("");
    const updatedList = [...todoList];
    updatedList.push(text);
    setTodoList(updatedList);
  };

  const deleteItem = (index) => {
    const updatedList = [...todoList];
    updatedList.splice(index, 1);
    setTodoList(updatedList);
  };

  return (
    <div>
      <input value={value} onChange={onChange} />
      <button onClick={clickButton}> Add Todo </button>
      {todoList.map((text, index) => (
        <TodoItem key={index} index={index} text={text} deleteItem={deleteItem} />
      ))}
    </div>
  );
};

export default Todo;
