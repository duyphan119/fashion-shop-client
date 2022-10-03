import axios from "axios";
import { BASE_URL } from "../constants";
import jwt_decode from "jwt-decode";
export const fetchData = () => {
	const instance = axios.create({
		withCredentials: true,
		baseURL: BASE_URL,
	});
	instance.interceptors.response.use((res) => res.data);
	return instance;
};

export const fetchDataHasToken = (accessToken: string) => {
	const instance = axios.create({
		withCredentials: true,
		baseURL: BASE_URL,
	});

	instance.interceptors.request.use(
		(config) => {
			let currentDate = new Date();
			if (accessToken) {
				const decodedToken: { exp: number } = jwt_decode(accessToken);
				if (decodedToken.exp * 1000 < currentDate.getTime()) {
					if (config?.headers) {
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
	instance.interceptors.response.use((res) => res.data);
	return instance;
};
