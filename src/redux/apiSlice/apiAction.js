import { setLoading } from './apiSlice';

export const setIsLoadingAPI = (isLoading) => (dispatch) => {
  dispatch(setLoading(isLoading));
};
