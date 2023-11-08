import axiosClient from './axiosClient';

const manageAPI = {
  getWorkerStatus: () => axiosClient.get(`/user_manage/check-worker/`),
  getAllProject: () => axiosClient.get(`/project/get/`),
  getUserbyID: (id) => axiosClient.get(`/user/${id}`),
};

export default manageAPI;
