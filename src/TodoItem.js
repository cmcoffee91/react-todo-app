import React from "react";
import './Todo.css';

const TodoItem = (props) => {
  return (
    <div>
      {props.text}
      <button onClick={() => props.deleteItem(props.index)}>Delete {props.text}</button>
    </div>
  );
};

export default TodoItem;
