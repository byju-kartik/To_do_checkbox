import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState();
  const handleSubmit = (e) => {
    const newTodo = { id: Math.random(), title: title, done: false };
    e.preventDefault();
    // console.log(newTodo);
    addTodo(newTodo);
    setTitle("");
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Enter something"
          className="form-control mb-3"
          id="title"
          required
        />
        <input type="submit" />
      </form>
    </div>
  );
};
export default AddTodo;
