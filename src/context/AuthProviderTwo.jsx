import React, {
  useState,
  createContext,
  useContext,
} from "react";

const AuthContext = createContext(null);

const userData = {
  firstName: "mayank@gmail.com",
  password: "Mayank123",
};

const AuthProviderTwo = ({children}) => {
  const initialState = {
    firstName: "",
    password: "",
  };
  const [user, setUser] = useState(initialState);

  const Login = (user) => {
    const {firstName, password} = user;

    if (
      firstName === userData.firstName &&
      password === userData.password
    ) {
      setUser({...user, firstName: user.firstName});
    }
  };

  const Logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{user, Login, Logout}}>
      {children}
    </AuthContext.Provider>
  );
};

const UseAuth = () => useContext(AuthContext);

export {AuthProviderTwo, UseAuth};
