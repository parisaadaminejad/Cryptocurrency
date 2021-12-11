import { ThemeProvider } from "./context/theme/index";
import { useThemeState } from "./context/theme/index";
import "./App.css";

import MainRouter from "routes";

function App() {
  const themeChanger = useThemeState();
  console.log(themeChanger, "themchan");
  return (
    <div>
      <ThemeProvider>
        {/* <div
          className={`btn ${themeChanger.darkMode ? "btn-dark" : "btn-light"}`}
        > */}
        <MainRouter />
        {/* </div> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
// 07091cc5-4380-47ca-8c53-951a09964ec6 api key
