import { IconType } from "react-icons";
import { CSSProperties } from "react";

interface DashboardCardProps {
  parameter: string;
  value: any;
  Icon: IconType;
  color: string;
}

const DashboardCard = ({
  parameter,
  value,
  Icon,
  color
}: DashboardCardProps) => {
  const DashboardCardIconStyles: CSSProperties = {
    width: "min(80px, 45%)",
    height: "auto",
    color: "#cfcfcf",
    position: "absolute",
    left: "65%"
  };

  return (
    <div
      className={`card dashboard-card mb-3 mb-sm-0 flex-fill border-left-${color} shadow p-2`}
    >
      <div className="card-body">
        <div className="row position-relative no-gutters align-items-center justify-content-between px-3">
          <div className="col mr-2">
            <div
              className={`text-xs font-weight-bold text-${color} text-uppercase mb-1`}
            >
              {parameter}
            </div>
            <div className="h5 mb-0 font-weight-bold text-gray-800">
              {value}
            </div>
          </div>
          <Icon style={DashboardCardIconStyles} />
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
