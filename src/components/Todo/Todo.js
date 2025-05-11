import { connect } from "react-redux";
import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import {
  addTask,
  completedTask,
  removeTask,
  setDeadline,
} from "../../store/slices/todoSlice";
import styles from "./Todo.module.scss";

const Todo = (props) => {
  const submitHandler = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <>
      <h1>YOUR TODO LIST</h1>

      <Formik
        initialValues={props.initialState}
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
                <ErrorMessage name="newTask" component="p" />
              </label>

              <button>ADD</button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default connect()(Todo);
