import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/userSlice/userAction';
import authAPI from '../../api/authAPI';
import { InputField } from '../../components';
import * as yup from 'yup';
import './AuthPage.css';
import LoadingPage from '../LoadingPage';

const AuthPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [stateAuth, setStateAuth] = useState('login');
  const [errors, setErrors] = useState({});

  const [data, setData] = useState({
    email: '',
    password: '',
    username: '',
    cfPassword: '',
    avatar: 'https://fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg',
  });

  const registrationSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    cfPassword: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  });

  const register = async () => {
    try {
      await registrationSchema.validate(data, { abortEarly: false });
      if (Object.keys(errors).length === 0) {
        const response = await authAPI.register(data);
        if (response.data.status === 200) {
          toast.success(response.data.message);
          setData({
            email: '',
            password: '',
            username: '',
            cfPassword: '',
            avatar: 'https://fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg',
          });
          setStateAuth('login');
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const newErrors = {};
        error.inner.forEach((err) => {
          toast.error(err.message);
          newErrors[err.path] = err.message;
        });
        setErrors(newErrors);
      } else {
        throw new Error(error);
      }
    }
  };

  const toggleAuth = () => {
    setStateAuth(stateAuth === 'login' ? 'register' : 'login');
    setData({
      email: '',
      password: '',
      username: '',
      cfPassword: '',
      avatar: 'https://fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg',
    });
  };

  const handleChangeInput = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
    setErrors({});
  };

  const handleSubmmit = async (e) => {
    e.preventDefault();
    if (stateAuth === 'login') {
      dispatch(loginUser(data));
    } else {
      if (data.cfPassword !== data.password) {
        setErrors({ ...errors, cfPassword: 'Not match' });
        return;
      }
      await register();
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('CNN_TOKEN');
    if (token) {
      navigate('/');
    } else if (user.error) {
      toast.error(user.error);
    }
  }, [user, navigate]);

  return (
    <>
      <section className="login">
        <div className="login_box">
          {stateAuth === 'login' ? (
            <>
              <div className="left">
                <div className="top_link">
                  <Link to="/">
                    <img
                      src="https://drive.google.com/u/0/uc?id=16U__U5dJdaTfNGobB_OpwAJ73vM50rPV&export=download"
                      alt=""
                    />
                    Return home
                  </Link>
                </div>
                <div className="contact">
                  <form onSubmit={handleSubmmit}>
                    <h3>SIGN IN</h3>
                    <InputField
                      name="email"
                      onChange={handleChangeInput}
                      error={errors?.email}
                      value={data.email}
                      type="email"
                    />
                    <InputField
                      name="password"
                      onChange={handleChangeInput}
                      error={errors?.password}
                      value={data.password}
                      type="text"
                    />
                    <button className="submit" type="submit">
                      LET'S GO
                    </button>
                    <p className="py-4">
                      Or{' '}
                      <span className="text-sky-500 font-medium hover:cursor-pointer underline" onClick={toggleAuth}>
                        create a new account
                      </span>
                    </p>
                  </form>
                </div>
              </div>
              <div className="right">
                <div className="right-text">
                  <h2 onClick={() => console.log(data, stateAuth)}>CNN</h2>
                  <h5>Convolutional Neural Network</h5>
                </div>
                <div className="right-inductor">
                  <img
                    src="https://lh3.googleusercontent.com/fife/ABSRlIoGiXn2r0SBm7bjFHea6iCUOyY0N2SrvhNUT-orJfyGNRSMO2vfqar3R-xs5Z4xbeqYwrEMq2FXKGXm-l_H6QAlwCBk9uceKBfG-FjacfftM0WM_aoUC_oxRSXXYspQE3tCMHGvMBlb2K1NAdU6qWv3VAQAPdCo8VwTgdnyWv08CmeZ8hX_6Ty8FzetXYKnfXb0CTEFQOVF4p3R58LksVUd73FU6564OsrJt918LPEwqIPAPQ4dMgiH73sgLXnDndUDCdLSDHMSirr4uUaqbiWQq-X1SNdkh-3jzjhW4keeNt1TgQHSrzW3maYO3ryueQzYoMEhts8MP8HH5gs2NkCar9cr_guunglU7Zqaede4cLFhsCZWBLVHY4cKHgk8SzfH_0Rn3St2AQen9MaiT38L5QXsaq6zFMuGiT8M2Md50eS0JdRTdlWLJApbgAUqI3zltUXce-MaCrDtp_UiI6x3IR4fEZiCo0XDyoAesFjXZg9cIuSsLTiKkSAGzzledJU3crgSHjAIycQN2PH2_dBIa3ibAJLphqq6zLh0qiQn_dHh83ru2y7MgxRU85ithgjdIk3PgplREbW9_PLv5j9juYc1WXFNW9ML80UlTaC9D2rP3i80zESJJY56faKsA5GVCIFiUtc3EewSM_C0bkJSMiobIWiXFz7pMcadgZlweUdjBcjvaepHBe8wou0ZtDM9TKom0hs_nx_AKy0dnXGNWI1qftTjAg=w1920-h979-ft"
                    alt=""
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="right">
                <div className="right-text">
                  <h2 onClick={() => console.log(data, stateAuth)}>CNN</h2>
                  <h5>Convolutional Neural Network</h5>
                </div>
                <div className="right-inductor">
                  <img
                    src="https://lh3.googleusercontent.com/fife/ABSRlIoGiXn2r0SBm7bjFHea6iCUOyY0N2SrvhNUT-orJfyGNRSMO2vfqar3R-xs5Z4xbeqYwrEMq2FXKGXm-l_H6QAlwCBk9uceKBfG-FjacfftM0WM_aoUC_oxRSXXYspQE3tCMHGvMBlb2K1NAdU6qWv3VAQAPdCo8VwTgdnyWv08CmeZ8hX_6Ty8FzetXYKnfXb0CTEFQOVF4p3R58LksVUd73FU6564OsrJt918LPEwqIPAPQ4dMgiH73sgLXnDndUDCdLSDHMSirr4uUaqbiWQq-X1SNdkh-3jzjhW4keeNt1TgQHSrzW3maYO3ryueQzYoMEhts8MP8HH5gs2NkCar9cr_guunglU7Zqaede4cLFhsCZWBLVHY4cKHgk8SzfH_0Rn3St2AQen9MaiT38L5QXsaq6zFMuGiT8M2Md50eS0JdRTdlWLJApbgAUqI3zltUXce-MaCrDtp_UiI6x3IR4fEZiCo0XDyoAesFjXZg9cIuSsLTiKkSAGzzledJU3crgSHjAIycQN2PH2_dBIa3ibAJLphqq6zLh0qiQn_dHh83ru2y7MgxRU85ithgjdIk3PgplREbW9_PLv5j9juYc1WXFNW9ML80UlTaC9D2rP3i80zESJJY56faKsA5GVCIFiUtc3EewSM_C0bkJSMiobIWiXFz7pMcadgZlweUdjBcjvaepHBe8wou0ZtDM9TKom0hs_nx_AKy0dnXGNWI1qftTjAg=w1920-h979-ft"
                    alt=""
                  />
                </div>
              </div>
              <div className="left">
                <div className="contact">
                  <form onSubmit={handleSubmmit}>
                    <h3>SIGN UP</h3>
                    <InputField
                      name="username"
                      onChange={handleChangeInput}
                      error={errors?.username}
                      value={data.username}
                      type="text"
                    />
                    <InputField
                      name="email"
                      onChange={handleChangeInput}
                      error={errors?.email}
                      value={data.email}
                      type="email"
                    />
                    <InputField
                      name="password"
                      onChange={handleChangeInput}
                      error={errors?.password}
                      value={data.password}
                      type="text"
                    />
                    <InputField
                      name="cfPassword"
                      onChange={handleChangeInput}
                      error={errors?.cfPassword}
                      value={data.cfPassword}
                      type="text"
                    />
                    <button className="submit" type="submit">
                      SUBMIT
                    </button>
                    <p className="py-4">
                      Or{' '}
                      <span className="text-sky-500 font-medium hover:cursor-pointer underline" onClick={toggleAuth}>
                        sign in
                      </span>
                    </p>
                  </form>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
      {user.loading && <LoadingPage />}
    </>
  );
};

export default AuthPage;
