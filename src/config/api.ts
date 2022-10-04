import { authActions } from "../redux/reducers/authReducer";
import axios from "axios";
import { BASE_URL } from "../constants";
import jwt_decode from "jwt-decode";
import { AppDispatch } from "../redux/store";
import { refreshTokenApi } from "../apis/authApi";
export const fetchData = () => {
	const instance = axios.create({
		withCredentials: true,
		baseURL: BASE_URL,
	});
	// instance.interceptors.response.use((res) => res.data);
	return instance;
};

export const fetchDataHasToken = (accessToken: string, dispatch: AppDispatch) => {
	const instance = axios.create({
		withCredentials: true,
		baseURL: BASE_URL,
	});

	instance.interceptors.request.use(
		async (config) => {
			let currentDate = new Date();
			if (accessToken) {
				const decodedToken: { exp: number } = jwt_decode(accessToken);
				if (config.headers) {
					if (decodedToken.exp * 1000 < currentDate.getTime()) {
						const res = await refreshTokenApi();
						const { newAccessToken } = res.data.data;
						config.headers["authorization"] = `Bearer ${newAccessToken}`;
						dispatch(authActions.refreshToken(newAccessToken));
					} else {
						config.headers["authorization"] = `Bearer ${accessToken}`;
					}
				}
			}
			return config;
		},
		(error) => {
			return Promise.reject(error);
		}
	);
	// instance.interceptors.response.use((res) => res.data);
	return instance;
};
