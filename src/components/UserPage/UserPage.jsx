import React from "react";
import "../../styles/root.css";
import {steve} from "../../assets/images";

export function UserPage() {
  return (
    <>
      <div className="user-main-container flex-space-evenly-start">
        <section className="user-page-container padding-normal box-shadow col-8">
          <form action="" className="user-form">
            <section className="flex-align-center padding-normal">
              <h5>Personal Information</h5>
              <span className="primary-btn padding-normal">
                <a href="">Edit</a>
              </span>
            </section>

            <div className="user-info">
              <div className="user-name">
                <span className="padding-normal firt-name-container">
                  <input
                    type="text"
                    className="user-form-input"
                    placeholder="Mayank"
                  />
                </span>

                <span className="padding-normal last-name-container">
                  <input
                    type="text"
                    className="user-form-input"
                    placeholder="Kumar"
                  />
                </span>
              </div>

              <div className="gender padding-normal-top">
                <p className="padding-normal">
                  Your Gender
                </p>

                <div className="padding-normal flex">
                  <span>
                    <input
                      type="radio"
                      name="gender"
                      id=""
                      value="male"
                      checked
                    />
                    <label for="">Male</label>
                  </span>
                  <span className="padding-small-left1">
                    <input
                      type="radio"
                      name="gender"
                      id=""
                      value="female"
                    />
                    <label for="">Female</label>
                  </span>
                </div>
              </div>

              <div className="email-address padding-large-top">
                <span className="flex-align-center padding-normal">
                  <h5>Email Address</h5>
                  <span className="primary-btn padding-small-left1">
                    <a href="">Edit</a>
                  </span>
                  <span className="primary-btn padding-small-left1">
                    <a href="">Change Password</a>
                  </span>
                </span>

                <div className="email-input-container padding-normal">
                  <input
                    className="user-form-input"
                    type="email"
                    name=""
                    id=""
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3,}$"
                    title="should contain A-Z and /number @ and . "
                    placeholder="Email"
                    autocomplete="off"
                  />
                </div>
              </div>

              <div className="user-mobile padding-large-top">
                <span className="flex-align-center padding-normal">
                  <h5>Email Address</h5>
                  <span className="primary-btn padding-small-left1">
                    <a href="">Edit</a>
                  </span>
                </span>

                <span className="padding-normal">
                  <input
                    className="user-form-input"
                    type="number"
                    name=""
                    id=""
                    placeholder="98999-99999"
                  />
                </span>
              </div>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}

export default UserPage;
