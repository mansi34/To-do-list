import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import TodoList from "./TodoList";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/toDoList" />} />
        <Route path="/toDoList" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
