import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import * as Types from "../../types";

const DoughnutChart = () => {
  const { employeeList } = useSelector<
    Types.CombinedReducers,
    Types.ApplicationReducerState
  >((state) => state.application);

  const getRandomColors = (length: number) => {
    const colorsSet: Set<string> = new Set();

    for (let i = 0; i < length; i++) {
      const randomColor = `hsl(${
        i * Math.round(Math.random() * 300)
      }, 80%, 60%)`;
      if (!colorsSet.has(randomColor)) {
        colorsSet.add(randomColor);
      } else {
        i--;
      }
    }

    return Array.from(colorsSet);
  };

  const getTopJobs = (jobsAmount = 5) => {
    const employeesJobsList = employeeList.map(
      (employee) => employee.jobData.jobTitle
    );
    const jobsCount: Record<string, number> = {};

    for (let i = 0; i < employeesJobsList.length; i++) {
      if (employeesJobsList[i] in jobsCount) {
        jobsCount[employeesJobsList[i]]++;
      } else {
        jobsCount[employeesJobsList[i]] = 1;
      }
    }

    const topJobs = Object.entries(jobsCount)
      .sort(([, a], [, b]) => a - b)
      .reverse()
      .slice(0, jobsAmount);
    const remainingJobs =
      Object.values(jobsCount).reduce((a, b) => a + b, 0) -
      topJobs.reduce((a, b) => a + b[1], 0);
    return [...topJobs, ["Others", remainingJobs]];
  };

  const topJobs = getTopJobs();
  const randomColors = [
    ...getRandomColors(topJobs.length - 1),
    "rgba(75,192,192,0.4)"
  ];

  const data = {
    labels: topJobs.map((job) => job[0]),
    datasets: [
      {
        data: topJobs.map((job) => job[1]),
        backgroundColor: randomColors,
        hoverBackgroundColor: randomColors
      }
    ]
  };

  const options = {
    responsive: true
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
