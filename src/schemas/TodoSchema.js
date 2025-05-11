import * as yup from "yup";

const TODO_SCHEMA = yup.object({
  newTask: yup.string().trim().required(),
});

export default TODO_SCHEMA;
