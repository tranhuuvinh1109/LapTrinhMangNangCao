import projectAPI from '../../api/projectAPI';
import { setLoading, setError, setProject } from './projectSlice';

export const getProjects = (userID) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await projectAPI.getProjectByUserID(userID);
    if (response.status === 200) {
      dispatch(setProject(response.data.data.projects));
    }
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const realtimeProjects = (projects) => (dispath) => {
  dispath(setProject(projects));
};
