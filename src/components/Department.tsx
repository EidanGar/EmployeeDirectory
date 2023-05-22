import * as Types from "../types";
import ProgressBar from "./ProgressBar";
import { Link } from "react-router-dom";
import Accordion from "./Accordion";

interface DepartmentProps {
  department: string;
  departmentProjects: Types.Project[];
  departmentEmployees: Types.Employee[];
}

const Department = ({
  department,
  departmentProjects,
  departmentEmployees,
}: DepartmentProps) => {
  const totalProjectProgress = Math.round(
    departmentProjects?.reduce((a, b) => a + b.progress, 0) /
      departmentProjects?.length
  );

  return (
    <div className="bg-light flex-column d-flex w-100 p-3 gap-3 shadow rounded">
      <h4 className="text-dark">{department}</h4>
      <Accordion name={"Projects"}>
        {departmentProjects.map((project, idx) => (
          <div
            key={idx}
            className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2"
          >
            <h6 className="text-nowrap mb-0">{project.projectInfo.title}</h6>
            <ProgressBar width={"100"} progress={project.progress} />
          </div>
        ))}
      </Accordion>
      <Accordion name={"Employees"}>
        {[
          <div key="1" className="department-employees">
            {departmentEmployees.map((employee, idx) => (
              <Link
                to={`/employees/${employee.name
                  .toLowerCase()
                  .replace(" ", "-")}`}
                key={idx}
                className="department-employee"
              >
                <img
                  className="rounded-circle"
                  src={employee.pictures.imageUrl}
                  alt={employee.name}
                />
                <h6 className="mb-0">{employee.name}</h6>
              </Link>
            ))}
          </div>,
        ]}
      </Accordion>

      <ProgressBar progress={totalProjectProgress} />
    </div>
  );
};

export default Department;
