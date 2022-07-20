import React from "react";
import {Link} from "react-router-dom";
import "../../styles/root.css";

function ForgotPassword() {
  return (
    <>
      <div className="inputDomMainContainer flex-column-center">
        <form
          className="formContainerMain inputDomContainer AlertInfo input-flex inputError box-shadow"
          action="submit"
          autocomplete="on"
        >
          <div className="formContainer input-flex flex">
            <h3 className="h3Tag">
              Forgot your password ?
            </h3>
            <p className="discriptionText">
              Please enter the email you use to sign in to
              Vision Cart
            </p>
          </div>

          <div className="formContainer">
            <div className="formEmail inputDomContainer formInput AlertWarning inputError flex-evenly box-shadow">
              <i className="material-icons">email</i>
              <input
                className="login-check formInput AlertWarning search-container"
                type="email"
                name=""
                id=""
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3,}$"
                title="should contain A-Z and /number @ and . "
                placeholder="Email"
                autocomplete="off"
              />
              <span className="validity"></span>
            </div>
          </div>

          <div className="formButtonContainer flex-evenly">
            <div className="AlertDomMainContainer">
              <input
                type="submit"
                className="create-btn forgot-btn primary-button flex-evenly buttonHoverShadow"
                value="Request Password Reset"
              />
            </div>
          </div>

          <span className="padding-top-small">
            <Link to="/login">Back to Sign In</Link>
          </span>
        </form>
      </div>
    </>
  );
}

export default ForgotPassword;
