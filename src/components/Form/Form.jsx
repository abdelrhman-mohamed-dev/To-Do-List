import List from "../List/List";
import "./Form.scss";
import React, { useState } from "react";

const Form = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodo((currentTodo) => {
      return [
        ...currentTodo,
        {
          id: crypto.randomUUID(),
          title: input,
          completed: false,
        },
      ];
    });

    setInput("");
  };
  const toogleTodo = (id, checked) => {
    setTodo((currentTodo) => {
      return currentTodo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: true };
        }
        return todo;
      });
    });
  };
  const deleteTodo = (id) => {
    setTodo((currentTodo) => {
      return currentTodo.filter((todo) => todo.id !== id);
    });
  };

  console.log(todo);

  return (
    <>
      <form onSubmit={handleSubmit} className=" form container">
        <div className="w-auto">
          <label htmlFor="item" className="form-label fs-1">
            New Item
          </label>
          <input
            id="item"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <button type="submit" className="add btn btn-success mt-3">
          Add
        </button>
      </form>
      <div className="container list">
        <h1 className="fs-1 mt-3">Todo List</h1>
        <List todo={todo} toogleTodo={toogleTodo} deleteTodo={deleteTodo} />
      </div>
    </>
  );
};

export default Form;
