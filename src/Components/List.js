import React from "react";

const Todo = ({ todo, removeTodo, handleChange, onUpdate }) => {
  console.log(todo);
  const handleCheckboxChange = (id) => {
    if (todo.done) return null;
    handleChange(id);
  };

  return (
    <div className="container mb-3 ">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          onChange={() => handleCheckboxChange(todo.id)}
          name="check"
          checked={todo.done}
        />
        <label className="form-check-label">
          <span style={todo.done ? { textDecoration: "line-through" } : null}>
            {todo.title}
          </span>
          <span
            onClick={() => removeTodo(todo.id)}
            style={{
              position: "fixed",
              right: 200,
              padding: "0px 10px",
              cursor: "pointer",
              fontWeght: 600,
            }}
          >
            X
          </span>
        </label>
      </div>
    </div>
  );
};

export default Todo;
