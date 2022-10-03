import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";
const name = "auth";

type State = {
	profile: any;
	accessToken: string;
};

const initialState: State = {
	profile: null,
	accessToken: localStorage.getItem("AT") || "",
};

const slice = createSlice({
	name,
	initialState,
	reducers: {},
});

export const authActions = slice.actions;

export const authState = (state: RootState) => state.auth;

export default slice.reducer;
