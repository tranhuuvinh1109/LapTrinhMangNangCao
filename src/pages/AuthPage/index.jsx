import React, { useState, useEffect } from 'react';
import './AuthPage.css';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/userSlice/userAction';
import authAPI from '../../api/authAPI';

const AuthPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [stateAuth, setStateAuth] = useState('login');
  const [data, setData] = useState({
    email: '',
    password: '',
    username: '',
    cfPassword: '',
    avatar: 'https://fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg',
  });

  const register = async () => {
    try {
      const response = await authAPI.register(data);
      if (response.data.status === 200) {
        toast.success(response.data.message);
        setData({
          email: '',
          password: '',
          username: '',
          cfPassword: '',
          avatar: 'ss',
        });
        setStateAuth('login');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  const toggleAuth = () => {
    setStateAuth(stateAuth === 'login' ? 'register' : 'login');
  };

  const handleChangeInput = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmmit = async (e) => {
    e.preventDefault();
    if (stateAuth === 'login') {
      dispatch(loginUser(data));
    } else {
      if (data.cfPassword !== data.password) {
        toast.error('Password and confirm password are not the same!');
      }
      register(data);
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
                  <input
                    name="email"
                    onChange={handleChangeInput}
                    value={data.email}
                    type="email"
                    placeholder="EMAIL"
                  />
                  <input
                    name="password"
                    onChange={handleChangeInput}
                    value={data.password}
                    type="text"
                    placeholder="PASSWORD"
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
                  <input
                    name="username"
                    onChange={handleChangeInput}
                    value={data.username}
                    type="text"
                    placeholder="USERNAME"
                  />
                  <input
                    name="email"
                    onChange={handleChangeInput}
                    value={data.email}
                    type="email"
                    placeholder="EMAIL"
                  />
                  <input
                    name="password"
                    onChange={handleChangeInput}
                    value={data.password}
                    type="text"
                    placeholder="PASSWORD"
                  />
                  <input
                    name="cfPassword"
                    onChange={handleChangeInput}
                    value={data.cfPassword}
                    type="text"
                    placeholder="CONFIRM PASSWORD"
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
  );
};

export default AuthPage;
