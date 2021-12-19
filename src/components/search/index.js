import React, { useState, useEffect } from "react";
import { Input, AutoComplete } from "antd";
import { API_KEY } from "constants/index";
import { api } from "pages/home";
function getRandomInt(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}

export const Search = () => {
  const [query, setQuery] = useState([]);
  const [dataSerch, setDataSearh] = useState([{ id: "" }]);
  const [options, setOptions] = useState([]);
  useEffect(() => {
    api
      .get(`/v2/assets?api_key=${API_KEY}&search=${query}`)
      .then((response) => {
        console.log(response.data, "query 3");
        setDataSearh(response.data.data);
      })
      .catch((error) => {
        console.log(error);
        setDataSearh([{ id: error, symbol: "" }]);
      });
  }, [query]);

  const searchResult = (query) => {
    setQuery(query);
    return dataSerch.map((item, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>
              <a
                href={`/details/${item.id}`}
                // target="_blank"
                rel="noopener noreferrer"
              >
                {item.id}
              </a>
            </span>
            <span>{item.symbol}</span>
          </div>
        ),
      };
    });
  };

  const handleSearch = (query) => {
    console.log(searchResult(query));
    setOptions(
      query ? searchResult(query) : [{ value: "test", lable: "test" }]
    );
  };

  const onSelect = (query) => {
    console.log("onSelect", query);
  };

  console.log({ options });

  return (
    <AutoComplete
      dropdownMatchSelectWidth={252}
      style={{
        width: 300,
        margin: 10,
      }}
      options={options}
      onSelect={onSelect}
      onSearch={handleSearch}
    >
      <Input.Search size="large" placeholder="search here" enterButton />
    </AutoComplete>
  );
};
export default Search;
