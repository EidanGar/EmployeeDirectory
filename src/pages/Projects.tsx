import ProjectComponent from "../components/ProjectComponent";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as Types from "../types";
import * as Data from "../static/employeeData";

const Projects = () => {
  const dispatch = useDispatch();
  const { employeeList, projects } = useSelector<
    Types.CombinedReducers,
    Types.ApplicationReducerState
  >((state) => state.application);

  function getRandomDate(isPastDate: boolean) {
    const today = new Date();
    const offset = isPastDate ? -3 : 3;
    const referenceDate = new Date(
      today.getFullYear(),
      today.getMonth() + offset,
      1
    );
    const startTimestamp = referenceDate.getTime();
    const endTimestamp = isPastDate
      ? today.getTime()
      : new Date(
          today.getFullYear(),
          today.getMonth() + offset + 1,
          0
        ).getTime();
    const randomTimestamp =
      Math.floor(Math.random() * (endTimestamp - startTimestamp)) +
      startTimestamp;
    const randomDate = new Date(randomTimestamp);
    const month = String(randomDate.getMonth() + 1).padStart(2, "0");
    const day = String(randomDate.getDate()).padStart(2, "0");
    const year = String(randomDate.getFullYear()).slice(-2);
    return `${month}-${day}-${year}`;
  }

  const getProject = (id: number): Types.Project => {
    const department =
      Data.jobDepartments[
        Math.floor(Math.random() * Data.jobDepartments.length)
      ].department;
    const departmentEmployees = employeeList.filter(
      (employee) => employee.jobData.department === department
    );
    const lead =
      departmentEmployees[
        Math.floor(Math.random() * departmentEmployees.length)
      ];
    const projectInfo =
      Data.projectData[department][
        Math.floor(Math.random() * Data.projectData[department].length)
      ];

    const project = {
      lead,
      projectInfo,
      department,
      timeline: {
        startDate: getRandomDate(true),
        deadline: getRandomDate(false)
      },
      progress: Math.floor(Math.random() * 101),
      id
    };

    return project;
  };

  useEffect(() => {
    const projects = [...Array(21)].map((_, i) => getProject(i));
    dispatch({
      type: Types.ApplicationReducerTypes.PROJECT,
      payload: projects
    });
  }, []);

  return (
    <div className="p-4 p-4 d-flex flex-column min-vh-100 w-100 gap-3">
      <h3 className="text-gray-800 mb-2 mt-sm-0 mt-4 text-sm-start text-center">
        Projects
      </h3>
      <div className="projects d-flex flex-column gap-3">
        {projects.map((project) => (
          <ProjectComponent {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
