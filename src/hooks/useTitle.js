import { useEffect } from "react";
export const UseTitle = (title) => {
  return useEffect(() => {
    document.title = title;
  }, []);
};
export default UseTitle;
