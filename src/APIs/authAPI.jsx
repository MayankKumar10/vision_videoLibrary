import axios from "axios";

const loginService = async (userData) => {
  return await axios.post("/api/auth/login", {
    email:userData.email,
    password:userData.password,
  });
};


const signupService = async (userData) => {
  return await axios.post("/api/auth/login", {
    email:userData.email,
    password:userData.password,
    firstName:userData.firstName,
    lastName:userData.lastName,
  });
};

export {loginService, signupService}