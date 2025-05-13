import React from "react";
import Weather from "../components/Header/Weather/Weather";
import Users from "../components/Footer/Users/Users";
import styles from "./TodoPage.module.scss";
import Slider from "../components/Slader/Slader";
import TodoForm from "../components/TodoForm/TodoForm";
import Todos from "../components/Todos/Todos";

const TodoPage = () => {
  return (
    <div>
      <Weather />
      <TodoForm />
      <Todos />
      <Slider />
      <Users />
    </div>
  );
};

export default TodoPage;
