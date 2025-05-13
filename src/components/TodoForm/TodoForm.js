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

const TodoForm = ({ addTask, completedTask, removeTask, setDeadline }) => {
  const submitHandler = (values, actions) => {
    console.log(values);
    addTask(values)
    actions.resetForm();
  };

  return (
    <div className={styles.todoWrapper}>
      <h1>YOUR TODO LIST</h1>

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
              <button>ADD</button>
              <ErrorMessage name="newTask" component="p" />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    newTask: state.todo.newTask,
    deadline: state.todo.deadline,
    error: state.todo.error,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addTask: (task) => {
    return dispatch(addTask(task));
  },
  completedTask: () => {
    return dispatch(completedTask());
  },
  removeTask: () => {
    return dispatch(removeTask());
  },
  setDeadline: () => {
    return dispatch(setDeadline());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
