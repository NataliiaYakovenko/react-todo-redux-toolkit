import * as yup from "yup";

const TODO_SCHEMA = yup.object({
  newTask: yup.string().trim("There should be no spaces at the beginning of a sentence.").required("You need to enter your task."),
});

export default TODO_SCHEMA;
