import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NumberFormat from "react-number-format";
import { Table, Tag, Space, Divider } from "antd";
import { api } from "pages/home";
import { API_KEY } from "constants/index";
import { Link } from "react-router-dom";

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User",
    // Column configuration not to be checked
    name: record.name,
  }),
};
export const Market = () => {
  const { id, baseSymbol } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  // api.coincap.io/v2/assets/bitcoin/markets
  useEffect(() => {
    setLoading(true);
    api
      .get(`/v2/assets/${id}/markets?api_key=${API_KEY}`)
      .then((response) => {
        console.log(response.data.data, "response");
        setData(response.data.data);

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  const columns = [
    {
      title: "source",
      dataIndex: "exchangeId",
    },
    {
      title: "Pairs",
      dataIndex: "quoteSymbol",
      sorter: (a, b) => a.rank - b.rank,
      render: (id) => (
        <Link to={`/details/${id}`} style={{ fontSize: "15px" }}>
          {id}
        </Link>
      ),
    },

    {
      title: "price",
      dataIndex: "priceUsd",
      sorter: (a, b) => a.rank - b.rank,
      render: (priceUsd) => (
        <NumberFormat
          decimalScale={2}
          thousandsGroupStyle={"lakh"}
          value={priceUsd}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
          renderText={(value, props) => <div {...props}>{value}</div>}
        />
      ),
    },
    {
      title: "volume",
      dataIndex: "volumeUsd24Hr",
      sorter: (a, b) => a.rank - b.rank,
      render: (priceUsd) => (
        <NumberFormat
          decimalScale={3}
          value={priceUsd}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
          renderText={(value, props) => <div {...props}>{value}</div>}
        />
      ),
    },
    {
      title: "volume %",
      dataIndex: "volumePercent",
      sorter: (a, b) => a.rank - b.rank,
      render: (priceUsd) => (
        <NumberFormat
          decimalScale={2}
          thousandsGroupStyle={"lakh"}
          value={priceUsd}
          displayType={"text"}
          thousandSeparator={true}
          suffix={"%"}
          renderText={(value, props) => <div {...props}>{value}</div>}
        />
      ),
    },

    // {
    //   title: "Volume(24h)",
    //   dataIndex: "volumeUsd24Hr",
    //   // dataIndex: "symbol",
    //   sorter: (a, b) => a.rank - b.rank,
    //   render: (priceUsd, volumeUsd24Hr, symbol) => (
    //     <div>
    //       <NumberFormat
    //         decimalScale={3}
    //         value={priceUsd}
    //         displayType={"text"}
    //         thousandSeparator={true}
    //         prefix={"$"}
    //         renderText={(value, props) => <div {...props}>{value}</div>}
    //       />
    //     </div>
    //   ),
    // },

    // {
    //   title: "Circulating Supply",
    //   dataIndex: "supply",
    //   sorter: (a, b) => a.rank - b.rank,
    //   render: (priceUsd) => (
    //     <NumberFormat
    //       decimalScale={3}
    //       value={priceUsd}
    //       displayType={"text"}
    //       thousandSeparator={true}
    //       prefix={"$"}
    //       renderText={(value, props) => <div {...props}>{value}</div>}
    //     />
    //   ),
    // },
  ];
  const { quoteId } = data;
  return (
    <div>
      <Table
        // key={id}
        dataSource={data}
        sticky="true"
        rowSelection={{
          ...rowSelection,
        }}
        columns={columns}
      />
    </div>
  );
};
export default Market;
