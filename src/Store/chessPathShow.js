import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const chessPathShow = createSlice({
  name: "chessPathShow",
  initialState,
  reducers: {
    showPath: (state) => {
      state.value = true;
    },
    hidePath: (state) => {
      state.value = false;
    },
  },
});

export const { showPath, hidePath } = chessPathShow.actions;

export default chessPathShow.reducer;
