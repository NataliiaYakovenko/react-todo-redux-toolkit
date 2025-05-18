import React from "react";
import Weather from "../components/Header/Weather/Weather";
import Users from "../components/Footer/Users/Users";
import styles from "./TodoPage.module.scss";
import Slider from "../components/Slader/Slader";
import TodoForm from "../components/TodoForm/TodoForm";


const TodoPage = () => {
  return (
    <>
      <Slider />

      <div className={styles.header}>
        <header>
          <Weather />
        </header>

        <main className={styles.mainContent}>
          <TodoForm />
        </main>

        <footer className={styles.footer}>
          <Users />
        </footer>
      </div>
    </>
  );
};

export default TodoPage;
