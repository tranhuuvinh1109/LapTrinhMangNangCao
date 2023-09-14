import axios from 'axios';
// const apiURL = process.env.REACT_APP_API_URL;
const axiosClient = axios.create({
	// baseURL: 'http://127.0.0.1:8000/api'
	// baseURL: 'https://pbl5-production-dc9d.up.railway.app',
	baseURL: 'http://127.0.0.1:8000/',

});
// axiosClient.interceptors.request.use(
// 	(config) => {
// 		const accessToken = localStorage.getItem("userID");
// 		if (accessToken != null) {
// 			return {
// 				...config,
// 				headers: {
// 					Authorization: `Bearer ${accessToken}`,
// 					...config.headers
// 				},
// 				mode: 'no-cors',
// 			};
// 		}

// 		return {
// 			...config,
// 			headers: {
// 				...config.headers
// 			}
// 		};
// 	},
// 	async (error) => await Promise.reject(error)
// );
// axiosClient.interceptors.response.use(
// 	async (response) => await Promise.resolve(response),
// 	async (error) => {
// 		return await Promise.reject(error);
// 	}
// );
export default axiosClient;