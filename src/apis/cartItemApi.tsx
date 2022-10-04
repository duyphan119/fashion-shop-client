import { fetchData, fetchDataHasToken } from "../config/api";
import { AppDispatch } from "../redux/store";
import { CartItem, CartItemBody } from "../utils/types";

export const createCartItemApi = (body: CartItemBody) => fetchData().post("cart-item", body);
export const updateCartItemApi = (body: CartItem) => fetchData().patch("cart-item", body);
export const deleteCartItemApi = (productDetailId: number) => fetchData().delete("cart-item/" + productDetailId);
export const getCartItemsApi = (accessToken: string, dispatch: AppDispatch) => fetchDataHasToken(accessToken, dispatch).get("cart/account");
