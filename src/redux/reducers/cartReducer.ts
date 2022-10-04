import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart, CartItem, ResponseItems } from "../../utils/types";
import { RootState } from "./rootReducer";
const name = "cart";
type State = {
	cart: ResponseItems<CartItem>;
};

const initialState: State = {
	cart: {
		items: [],
		count: 0,
	},
};

const slice = createSlice({
	name,
	initialState,
	reducers: {
		setCart: (state, action: PayloadAction<ResponseItems<CartItem>>) => {
			state.cart = action.payload;
		},
		createCartItem: (state, action: PayloadAction<CartItem>) => {
			const index = state.cart.items.findIndex((item: CartItem) => item.productVariantId === action.payload.productVariantId);
			if (index === -1) {
				state.cart.items = [action.payload, ...state.cart.items];
			} else {
				state.cart.items = state.cart.items.map((item: CartItem) => {
					if (item.productVariantId === action.payload.productVariantId) {
						return { ...item, quantity: item.quantity + action.payload.quantity };
					}
					return item;
				});
			}
			state.cart.count += action.payload.quantity;
		},
		updateCartItem: (state, action: PayloadAction<CartItem>) => {
			state.cart.items = state.cart.items.map((item: CartItem) => {
				if (item.productVariantId === action.payload.productVariantId) {
					return { ...item, quantity: action.payload.quantity };
				}
				return item;
			});
		},
		deleteCartItem: (state, action: PayloadAction<number>) => {
			state.cart.items = state.cart.items.filter((item: CartItem) => item.productVariantId !== action.payload);
		},
	},
});

export const cartActions = slice.actions;

export const cartState = (state: RootState) => state.cart;

export default slice.reducer;
