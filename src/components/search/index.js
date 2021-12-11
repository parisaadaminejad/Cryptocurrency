import React, { useState } from "react";
import { Input, AutoComplete } from "antd";
import { API_KEY } from "../../constants/index";
function getRandomInt(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}
const searchResult = (query) =>
  new Array(getRandomInt(5))
    .join(".")
    .split(".")
    .map((_, idx) => {
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
              Found {query} on{" "}
              <a
                href={`http://89.42.208.245:9090/api/v2/assets?api_key=${API_KEY}/search?q=${query}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      };
    });
export const Search = () => {
  const [options, setOptions] = useState([]);

  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value) => {
    console.log("onSelect", value);
  };

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
