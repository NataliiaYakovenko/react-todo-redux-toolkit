import React from "react";
import Todo from "../components/Todo/Todo";
import Weather from "../components/Header/Weather/Weather";
import Users from "../components/Footer/Users/Users";
import styles from "./TodoPage.module.scss";

const TodoPage = () => {
  return (
    <div>
      <Weather />
      <Todo />
      <Users />
    </div>
  );
};

export default TodoPage;
