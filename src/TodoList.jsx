import React, { useState } from "react";
import "./todo.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((el, elIndex) => elIndex !== index));
  };

  return (
    <div className="toDo_Main">
      <h1>Todo List</h1>

      <div className="toDo_add">
        <div>
          <input
            type="text"
            value={newTodo}
            onChange={(event) => setNewTodo(event.target.value)}
            placeholder="Enter a new todo"
          />
          <button onClick={handleAddTodo}>Add</button>
        </div>

        {todos.map((todo, index) => (
          <div className="toDo_list" key={index}>
            <div className="toDo_list_show">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => setTodos([...todos])}
              />
              <span>{todo}</span>
            </div>

            <div className="toDo_list_delete">
              <button className="delete" onClick={() => handleDelete(index)}>
                -
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
