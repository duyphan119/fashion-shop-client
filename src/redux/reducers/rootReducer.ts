import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import wishlistReducer from "./wishlistReducer";
const rootReducer = combineReducers({ auth: authReducer, cart: cartReducer, wishlist: wishlistReducer });
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
