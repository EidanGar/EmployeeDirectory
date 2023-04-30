import { useSelector } from "react-redux";
import * as Types from "../types";
import * as Data from "../static/employeeData";
import Department from "../components/Department";

const Departments = () => {
  const { projects, employeeList } = useSelector<
    Types.CombinedReducers,
    Types.ApplicationReducerState
  >((state) => state.application);

  return (
    <div className="p-4 d-flex flex-column min-vh-100 w-100">
      <h3 className="text-gray-800 mb-3 mt-sm-0 mt-4 text-sm-start text-center">
        Departments
      </h3>
      <div className="d-flex flex-column gap-3">
        {Data.departments.map((department, idx) => {
          const departmentProjects = projects.filter(
            (project) => project.department === department
          );
          const departmentEmployees = employeeList.filter(
            (employee) => employee.jobData.department === department
          );
          return (
            <Department
              {...{
                key: idx,
                departmentProjects,
                departmentEmployees,
                department,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Departments;
