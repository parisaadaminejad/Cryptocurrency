import { ThemeProvider } from "./context/theme/index";
import { useThemeState } from "./context/theme/index";
import MainRouter from "routes";
import "./App.css";

function App() {
  const themeChanger = useThemeState();
  console.log(themeChanger, "themchan");

  return (
    // <div className={`btn ${themeChanger ? "btn-dark" : "btn-light"}`}>
    <ThemeProvider>
      {/* <div
          className={`btn ${themeChanger.darkMode ? "btn-dark" : "btn-light"}`}
        > */}
      <MainRouter />
      {/* </div> */}
    </ThemeProvider>
    // </div>
  );
}

export default App;
// 07091cc5-4380-47ca-8c53-951a09964ec6 api key
