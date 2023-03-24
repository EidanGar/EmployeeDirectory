import { Line } from "react-chartjs-2";

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Earnings",
      data: [0, 40, 50, 60, 60, 75, 85],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)"
    }
  ]
};

const options = {
  scales: {
    x: {
      type: "time",
      time: {
        unit: "month"
      }
    },
    y: {
      min: 0
    }
  }
};

const AreaChart = () => <Line data={data} />;

export default AreaChart;
