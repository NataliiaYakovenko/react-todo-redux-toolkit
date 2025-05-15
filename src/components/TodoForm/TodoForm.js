import { connect } from "react-redux";
import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import {
  addTask,
  completedTask,
  removeTask,
  setDeadline,
} from "../../store/slices/todoSlice";
import styles from "./TodoForm.module.scss";
import TODO_SCHEMA from "../../schemas/TodoSchema";

const initialState = {
  newTask: "",
  deadline: "",
};

const TodoForm = ({
  arrayTask,
  addTask,
  completedTask,
  removeTask,
  setDeadline,
}) => {
  const submitHandler = (values, actions) => {
    console.log(values);
    addTask(values);
    actions.resetForm();
  };

  return (
    <div className={styles.todoWrapper}>
      <h1 className={styles.title}>TODO MY TRAVEL</h1>

      <Formik
        initialValues={initialState}
        onSubmit={submitHandler}
        validationSchema={TODO_SCHEMA}
      >
        {(formikProps) => {
          return (
            <Form>
              <div className={styles.newTaskWrapper}>
                <label>
                  <Field
                    className={styles.addTask}
                    type="text"
                    name="newTask"
                    placeholder="Write your task"
                  />

                  <button className={styles.btnAddTask} type="submit">
                    ADD
                  </button>

                  <ErrorMessage
                    className={styles.errorrNewTask}
                    name="newTask"
                    component="p"
                  />
                </label>

                <label>
                  <Field
                    className={styles.deadlineAddTask}
                    type="date"
                    name="deadline"
                  />
                  {/* <ErrorMessage name="deadline" component="p" /> */}
                </label>
              </div>

              <Form>
                {arrayTask.map(({ id, text, completed, deadline }) => {
                  return (
                    <div key={id} className={styles.listTasks}>
                      <Field
                        type="checkbox"
                        checked={completed}
                        onChange={() => completedTask(id)}
                      />

                      <textarea
                        className={styles.listText}
                        readOnly
                        onClick={() => {
                          return completedTask(id);
                        }}
                        style={{
                          backgroundColor: completed
                            ? "rgb(198, 232, 158)"
                            : "rgba(247, 154, 206, 0.95)",
                        }}
                      >
                        {text}
                      </textarea>

                      <button
                        className={styles.btnList}
                        onClick={() => removeTask(id)}
                      >
                        Delete
                      </button>
                      <span
                        className={styles.deadline}
                        style={{
                          color:
                            deadline && new Date(deadline) < new Date()
                              ? "rgb(186, 4, 4)"
                              : "white",
                        }}
                      >
                        {deadline}
                      </span>
                    </div>
                  );
                })}
              </Form>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    arrayTask: state.todo.arrayTask,
    newTask: state.todo.newTask,
    deadline: state.todo.deadline,
    error: state.todo.error,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addTask: (task) => {
    return dispatch(addTask(task));
  },
  completedTask: (id) => {
    return dispatch(completedTask({ id }));
  },
  removeTask: (id) => {
    return dispatch(removeTask(id));
  },
  setDeadline: () => {
    return dispatch(setDeadline());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
