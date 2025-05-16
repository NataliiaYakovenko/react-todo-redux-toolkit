import * as yup from "yup";

const TODO_SCHEMA = yup.object({
  newTask: yup.string().trim().required("You need to enter your task"),
});

export default TODO_SCHEMA;
