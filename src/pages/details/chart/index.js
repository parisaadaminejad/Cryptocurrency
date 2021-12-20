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
  // ok?dadash yani api mizaram ?are day,
  const data = [1, 52, 8, 5, 5, 5, 5]; // in datato ya inja begir ya az balayi pass bede
  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options(data)} />
    </>
  );
};
export default Chart;
