import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";
const name = "wishlist";
const slice = createSlice({
	name,
	initialState: 0,
	reducers: {},
});

export const wishlistActions = slice.actions;

export const wishlistState = (state: RootState) => state.wishlist;

export default slice.reducer;
