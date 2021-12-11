export function dark(dispatch) {
  dispatch({ type: "DARK" });
  localStorage.setItem("darkMode", true);
}

export function light(dispatch) {
  dispatch({ type: "LIGHT" });
  localStorage.setItem("darkMode", false);
}
