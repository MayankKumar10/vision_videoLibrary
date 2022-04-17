import React, {useState} from "react";
import "../../styles/root.css";
import {steve} from "../../assets/images";
import {Link, useLocation} from "react-router-dom";
import {UseAuth} from "../../context/AuthProvider";

export function Login() {
  const initialState = {
    email: "",
    password: "",
  };
  const [isUser, setIsUser] = useState(initialState);
  const [state, setState] = useState(false);
  const location = useLocation();

  const {signInHandler} = UseAuth();

  const from = location.state?.from?.pathname || "/";

  const onSubmitLogin = (e) => {
    e.preventDefault();
    setState(true);
    console.log(
      "location:",
      location.state?.from?.pathname
    );
    signInHandler(
      isUser.email,
      isUser.password,
      from,
      setState
    );
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
          onSubmit={onSubmitLogin}
        >
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
                value={isUser.email}
                onChange={(e) =>
                  setIsUser({
                    ...isUser,
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
                value={isUser.password}
                onChange={(e) =>
                  setIsUser({
                    ...isUser,
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
