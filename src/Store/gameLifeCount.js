import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 3,
};

export const gameLifeCount = createSlice({
  name: "gameLifeCount",
  initialState,
  reducers: {
    decrease: (state) => {
      state.value -= 1;
    },
    setDefault: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { decrease, setDefault } = gameLifeCount.actions;

export default gameLifeCount.reducer;
