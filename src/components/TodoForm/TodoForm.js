import { connect } from "react-redux";
import React from "react";
import cx from "classnames";
import { ErrorMessage, Field, Form, Formik } from "formik";
import {
  addTask,
  completedTask,
  removeTask,
  setDeadline,
} from "../../store/slices/todoSlice";
import styles from "./TodoForm.module.scss";
import TODO_SCHEMA from "../../schemas/TodoSchema";
import TitleTooltip from "./Tooltip";

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
      <h1 className={styles.title} data-tooltip={TitleTooltip.tooltip}>
        TODO MY TRAVEL
      </h1>

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
                    className={cx(styles.addTask, {
                      [styles.inValidInput]: !formikProps.isValid,
                    })}
                    type="text"
                    name="newTask"
                    placeholder="Write your task"
                  />

                  <button className={styles.btnAddTask} type="submit">
                    ADD
                  </button>
                  
                  <ErrorMessage
                    className={styles.errorNewTask}
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
                </label>
              </div>

              <div>
                {arrayTask.map(({ id, text, completed, deadline }) => {
                  return (
                    <div key={id} className={styles.listTasks}>
                      <Field
                        className={styles.checkbox}
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
                          backgroundColor:
                            !completed &&
                            deadline &&
                            new Date(deadline) < new Date()
                              ? "red"
                              : completed
                              ? "rgb(205, 216, 239)"
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
                            !completed &&
                            deadline &&
                            new Date(deadline) < new Date()
                              ? "rgb(186, 4, 4)"
                              : "blue",
                        }}
                      >
                        {deadline}
                      </span>
                    </div>
                  );
                })}
              </div>
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
