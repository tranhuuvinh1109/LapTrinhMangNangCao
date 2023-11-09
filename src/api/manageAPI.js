import axiosClient from './axiosClient';

const manageAPI = {
  getWorkerStatus: () => axiosClient.get(`/user_manage/check-worker/`),
  getAllProject: () => axiosClient.get(`/project/get/`),
  getUserbyID: (id) => axiosClient.get(`/user/?q=${id}`),
  getManageUserByID: (id) => axiosClient.get(`/user_manage/?q=${id}`),
};

export default manageAPI;
