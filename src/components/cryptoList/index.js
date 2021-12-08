import { Fragment } from "react";

export const CryptoList = (props) => {
  const { data, loading } = props;

  // console.log("data5", data);
  function renderFarm() {
    return data.map((item, index) => {
      const { id, symbol } = item;
      return (
        <li key={index}>
          <p>{id}</p>
          <span>{symbol}</span>
        </li>
      );
    });
  }
  return (
    <Fragment>
      {!loading ? <ul>{renderFarm()}</ul> : <p>loading...</p>}
    </Fragment>
  );
};
export default CryptoList;
