import { Employee } from "../../types";
import EmployeeControl from "./EmployeeControl";

const EmployeeRow = ({
  employee,
  idx
}: {
  employee: Employee;
  idx: number;
}) => {
  return (
    <div
      className={`employee-row container bg-light rounded border-left-${
        employee.isWorker ? "success" : "danger"
      }`}
    >
      <img
        className="rounded-circle"
        src={employee.pictures.iconUrl || "../../static/placeholderEmployee"}
        alt={`employee ${employee.name}`}
      />
      <h5 className="text-dark d-none d-sm-block text-nowrap m-0">
        {employee.name}
      </h5>
      <EmployeeControl {...{ employee, idx }} />
    </div>
  );
};

export default EmployeeRow;
