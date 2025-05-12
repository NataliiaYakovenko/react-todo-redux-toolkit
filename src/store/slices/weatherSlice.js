import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import getWeather from "../../api/apiHeaderWeather";

const initialState = {
  weather: "",
  isFetching: false,
  error: null,
};

export const getWeatherThunk = createAsyncThunk(
  "weather/getWeather",
  async (payload, thuncApi) => {
    try {
      const { data } = await getWeather();
      return data;
    } catch (error) {
      return thuncApi.rejectWithValue({ message: error.message });
    }
  }
);

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
      state.weather = payload;
      state.isFetching = false;
    });
    bulder.addCase(getWeatherThunk.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.error = payload;
    });
  },
});

const { reducer, actions } = weatherSlice;
export default reducer;
