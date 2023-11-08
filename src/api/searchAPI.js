import axiosClient from './axiosClient';

const searchAPI = {
  search: (query) => axiosClient.get(`search/?q=${query}`),
};

export default searchAPI;
