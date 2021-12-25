import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "initial",
};

export const gameStatus = createSlice({
  name: "gameStatus",
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload.status;
    },
  },
});

export const { setStatus } = gameStatus.actions;

export default gameStatus.reducer;
