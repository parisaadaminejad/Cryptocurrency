import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "pages/home";
import { API_KEY } from "../../constants/index";
import Layout from "../../layout";
import { Row, Col, Button, Divider } from "antd";
import NumberFormat from "react-number-format";
import { SearchOutlined } from "@ant-design/icons";

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
            {name}
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
        <Col span={7} push={1} style={{ borderRight: "1px solid red" }}>
          <p>Market Cap</p>
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
        <Col span={6} push={2} style={{ borderRight: "1px solid red" }}>
          <p>
            Volum{" "}
            <Button size="small" shape="round">
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
          <p>Circulating Supply</p>
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
    </Layout>
  );
};
export default Details;
