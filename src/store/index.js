// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth";
import counterReducer from "./counter";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;

// export const actionTypes = {
//   INCRECREMENT: "increment",
//   DECREMENT: "decrement",
//   TOGGLE: "toggle",
// };

// const counterReducer = (state = initialState, action) => {
//   const { type: actionType, payload = {} } = action;

//   if (actionType === actionTypes.INCRECREMENT) {
//     const { value = 1 } = payload;
//     return {
//       ...state,
//       counter: state.counter + value,
//     };
//   } else if (actionType === actionTypes.DECREMENT) {
//     return {
//       ...state,
//       counter: state.counter - 1,
//     };
//   } else if (actionType === actionTypes.TOGGLE) {
//     return {
//       ...state,
//       showCounter: !state.showCounter
//     }
//   }

//   return state;
// };

// const store = createStore(counterSlice.reducer);
