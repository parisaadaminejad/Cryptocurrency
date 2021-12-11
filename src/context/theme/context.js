import { createContext, useContext, useReducer } from "react";
import { ThemeReducer, initialState } from "./reducers";
const ThemeStateContext = createContext();
const ThemeDispatchContext = createContext();

export function useThemeState() {
  return useContext(ThemeStateContext);
}

export function useThemeDispatch() {
  return useContext(ThemeDispatchContext);
}

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ThemeReducer, initialState);
  console.log(state);
  return (
    <div>
      <ThemeStateContext.Provider value={state}>
        <ThemeDispatchContext.Provider value={dispatch}>
          {children}
        </ThemeDispatchContext.Provider>
      </ThemeStateContext.Provider>
    </div>
  );
};
