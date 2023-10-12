import axiosClient from './axiosClient';

const authAPI = {
  login: (params) => axiosClient.post('/login/', params),
  getInformationByToken: () => axiosClient.post('/me/'),
};

export default authAPI;
