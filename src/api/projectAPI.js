import axiosClient from './axiosClient';

const projectAPI = {
  getProjectByUserID: (id) => axiosClient.get(`/user_manage/${id}/`),
  createProject: (params) => axiosClient.post(`/create_project/`, params),
};

export default projectAPI;
