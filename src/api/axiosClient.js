import axios from 'axios';
// const apiURL = process.env.REACT_APP_API_URL;
const axiosClient = axios.create({
  // baseURL: 'https://c482-117-2-255-218.ngrok.io/api/',
  baseURL: 'https://server-deploy-xr7n.onrender.com/api/',
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});
// axiosClient.interceptors.request.use(
//   (config) => {
//     const accessToken = localStorage.getItem('CNN_TOKEN');
//     if (accessToken != null) {
//       return {
//         ...config,
//         headers: {
//           Authorization: `Token ${accessToken}`,
//           ...config.headers,
//         },
//         mode: 'no-cors',
//       };
//     }

//     return {
//       ...config,
//       headers: {
//         ...config.headers,
//       },
//     };
//   },
//   async (error) => await Promise.reject(error),
// );
// axiosClient.interceptors.response.use(
//   async (response) => await Promise.resolve(response),
//   async (error) => {
//     return await Promise.reject(error);
//   },
// );
export default axiosClient;
