import { Line } from "react-chartjs-2";
import {
  Chart as ChartsJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
//import e from "cors";

ChartsJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CryptoChart = ({ arr = [], days }) => {
  const prices = [];
  const date = [];

  for (let i = 0; i < arr.length; i++) {
    /*   
    if (days === "24h") {
      date.push(new Date(arr[i][0]).toLocaleDateString());
    } else {
      date.push(new Date(arr[i][0]).toLocaleDateString());
    }
    */
    date.push(new Date(arr[i][0]).toLocaleDateString());
    prices.push(arr[i][1]);
  }

  const data = {
    labels: date,
    datasets: [
      {
        label: `Price in inr`,
        data: prices,
        borderColor: "#4c6ef5",
        backgroundColor: "#bac8ff",
      },
    ],
  };

  return (
    <Line
      options={{ responsive: true, elements: { point: { radius: 1 } } }}
      data={data}
    />
  );
};

export default CryptoChart;
