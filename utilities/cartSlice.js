import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  //first config
  name: "cart",
  //second config, initaill state
  initialState: {
    items: ["burger", "pizza", "pasta"],
  },
  //writing reducers
  reducers: {
    //modify state based on actions
    addItem: (state, action) => {
      //mutating the sate here
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop(action.payload);
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});
//at the end it is like
/***
 * {
 *   actions:
 * {
 *   addItem....
 * }
 *    reducer
 * }
 */
// export actions and reducer
export default cartSlice.reducer;
export const { addItem, removeItem, clearCart } = cartSlice.actions;
