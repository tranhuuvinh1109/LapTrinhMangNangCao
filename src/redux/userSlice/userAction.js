import authAPI from '../../api/authAPI';
import { setLoading, setError, setUser, clearUser } from './userSlice';
import { toast } from 'react-hot-toast';

export const loginUser = (params) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await authAPI.login(params);
    if (response.status === 200) {
      localStorage.setItem('CNN_TOKEN', response.data.data.token);
      dispatch(setUser(response.data.data.user));
      toast.success('Login Successfully !');
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
