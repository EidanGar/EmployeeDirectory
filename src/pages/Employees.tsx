import Employee from "../components/employeesComponents/Employee";
import * as Types from "../types";
import SearchBar from "../components/employeesComponents/SearchBar";
import SearchFilter from "../components/employeesComponents/SearchFilter";
import DisplayFormat from "../components/employeesComponents/DisplayFormat";
import Pagination from "../components/employeesComponents/Pagination";
import Loading from "../components/Loading";
import { useSelector } from "react-redux";
import { memo } from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const filterEmployees = (employeeList: Types.Employee[], searchFilter: Types.SearchReducerState) => {
  const { searchTerm, ageRange, workStatus, skillsSelected, jobTitle } = searchFilter;
  return employeeList.filter((employee) => {
    const isNameMatching = employee.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const isWithinAgeRange =
      employee.age >= ageRange.min && employee.age <= ageRange.max;
    const isWorkStatusMatching =
      workStatus === "ANY" || employee.isWorker === workStatus;
    const isJobTitleMatching =
      jobTitle === "" || employee.jobData.jobTitle === jobTitle;
    const isSkillsMatching = [...skillsSelected].every((skill) =>
      [...employee.skills.hardSkills, ...employee.skills.softSkills].includes(
        skill
      )
    );

    return (
      isNameMatching &&
      isWithinAgeRange &&
      isWorkStatusMatching &&
      isJobTitleMatching &&
      isSkillsMatching
    );
  });
};

const Employees = () => {
  const searchFilter = useSelector<Types.CombinedReducers, Types.SearchReducerState>(
    (state) => state.search
  );
  const [isLoading, setIsLoading] = useState(true);
  const { employeeList } = useSelector<
    Types.CombinedReducers,
    Types.ApplicationReducerState
  >((state) => state.application);
  const [filteredEmployees, setFilteredEmployees] = useState<Types.Employee[]>(
    []
  );

  useEffect(() => {
    const loadingDelay = 300;
    setTimeout(() => setIsLoading(false), loadingDelay);
  }, []);

  useEffect(() => {
    setFilteredEmployees(filterEmployees(employeeList, searchFilter));
  }, [employeeList.length]);

  return (
    <div
      id="employees"
      className="p-4 position-relative min-vh-100 w-100 d-flex flex-column"
    >
      <div className="d-flex mt-sm-0 mt-4 mb-3 gap-2 w-100 justify-content-between align-items-center">
        <h3 className="text-gray-800 text-sm-start text-center">Employees</h3>
        <Link to="/employees/new" className="btn btn-primary">
          New Employee
        </Link>
      </div>
      <div
        style={{ gap: "1rem" }}
        className="d-flex mb-4 flex-column flex-sm-row"
      >
        <SearchBar />
        <div className="d-flex justify-content-evenly" style={{ gap: "1rem" }}>
          <DisplayFormat />
          <SearchFilter />
        </div>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div
          className={`employees ${
            searchFilter.displayFormat === Types.EmployeeCardsFormat.CARD
              ? "card-format"
              : "row-format"
          }`}
        >
          {filteredEmployees
            .slice((searchFilter.page - 1) * 20, searchFilter.page * 20)
            .map((employee, idx) => (
              <Employee {...{ key: idx, ...employee}} />
            ))}
        </div>
      )}{" "}
      {!isLoading && <Pagination employeesCount={filteredEmployees.length} />}
    </div>
  );
};

export default memo(Employees);
