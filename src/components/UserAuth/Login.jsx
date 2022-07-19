import React, {useState} from "react";
import "../../styles/root.css";
import {steve} from "../../assets/images";
import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import axios from "axios";
import { loginService } from "../../APIs";
import { useAuth } from "../../context";

export function Login() {
  const initialState = {
    email: "",
    password: "",
  };
  const [userDetails, setUserDetails] = useState(initialState);
  const [state, setState] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const {setAuth} = useAuth();

  const from = location?.state?.from.pathname || "/";

  const loginHandler = async (e, userDetails) => {
    setUserDetails({ ...userDetails });
    e.preventDefault();
    try {
      const res = await loginService(userDetails);
      if (res.status === 200) {
        //toast.success("Successfully logged in!");
        localStorage.setItem("vision_token", res.data.encodedToken);
        localStorage.setItem("isAuth", true);
        
        
        setAuth({
          vision_token: res.data.encodedToken,
          isAuth: true,
        });
        navigate(from, {replace: true});
      }
    } catch (err) {
      // toast.error(err.response.data.errors[0]);
      console.log('login',err);
    }
  };

  
  return (
    <>
      <div
        id="myModal"
        className="inputDomMainContainer flex-column-center"
      >
        <form
          className="formContainerMain inputDomContainer AlertInfo input-flex inputError box-shadow"
          action="submit"
          autocomplete="on"
          onSubmit={(e)=>loginHandler(e, userDetails)}
        >
          {
            (console.log('email',userDetails.email),
            console.log('password', userDetails.password))
          }
          <div className="formContainer input-flex flex">
            <div className="login-avatar">
              <img
                className="login-avatar-img round-border"
                src={steve}
                alt="steve"
              />
            </div>
            <h3 className="h3Tag">Login</h3>
          </div>

          <div className="formContainer">
            <div className="formName inputDomContainer formInput AlertError inputError flex-evenly box-shadow">
              <i className="material-icons">person</i>
              <input
                className="login-check formInput AlertError search-container"
                type="text"
                name=""
                id=""
                pattern="[A-Za-z].{5,}"
                placeholder="User Name"
                value={userDetails.email}
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    email: e.target.value,
                  })
                }
                required
              />
              <span className="validity"></span>
            </div>

            <div className="formPassword inputDomContainer formInput AlertSuccess inputError flex-evenly box-shadow">
              <i className="material-icons">lock</i>
              <input
                className="login-check formInput AlertSuccess search-container"
                type="password"
                name=""
                id=""
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                placeholder="Confirm Password"
                value={userDetails.password}
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    password: e.target.value,
                  })
                }
              />
              <span className="validity"></span>
            </div>

            <section className="flex-column-start">
              <span className="padding-normal">
                <input type="checkbox" name="" id="" />
                Remember me
              </span>
              <span className="padding-top-small">
                <Link to="/forgot_password">
                  Forgot Password ?
                </Link>
              </span>
            </section>

            <div className="formButtonContainer padding-normal margin-normal-left1 flex-evenly">
              <div className="AlertDomMainContainer">
                <input
                  type="submit"
                  className="ButtonDomContainer descriptionOne primary-button flex-evenly buttonHoverShadow"
                  value="Sign In"
                />
              </div>

              <div className="AlertDomMainContainer">
                <Link to="/signup">
                  <input
                    type="button"
                    className="ButtonDomContainer descriptionOne primary-button flex-evenly buttonHoverShadow"
                    value="Sign Up"
                  />
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
