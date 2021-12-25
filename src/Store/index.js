import { configureStore } from "@reduxjs/toolkit";
import chessPathShowReducer from "./chessPathShow";
import gameLifeReducer from "./gameLifeCount";
import gameStartedReducer from "./gameStarted";
export const store = configureStore({
  reducer: {
    chessPathShow: chessPathShowReducer,
    gameLifeCount: gameLifeReducer,
    gameStarted: gameStartedReducer,
  },
});
