
const initialState = {
  _id: "",
  name: "",
  email: "",
  createdAt: "",
  updatedAt: "",
  encodedToken: "",
};

const AuthReducer = (state, {type, payload}) => {
  switch (type) {
    case "SET_USER":
      console.log("SET_User", payload);
      return payload;
    case "REMOVE_USER":
      localStorage.removeItem("vision-token");
      return {
        _id: "",
        name: "",
        email: "",
        createdAt: "",
        updatedAt: "",
        encodedToken: "",
      };
    default:
      return state;
  }
};

export {initialState, AuthReducer};
