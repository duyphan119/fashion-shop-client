import { fetchData, fetchDataHasToken } from "../config/api";
import { AppDispatch } from "../redux/store";

export const loginApi = (body: any) => fetchData().post("auth/login", body);
export const registerApi = (body: any) => fetchData().post("auth/register", body);
export const refreshTokenApi = () => fetchData().post("auth/refresh");
export const logoutApi = () => fetchData().post("auth/logout");
export const updateProfile = (accessToken: string, dispatch: AppDispatch, body: any) => fetchDataHasToken(accessToken, dispatch).patch("auth/profile", body);
