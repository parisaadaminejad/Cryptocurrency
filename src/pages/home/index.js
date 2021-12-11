import { useEffect, useState } from "react";
import CryptoList from "components/cryptoList";
import { API_KEY } from "constants";
import { create } from "apisauce";
import Header from "layout/header";
import Footer from "layout/footer";
import { useThemeState } from "../../context/theme";
import Demo from "../../components/cryptoList";

export const api = create({
  baseURL: "https://api.coincap.io",
  headers: { "Content-Type": "application/json; charset=utf-8; v=1.0" },
});
export const Home = () => {
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   api
  //     .get(`/v2/assets?api_key=${API_KEY}`)
  //     .then((response) => {
  //       setData(response.data.data);

  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setLoading(false);
  //     });
  // }, []);
  const themeChanger = useThemeState();
  //   useEffect(() => {
  //     setLoading(true);
  //     fetch(`https://api.coincap.io/v2/assets?api_key=${API_KEY}`)
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         console.log(data);
  //         setData(data.data);
  //         setLoading(false);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         setLoading(false);
  //       });
  //   }, []);
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
