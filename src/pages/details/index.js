import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "pages/home";
import { API_KEY } from "../../constants/index";
export const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    api
      .get(`/v2/assets/${id}?api_key=${API_KEY}`)
      .then((response) => {
        setData(response.data.data);
        console.log(response.data.data, "responseidd");
        // setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        // setLoading(false);
      });
  }, []);
  return <p>{id}</p>;
};
export default Details;
