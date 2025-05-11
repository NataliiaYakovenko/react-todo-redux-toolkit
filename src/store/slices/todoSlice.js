import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  arrayTask: [],
  newTask: "",
  error: "",
};

const todoSlice = createSlice({
  initialState,
  name: "todo",
  reducers: {
    addTask: (state) => {
      const newObjectTask = {
        id: uuidv4(),
        text: state.newTask,
        completed: false,
      };
      state.arrayTask.push(newObjectTask);
      state.newTask = "";
      state.error = "";
    },

   


  },
});

const {reducer,actions}= todoSlice

export default reducer
