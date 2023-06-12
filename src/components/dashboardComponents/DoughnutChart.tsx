import { Chart, DoughnutController, ArcElement, CategoryScale, LinearScale } from 'chart.js';
import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as Types from "../../types";

Chart.register(DoughnutController, ArcElement, CategoryScale, LinearScale);

const DoughnutChart = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
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

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    const ctx = canvasRef.current.getContext('2d');

    if (!ctx) {
      return;
    }

    const chart = new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: options
    });

    return () => {
      chart.destroy();
    };
  }, [data]);

  return <canvas ref={canvasRef} />;
};

export default DoughnutChart;
