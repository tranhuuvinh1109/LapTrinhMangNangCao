import axiosClient from "./axiosClient";

const authAPI = {
	login: (params) => axiosClient.post('/login/', params)
}

export default authAPI