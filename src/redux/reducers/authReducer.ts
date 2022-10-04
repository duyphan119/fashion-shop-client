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
	reducers: {
		register: (state, action: PayloadAction<any>) => {
			state.profile = action.payload.account;
			state.accessToken = action.payload.accessToken;
			localStorage.setItem("AT", state.accessToken);
		},
		login: (state, action: PayloadAction<any>) => {
			state.profile = action.payload.account;
			state.accessToken = action.payload.accessToken;
			localStorage.setItem("AT", state.accessToken);
		},
		updateProfile: (state, action: PayloadAction<any>) => {
			state.profile = action.payload;
		},
		refreshToken: (state, action: PayloadAction<string>) => {
			state.accessToken = action.payload;
			localStorage.setItem("AT", state.accessToken);
		},
		logout: (state, action: PayloadAction<any>) => {
			state.profile = null;
			state.accessToken = "";
			localStorage.removeItem("AT");
		},
	},
});

export const authActions = slice.actions;

export const authState = (state: RootState) => state.auth;

export default slice.reducer;
