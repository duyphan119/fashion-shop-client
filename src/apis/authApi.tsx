import { fetchData, fetchDataHasToken } from "../config/api";
import { AppDispatch } from "../redux/store";
import { Account, LoginBody, RegisterBody } from "../utils/types";

export const loginApi = (body: LoginBody) => fetchData().post("auth/login", body);
export const registerApi = (body: RegisterBody) => fetchData().post("auth/register", body);
export const refreshTokenApi = (body?: { refreshToken: string }) => fetchData().post("auth/refresh", body);
export const logoutApi = () => fetchData().post("auth/logout");
export const updateProfileApi = (accessToken: string, dispatch: AppDispatch, body: Account) =>
	fetchDataHasToken(accessToken, dispatch).patch("auth/profile", body);
