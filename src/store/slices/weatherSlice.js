import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axiosWeather from "../../api/apiHeaderWeather";

const initialState = {
  degrees: "",
  speedWind: "",
  isFetching: false,
  error: null,
};

export const getWeatherThunk = createAsyncThunk(async (payload, thuncApi) => {
  try {
    const { data } = await axiosWeather();
    return data;
  } catch (error) {
    return thuncApi.rejectWithValue({ message: error.message });
  }
});

const weatherSlice = createSlice({
  initialState,
  name: "weather",
  reducers: {},
  extraReducers: (bulder) => {
    bulder.addCase(getWeatherThunk.pending, (state, action) => {
      state.isFetching = true;
      state.error = null;
    });
    bulder.addCase(getWeatherThunk.fulfilled, (state, { payload }) => {
      state.degrees = payload;
      state.speedWind = payload;
      state.isFetching = false;
    });
    bulder.addCase(getWeatherThunk.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.error = payload;
    });
  },
});

const { reducer, actions } = weatherSlice;
