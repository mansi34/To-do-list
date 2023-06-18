import React, { useState } from 'react';
import './todo.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleCheckboxChange = (index) => {
    const updatedTodos = [...todos];
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <table>
        <tr>
          <td>
            <input
              type="text"
              value={newTodo}
              onChange={handleInputChange}
              placeholder="Enter a new todo"
            />
            <button onClick={handleAddTodo}>Add</button>
          </td>
        </tr>

        {todos.map((todo, index) => (
          <tr>
            <td key={index}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleCheckboxChange(index)}
              />
              <span>{todo}</span>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default TodoList;
