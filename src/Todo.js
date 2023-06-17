import React, { useState } from 'react';
import Form from './Form';
import { link } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyForm from './Form';

const Todo = () => {
  const [todos, setTodos] = useState([]);

  //   const addTodo = () => {
  //     setTodos((t) => [...t, 'New Todo']);
  //   };

  return (
    <div>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <BrowserRouter>
        <Routes>
          <Route path="add" element="{<MyForm/  >}"></Route>
        </Routes>
      </BrowserRouter>

      <link to="./add">Add Todo</link>
    </div>
  );
};

export default Todo;
