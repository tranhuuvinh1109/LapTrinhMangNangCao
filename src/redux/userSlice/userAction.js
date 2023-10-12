import authAPI from '../../api/authAPI';
import { setLoading, setError, setUser, clearUser } from './userSlice';
import { toast } from 'react-hot-toast';

export const loginUser = (params) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await authAPI.login(params);
    console.log('-->', response);
    if (response.data.status === 200) {
      localStorage.setItem('CNN_TOKEN', response.data.data.token);
      dispatch(setUser(response.data.data.user));
      toast.success(response.data.message);
    }
  } catch (error) {
    console.log('-->error', error);
    dispatch(setError(error.message));
  }
};

export const getInformationByToken = (token) => async (dispatch) => {
  try {
    const response = await authAPI.getInformationByToken({ token });
    console.log('res ->token', response);
    if (response.status === 200) {
      console.log('success', response);
      dispatch(setUser(response.data.data.user));
    }
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const logoutUser = () => (dispatch) => {
  dispatch(clearUser());
  localStorage.setItem('CNN_TOKEN', '');
  toast.success('Logout Successfully !');
};
