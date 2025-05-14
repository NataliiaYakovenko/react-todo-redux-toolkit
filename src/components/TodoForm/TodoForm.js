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
      <h1>TODO YOUR TRAVEL</h1>

      <Formik
        initialValues={initialState}
        onSubmit={submitHandler}
        validationSchema={TODO_SCHEMA}
      >
        {(formikProps) => {
          return (
            <Form>
              <label>
                <Field
                  type="text"
                  name="newTask"
                  placeholder="Write your task"
                />
              </label>
              <label>
                <Field type="date" name="deadline" />
              </label>
              <ErrorMessage name="deadline" component="p" />
              <button>ADD</button>
              <ErrorMessage name="newTask" component="p" />

              <div>
                {arrayTask.map(({ id, text, completed }) => {
                  return (
                    <div key={id} className={styles.listTasks}>
                      <Field
                        type="checkbox"
                        checked={completed}
                        onChange={() => completedTask(id)}
                      />

                      <textarea
                        className={styles.listText}
                        onClick={() => {
                          return completedTask(id);
                        }}
                        style={{
                          cursor: "pointer",
                          backgroundColor: completed
                            ? "green"
                            : "rgb(104, 2, 82)",
                          textDecoration: completed ? "underline" : "none",
                          color: completed ? "orange" : "white",
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
