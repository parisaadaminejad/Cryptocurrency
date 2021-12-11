let userName = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).username
  : "";
let email = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).email
  : "";
let token = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).token
  : "";
export const initialState = {
  username: "" || userName,
  email: "" || email,
  token: "" || token,
};
export const UserProfileReducer = (initialState, action) => {
  switch (action.type) {
    case "REQUEST-LOGIN":
      return {
        ...initialState,
      };
    case "LOGIN-SUCCESS":
      return {
        ...initialState,
        email: action.payload.email,
        userName: action.payload.userName,
        token: action.payload.token,
      };
  }
};
