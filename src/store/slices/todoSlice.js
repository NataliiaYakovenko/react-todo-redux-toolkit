import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  arrayTask: [],
  newTask: "",
  deadline: "",
  error: "",
};

const todoSlice = createSlice({
  initialState,
  name: "todo",
  reducers: {
    addTask: (state, { payload }) => {
      const newObjectTask = {
        id: uuidv4(),
        text: payload.newTask,
        completed: false,
        deadline: payload.deadline,
      };
      state.arrayTask.push(newObjectTask);
      state.newTask = "";
      state.error = "";
      state.deadline = "";
    },

    completedTask: (state, { payload }) => {
      const updatedTasks = state.arrayTask.map((task) => {
        if (task.id === payload.id) {
          return {
            ...task,
            completed: true,
          };
        }
        return task;
      });
      state.arrayTask = updatedTasks;
    },

    removeTask: (state, { payload }) => {
      const filteredTasks = state.arrayTask.filter((task) => {
        return task.id !== payload;
      });
      state.arrayTask = filteredTasks;
    },

    setDeadline: (state, { payload }) => {
      state.deadline = payload;
    },
  },
});

const { reducer, actions } = todoSlice;

export const { addTask, completedTask, removeTask, setDeadline } = actions;

export default reducer;
