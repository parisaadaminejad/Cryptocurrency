import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = (data) => {
  return {
    title: {
      text: "My chart",
    },

    series: [
      {
        data,
      },
    ],
  };
};

const Chart = () => {
  const data = [1, 52, 8, 5, 5, 5, 5];
  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options(data)} />
    </>
  );
};
export default Chart;
