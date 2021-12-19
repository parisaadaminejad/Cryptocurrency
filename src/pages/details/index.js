import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "pages/home";
import { API_KEY } from "constants/index";
import Layout from "layout";
import { Row, Col, Button, Divider } from "antd";
import NumberFormat from "react-number-format";
import { SearchOutlined, InfoOutlined } from "@ant-design/icons";
import { renderIcon } from "components/utils";
import Market from "./markets";
const icon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    height="16"
    width="16"
    viewBox="0 0 24 24"
    color="neutral4"
    class="sc-16r8icm-0 kLSxec"
  >
    <path d="M12 2C6.48583 2 2 6.48583 2 12C2 17.5142 6.48583 22 12 22C17.5142 22 22 17.5142 22 12C22 6.48583 17.5142 2 12 2ZM14.215 17.2367C13.6642 17.4533 11.755 18.365 10.655 17.3958C10.3267 17.1075 10.1633 16.7417 10.1633 16.2975C10.1633 15.4658 10.4367 14.7408 10.9292 13C11.0158 12.6708 11.1217 12.2442 11.1217 11.9058C11.1217 11.3217 10.9 11.1667 10.2992 11.1667C10.0058 11.1667 9.68083 11.2708 9.38667 11.3808L9.54917 10.715C10.205 10.4483 11.0283 10.1233 11.7333 10.1233C12.7908 10.1233 13.5692 10.6508 13.5692 11.6542C13.5692 11.9433 13.5192 12.45 13.4142 12.8L12.8058 14.9517C12.68 15.3867 12.4525 16.3458 12.805 16.63C13.1517 16.9108 13.9725 16.7617 14.3775 16.5708L14.215 17.2367ZM13.21 8.66667C12.52 8.66667 11.96 8.10667 11.96 7.41667C11.96 6.72667 12.52 6.16667 13.21 6.16667C13.9 6.16667 14.46 6.72667 14.46 7.41667C14.46 8.10667 13.9 8.66667 13.21 8.66667Z"></path>
  </svg>
);

export const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    api
      .get(`/v2/assets/${id}?api_key=${API_KEY}`)

      .then((response) => {
        setData(response.data.data);

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const {
    name,
    symbol,
    priceUsd,
    changePercent24Hr,
    explorer,
    rank,
    marketCapUsd,
    volumeUsd24Hr,
    supply,
  } = data;
  return (
    <Layout>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={4} push={20}>
          <p>{`${name} price (${symbol})`}</p>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={11} push={1}>
          <h1 style={{ display: "inline-block", marginRight: "10px" }}>
            {renderIcon(id)} {name}
          </h1>
          <Button type="primary" size="small" shape="round">
            {symbol}
          </Button>
        </Col>
        <Col className="gutter-row" span={5} push={7}>
          <h1 style={{ display: "inline-block" }}>
            <NumberFormat
              decimalScale={2}
              thousandsGroupStyle={"lakh"}
              value={priceUsd}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
              renderText={(value, props) => <div {...props}>{value}</div>}
            />
          </h1>
          <Button
            style={{ marginLeft: "20px", background: "red" }}
            size="middle"
            shape="round"
          >
            <NumberFormat
              decimalScale={2}
              thousandsGroupStyle={"lakh"}
              value={changePercent24Hr}
              displayType={"text"}
              thousandSeparator={true}
              suffix={"%"}
              renderText={(value, props) => <div {...props}>{value}</div>}
            />
          </Button>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={11} push={1}>
          <Button
            size="middle"
            shape="round"
            type="primary"
            style={{ marginRight: "10px" }}
          >
            Rank {rank}
          </Button>
          <Button
            icon={<SearchOutlined />}
            size="middle"
            shape="round"
            href={explorer}
            type="primary"
          >
            Explorers
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={7} push={1} style={{ borderRight: "1px solid #e1e1e1" }}>
          <p style={{ color: "#a09797" }}>
            Market Cap
            <span style={{ color: "rgb(166, 176, 195)" }}>{icon}</span>
          </p>
          <NumberFormat
            decimalScale={3}
            value={marketCapUsd}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            renderText={(value, props) => <div {...props}>{value}</div>}
          />
          <NumberFormat
            decimalScale={2}
            thousandsGroupStyle={"lakh"}
            value={changePercent24Hr}
            displayType={"text"}
            thousandSeparator={true}
            suffix={"%"}
            renderText={(value, props) => <div {...props}>{value}</div>}
          />
        </Col>
        <Col span={6} push={2} style={{ borderRight: "1px solid #e1e1e1" }}>
          <p style={{ color: "#a09797" }}>
            Volum{" "}
            <Button
              size="small"
              shape="round"
              style={{ color: "#a09797", background: "#d2d8e7" }}
            >
              24h
            </Button>
          </p>
          <NumberFormat
            decimalScale={2}
            thousandsGroupStyle={"lakh"}
            value={volumeUsd24Hr}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            renderText={(value, props) => <div {...props}>{value}</div>}
          />
        </Col>
        <Col span={5} push={3}>
          <p style={{ color: "#a09797" }}>
            Circulating Supply
            <span style={{ color: "rgb(166, 176, 195)" }}>{icon}</span>
          </p>

          <NumberFormat
            decimalScale={2}
            value={supply}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            renderText={(value, props) => (
              <div {...props}>{`${value}  ${symbol}`}</div>
            )}
          />
        </Col>
      </Row>
      <Divider />
      <h2 style={{ marginLeft: "45px", fontSize: "30px" }}>{name} Markets</h2>
      <Market />
    </Layout>
  );
};
export default Details;
