import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";
const name = "cart";
const slice = createSlice({
	name,
	initialState: 0,
	reducers: {},
});

export const cartActions = slice.actions;

export const cartState = (state: RootState) => state.cart;

export default slice.reducer;
