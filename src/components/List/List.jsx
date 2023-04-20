import React from "react";
import "./List.scss";

const List = ({ todo, toogleTodo, deleteTodo }) => {
  const handleClick = () => {};
  return (
    <>
      {todo.length === 0
        ? "No Todos yet !"
        : todo.map((item) => (
            <div key={item.id} className="item form-check mt-3">
              <input
                type="checkbox"
                className="form-check-input checkBtn"
                id={item.id}
                onChange={(e) => toogleTodo(todo.id, e.target.checked)}
              />
              <label
                className="form-check-label checkbox-label"
                htmlFor={item.id}
              >
                {item.title}
              </label>
              <button
                onClick={(e) => deleteTodo(item.id)}
                className="delete btn btn-danger mx-3"
              >
                delete item
              </button>
            </div>
          ))}
    </>
  );
};

export default List;
