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

    completedTask: (state, { payload }) => {
      const updatedTasks = state.arrayTask.map((task) => {
        if (task.id === payload.id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      });
      state.arrayTask = updatedTasks;
    },
  },
});

const { reducer, actions } = todoSlice;

export default reducer;
