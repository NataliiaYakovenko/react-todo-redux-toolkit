import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import getUsers from "../../api/apiFooterUsers";


const initialState = {
  users: [],
  isFetching: false,
  error: null,
};

export const getUsersThunk = createAsyncThunk(
  "users/getUsers",
  async (page=1,thuncApi) => {
    try {
      const { data } = await getUsers(4, page);
      return data;
    } catch (error) {
      return thuncApi.rejectWithValue({ message: error.message });
    }
  }
);

const usersSlice = createSlice({
  initialState,
  name: "users",
  reducers: {},
  extraReducers: (bulder) => {
    bulder.addCase(getUsersThunk.pending, (state) => {
      state.isFetching = true;
      state.error = null;
    });
    bulder.addCase(getUsersThunk.fulfilled, (state, { payload }) => {
      state.users = payload;
      state.isFetching = false;
    });
    bulder.addCase(getUsersThunk.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.error = payload;
    });
  },
});

const { reducer } = usersSlice;
export default reducer;
