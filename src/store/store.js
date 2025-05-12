import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice";
import weatherReducer from "./slices/weatherSlice";
import usersReducer from'./slices/usersSlice'

const store = configureStore({
  reducer: {
    todo: todoReducer,
    weather: weatherReducer,
    users: usersReducer
  },
});

export default store;
