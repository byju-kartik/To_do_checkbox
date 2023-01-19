import React, { useState } from "react";
import AddTodo from "../Components/Add";
import Todo from "../Components/List";

const todoList = [];

const ToDoContainer = () => {
  const handleremoveTodo = async (id) => {
    const newTodoList = todos.filter((todo) => todo.id !== id);
    await setTodos(newTodoList);
    console.log("in remove length", newTodoList.length);
    let n = 0;
    if (newTodoList.length > 0) {
      console.log("length", todos.length);
      newTodoList.forEach((element) => {
        if (!element.done) {
          console.log("ttsdsadsa  ", element.title);
          n = n + 1;
        }
      });
    }
    setnTodos(n);
    // updateN();
  };

  const [todos, setTodos] = useState(todoList);
  const handleAddTodo = async (newTodo) => {
    const newTodoList = [...todos, newTodo];
    let k = setTodos(newTodoList);
    let n = 0;
    if (newTodoList.length > 0) {
      console.log("length", todos.length);
      newTodoList.forEach((element) => {
        if (!element.done) {
          console.log("ttsdsadsa  ", element.title);
          n = n + 1;
        }
      });
    }

    setnTodos(n);

    //  setTimeout(() => {
    //    updateN();
    //  }, 500);
  };

  const [n_todos, setnTodos] = useState(0);
  const updateN = () => {
    let n = 0;
    if (todos.length > 0) {
      console.log("length", todos.length);
      todos.forEach((element) => {
        if (!element.done) {
          console.log("ttsdsadsa  ", element.title);
          n = n + 1;
        }
      });
    }
    setnTodos(n);
  };

  const handleCheckboxChange = async (id) => {
    const newTodoList = todos.map((todo) => {
      if (todo.id === id) return { ...todo, done: !todo.done };
      return todo;
    });
    await setTodos(newTodoList);
    let n = 0;
    if (newTodoList.length > 0) {
      console.log("length", todos.length);
      newTodoList.forEach((element) => {
        if (!element.done) {
          console.log("ttsdsadsa  ", element.title);
          n = n + 1;
        }
      });
    }
    setnTodos(n);
  };
  return (
    <div>
      <h2 className="text-center mb-3"> To Do App</h2>

      <AddTodo addTodo={handleAddTodo} onNew={updateN} />
      {todos.length > 0
        ? todos.map((todo) => (
            <Todo
              todo={todo}
              removeTodo={handleremoveTodo}
              handleChange={handleCheckboxChange}
              onUpdate={updateN}
            />
          ))
        : null}

      <b className="mb-3">{n_todos > 0 ? n_todos : "No"} Tasks left</b>
    </div>
  );
};

export default ToDoContainer;
