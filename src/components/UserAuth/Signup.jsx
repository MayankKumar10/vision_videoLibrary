import React from "react";
import { Link } from "react-router-dom";
import "../../styles/root.css";
import {
	google,
	github,
} from "../../assets/images";

export function Signup() {
	return (
		<>
			<div className="inputDomMainContainer flex-evenly">
				<form
					className="formContainerMain inputDomContainer AlertInfo input-flex inputError box-shadow"
					action="submit"
					autocomplete="on"
				>
					<div className="formContainer input-flex">
						<h3 className="h3Tag">
							Sign Up
						</h3>
						<p className="discriptionText">
							Please fill the form to create
							an account
						</p>
					</div>

					<div className="formContainer">
						<div className="formName inputDomContainer formInput AlertError inputError flex-evenly box-shadow">
							<i className="material-icons">
								person
							</i>
							<input
								className="login-check formInput AlertError search-container"
								type="text"
								name=""
								id=""
								pattern="[A-Za-z].{5,}"
								placeholder="User Name"
								required
							/>
							<span className="validity"></span>
						</div>

						<div className="formEmail inputDomContainer formInput AlertWarning inputError flex-evenly box-shadow">
							<i className="material-icons">
								email
							</i>
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

						<div className="formPassword inputDomContainer formInput AlertInfo inputError flex-evenly box-shadow">
							<i className="material-icons">
								lock
							</i>
							<input
								className="login-check formInput AlertInfo search-container"
								type="password"
								name=""
								id=""
								pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
								title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
								placeholder="Password"
							/>
							<span className="validity"></span>
						</div>

						<div className="formPassword inputDomContainer formInput AlertSuccess inputError flex-evenly box-shadow">
							<i className="material-icons">
								lock
							</i>
							<input
								className="login-check formInput AlertSuccess search-container"
								type="password"
								name=""
								id=""
								pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
								title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
								placeholder="Confirm Password"
							/>
							<span className="validity"></span>
						</div>

						<span className="padding-normal">
							<input
								type="checkbox"
								name=""
								id=""
							/>
							I accept the
							<code>TermsOfUse</code>
						</span>
					</div>

					<div className="formButtonContainer flex-evenly">
						<div className="AlertDomMainContainer">
							<input
								type="submit"
								className="ButtonDomContainer descriptionOne primary-button flex-evenly buttonHoverShadow"
								value="Create Account"
							/>
						</div>

						<div className="AlertDomMainContainer">
							<Link to="/Login">
								<input
									type="button"
									className="ButtonDomContainer descriptionOne primary-button flex-evenly buttonHoverShadow"
									value="Login"
								/>
							</Link>
						</div>
					</div>

					<section className="flex-column-center">
						<div>Or SignUp Using</div>

						<section className="flex-row-center padding-normal">
							<button className="form-signup-icons">
								<img
									className="social-img"
									src={google}
									alt="google"
								/>
							</button>
							<button className="form-signup-icons">
								<img
									className="social-img"
									src={github}
									alt="github"
								/>
							</button>
						</section>
					</section>
				</form>
			</div>
		</>
	);
}

export default Signup;
