import { createContext, useContext, useReducer } from "react";
export const UserProfileStateContext = createContext();
export const UserProfileDispatcherContext = createContext();
export function useUserProfileStateContext() {
  return useContext(UserProfileStateContext);
}
export function useUserProfileDispatcherContext() {
  return useContext(UserProfileDispatcherContext);
}
export const UserProfileProvider = ({ children }) => {
  const [user, dispatch] = useReducer(UserProfileReducer, initialState);
  return (
    <UserProfileStateContext.Provider>
      <UserProfileDispatcherContext.Provider>
        {children}
      </UserProfileDispatcherContext.Provider>
    </UserProfileStateContext.Provider>
  );
};
