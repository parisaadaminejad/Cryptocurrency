import {
  SiBitcoincash,
  SiEthereum,
  SiBinance,
  SiXrp,
  SiLitecoin,
  SiDogecoin,
  SiPoly,
  SiPolymerproject,
  SiChainlink,
} from "react-icons/si";

// import { IoLogoUsd } from "react-icon/fi";
export function renderIcon(id) {
  switch (id) {
    case "bitcoin":
      return (
        <SiBitcoincash
          style={{
            color: "orange",
            fontSize: "25px",
            verticalAlign: "middle",
            marginRight: "5px",
          }}
        />
      );
      break;
    case "ethereum":
      return (
        <SiEthereum
          style={{
            color: "#4e4e4e",
            fontSize: "25px",
            verticalAlign: "middle",
            marginRight: "5px",
          }}
        />
      );
      break;
    case "binance-coin":
      return (
        <SiBinance
          style={{
            color: "orange",
            fontSize: "25px",
            verticalAlign: "middle",
            marginRight: "5px",
          }}
        />
      );
      break;
    case "xrp":
      return (
        <SiXrp
          style={{
            color: "black",
            fontSize: "25px",
            verticalAlign: "middle",
            marginRight: "5px",
          }}
        />
      );
      break;
    case "litecoin":
      return (
        <SiLitecoin
          style={{
            color: "#474196",
            fontSize: "25px",
            verticalAlign: "middle",
            marginRight: "5px",
          }}
        />
      );
      break;
    case "bitcoin-cash":
      return <SiBitcoincash />;
      break;
    case "dogecoin":
      return (
        <SiDogecoin
          style={{
            color: "#9c9c4c",
            fontSize: "25px",
            verticalAlign: "middle",
            marginRight: "5px",
          }}
        />
      );
      break;
    case "binance-usd":
      return (
        <SiBinance
          style={{
            color: "#ffa547",
            fontSize: "25px",
            verticalAlign: "middle",
            marginRight: "5px",
          }}
        />
      );
      break;
    case "polkadot":
      return (
        <SiPoly
          style={{
            color: "#464646",
            fontSize: "20px",
            verticalAlign: "middle",
            marginRight: "5px",
          }}
        />
      );
      break;
    case "polygon":
      return (
        <SiPolymerproject
          style={{
            color: "rgb(184 113 239)",
            fontSize: "20px",
            verticalAlign: "middle",
            marginRight: "5px",
          }}
        />
      );
      break;
    case "chainlink":
      return (
        <SiChainlink
          style={{
            color: "rgb(56, 97, 251)",
            fontSize: "25px",
            verticalAlign: "middle",
            marginRight: "5px",
          }}
        />
      );
      break;

    default:
      //   console.log(`Sorry, we are out of ${id}.`);
      return (
        <SiEthereum
          style={{
            color: "#4e4e4e",
            fontSize: "25px",
            verticalAlign: "middle",
            marginRight: "5px",
          }}
        />
      );
  }
}
