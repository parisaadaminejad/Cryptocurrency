import { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "pages/home";
import { API_KEY } from "../../constants/index";

import React, { useState } from "react";
import { Table, Radio, Divider } from "antd";
import NumberFormat from "react-number-format";
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

export const Demo = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  function color(number) {
    if (number > 0) {
    }
  }
  useEffect(() => {
    setLoading(true);
    api
      .get(`/v2/assets?api_key=${API_KEY}`)
      .then((response) => {
        console.log(response.data.data, "response");
        setData(response.data.data);
        // console.log(response.data.data, "response");
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  console.log(data, "dara");

  const columns = [
    {
      title: "#",
      dataIndex: "rank",
      sorter: (a, b) => a.rank - b.rank,
      width: 80,
    },
    {
      title: "Name",
      dataIndex: "id",
      render: (id) => <Link to={`/details/${id}`}>{id}</Link>,
    },

    {
      title: "price",
      dataIndex: "priceUsd",
      sorter: (a, b) => a.rank - b.rank,
      render: (priceUsd) => (
        <NumberFormat
          thousandsGroupStyle={"lakh"}
          value={priceUsd}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
          renderText={(value, props) => <div {...props}>{value}</div>}
        />
      ),

      // render: (priceUsd) => <p>${` ${priceUsd.toFixed(3)}`}</p>,
    },
    {
      title: "24h%",
      dataIndex: "changePercent24Hr",
      sorter: (a, b) => a.rank - b.rank,
      render: (priceUsd) => (
        <NumberFormat
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
      title: "MarketCap",
      dataIndex: "marketCapUsd",
      sorter: (a, b) => a.rank - b.rank,
      render: (priceUsd) => (
        <NumberFormat
          value={priceUsd}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
          renderText={(value, props) => <div {...props}>{value}</div>}
        />
      ),
    },
    {
      title: "Volume(24h)",
      dataIndex: "volumeUsd24Hr",
      dataIndex: "symbol",

      sorter: (a, b) => a.rank - b.rank,
      render: (volumeUsd24Hr, symbol) => <p>{`${volumeUsd24Hr}${symbol}`}</p>,
    },

    {
      title: "Circulating Supply",
      dataIndex: "supply",
      sorter: (a, b) => a.rank - b.rank,
      render: (priceUsd) => (
        <NumberFormat
          value={priceUsd}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
          renderText={(value, props) => <div {...props}>{value}</div>}
        />
      ),
    },
  ];

  return (
    <div>
      <Divider />

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
export default Demo;
