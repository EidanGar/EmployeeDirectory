import { useSelector } from "react-redux";
import * as Types from "../types";
import { BsFillPeopleFill, BsDoorOpenFill } from "react-icons/bs";
import { FaClipboardList, FaUserTie } from "react-icons/fa";
import ProgresssBar from "../components/ProgressBar";
import DoughnutChart from "../components/dashboardComponents/DoughnutChart";
import DashboardCard from "../components/dashboardComponents/DashboardCard";
import AreaChart from "../components/dashboardComponents/AreaChart";
import Chart from "chart.js/auto";

// Magic code don't delete
Chart.register(Chart.CategoryScale);
Chart.register(Chart.ArcElement);
Chart.register(Chart.LinearScale);

// Magic Code End

const Dashboard = () => {
  const { employeeList, projects } = useSelector<
    Types.CombinedReducers,
    Types.ApplicationReducerState
  >((state) => state.application);

  const cardsData = [
    {
      parameter: "Employees",
      value: employeeList.length,
      Icon: FaUserTie,
      color: "primary",
    },
    {
      parameter: "Average age",
      value: Math.round(
        employeeList.reduce((a, b) => a + +b.age, 0) / employeeList.length
      ),
      Icon: BsFillPeopleFill,
      color: "success",
    },
    {
      parameter: "Projects",
      value: projects.length,
      Icon: FaClipboardList,
      color: "info",
    },
    {
      parameter: "Turnover",
      value: "47.2%",
      Icon: BsDoorOpenFill,
      color: "warning",
    },
  ];

  const DashboardEmployeeRow = ({
    name,
    iconUrl,
  }: {
    name: string;
    iconUrl: string;
  }) => (
    <div className="p-3 w-100 rounded bg-light d-flex gap-3 justify-content-start align-items-center">
      <img className="rounded-circle" src={iconUrl} alt={name} />
      <span className="h5 text-dark text-nowrap mb-0">{name}</span>
    </div>
  );

  return (
    <div className="container p-4 d-flex flex-column w-100 min-vh-100 gap-3">
      <h3 className="text-gray-800 mb-0 mt-sm-0 mt-4 text-sm-start text-center">
        Dashboard
      </h3>
      <section className="cards d-sm-flex flex-wrap gap-3">
        {cardsData.map((data, idx) => (
          <DashboardCard {...{ ...data, key: idx }} />
        ))}
      </section>
      <section className="d-flex flex-column flex-md-row gap-3">
        <div className="card shadow w-100">
          <div className="card-header text-primary p-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Earnings Overview
            </h6>
          </div>
          <div className="card-body d-flex align-items-center justify-content-center">
            <AreaChart />
          </div>
        </div>
        <div className="change-card card shadow">
          <div className="card-header text-primary p-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Employee Metrics
            </h6>
          </div>
          <div className="card-body d-flex flex-column align-items-center justify-content-start gap-4">
            <div className="w-100 flex-column d-flex align-items-center justify-content-center gap-1">
              <span className="h6 text-start w-100">Attendace</span>
              <ProgresssBar
                progress={
                  employeeList.filter((employee) => employee.isWorker).length
                }
              />
            </div>
            <div className="w-100 flex-column d-flex align-items-center justify-content-center gap-1">
              <span className="h6 text-start w-100">Satisfaction</span>
              <ProgresssBar progress={Math.floor(Math.random() * 101)} />
            </div>
            <div className="w-100 flex-column d-flex align-items-center justify-content-center gap-1">
              <span className="h6 text-start w-100">
                Diversity and inclusion
              </span>
              <ProgresssBar progress={Math.floor(Math.random() * 101)} />
            </div>
            <div className="w-100 flex-column d-flex align-items-center justify-content-center gap-1">
              <span className="h6 text-start w-100">
                Training and development
              </span>
              <ProgresssBar progress={Math.floor(Math.random() * 101)} />
            </div>
          </div>
        </div>
      </section>
      <section className="d-flex flex-md-row flex-column gap-3 mt-2">
        <div className="card shadow w-md-50 w-100">
          <div className="card-header p-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Jobs Distribution
            </h6>
          </div>
          <div className="card-body d-flex align-items-center justify-content-center w-100">
            <DoughnutChart />
          </div>
        </div>
        <div className="card shadow w-md-50 w-100">
          <div className="card-header text-primary p-3">
            <h6 className="m-0 font-weight-bold text-primary">Recent Hires</h6>
          </div>
          <div className="dashboard__employees card-body d-flex gap-3 flex-column">
            {employeeList
              .slice(0, Math.max(3, Math.floor(window.innerHeight / 160)))
              .map(({ name, pictures: { iconUrl } }, idx) => (
                <DashboardEmployeeRow {...{ name, iconUrl, key: idx }} />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
