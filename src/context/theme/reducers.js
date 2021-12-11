function getFromLocalStorage() {
  if (localStorage.getItem("darkNight")) {
    return JSON.parse(localStorage.getItem("darkNight"));
  } else {
    return { darkMode: true };
  }
}

export const initialState = getFromLocalStorage();
export function ThemeReducer(currentState, action) {
  console.log("currentState: ", initialState);
  switch (action.type) {
    case "DARK":
      return { darkMode: false };
    case "LIGHT":
      return { darkMode: true };
    default:
      return initialState;
  }
}
