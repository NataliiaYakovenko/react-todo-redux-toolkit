import React from "react";
import Todo from "../components/Todo/Todo";
import Weather from "../components/Header/Weather/Weather";
import Users from "../components/Footer/Users/Users";

const TodoPage = () => {
  return (
    <>
      <Weather />
      <Todo />
      <Users/>
    </>
  );
};

export default TodoPage;
