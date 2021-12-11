import { postRequest } from "api";
import { POST_API_URL } from "./constants";
export async function userProfileAction(dispatch, payload) {
  try {
    setLoading(true);
    dispatch({ type: "REQUEST-LOGIN" });
    let response = await postRequest(POST_API_URL, formValues);
    let data = await response.json();
    if (data.username) {
      dispatch({ type: "LOGIN-SUCCESS", payload: data });
      localStorage.setItem("currentUser", JSON.stringify(data));
      return data;
    }
    setLoading(false);
  } catch (error) {
    setLoading(false);
    dispatch({ type: "LOGIN_ERROR", error: error });
    console.log("error", JSON.stringify(error));
  }
}
