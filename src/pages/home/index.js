import { useEffect, useState } from "react";
import CryptoList from "components/cryptoList";
import { API_KEY } from "constants";
import { create } from "apisauce";
import Header from "layout/header";
import Footer from "layout/footer";
import { useThemeState } from "context/theme";
import Demo from "components/cryptoList";

export const api = create({
  baseURL: "https://api.coincap.io",
  headers: { "Content-Type": "application/json; charset=utf-8; v=1.0" },
});
export const Home = () => {
  const [fixed, setFixed] = useState(false);
  const handleFixedNavbar = (type) => setFixed(type);

  const themeChanger = useThemeState();

  return (
    <div className={`btn ${themeChanger.darkMode ? "btn-dark" : "btn-light"}`}>
      <Header />

      <Demo />
      {/* <CryptoList data={data} loading={loading} /> */}
      <Footer />
    </div>
  );
};
export default Home;
