import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
// firstly to create store here
const appStore = configureStore({
  // app here is big reduce which consisste of amny reducers
  reducer: {
    cart: cartReducer,
  },
});
export default appStore;
