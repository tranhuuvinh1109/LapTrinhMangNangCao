import axiosClient from './axiosClient';

const authAPI = {
  login: (params) => axiosClient.post('/login/', params),
  register: (params) => axiosClient.post('/register/', params),
  getInformationByToken: (token) => axiosClient.post('/me/', token),
};

export default authAPI;
