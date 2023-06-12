import * as Data from "../../static/employeeData";
import { Employee, Project } from "../../types";

const getRandomDate = (isPastDate: boolean) => {
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
    : new Date(today.getFullYear(), today.getMonth() + offset + 1, 0).getTime();
  const randomTimestamp =
    Math.floor(Math.random() * (endTimestamp - startTimestamp)) +
    startTimestamp;
  const randomDate = new Date(randomTimestamp);
  const month = String(randomDate.getMonth() + 1).padStart(2, "0");
  const day = String(randomDate.getDate()).padStart(2, "0");
  const year = String(randomDate.getFullYear()).slice(-2);
  return `${month}-${day}-${year}`;
};

const removeStringDuplicates = (array: string[]): string[] => {
  const uniqueArray: string[] = [];

  for (const item of array) {
    if (!uniqueArray.includes(item)) {
      uniqueArray.push(item);
    }
  }

  return uniqueArray;
}

const getProjects = (length: number, employeeList: Employee[]): Project[] => {
  const projects = [];

  const { projectData } = Data;
  const departments = removeStringDuplicates(employeeList.map((emp) => emp.jobData.department));
  const departmentsLength = departments.length;

  for (let idx = 0; idx < length; idx++) {
    const department =
      departments[Math.floor(Math.random() * departmentsLength)];
    const departmentEmployees = employeeList.filter(
      (employee) => employee.jobData.department === department
    );
    const lead =
      departmentEmployees[
        Math.floor(Math.random() * departmentEmployees.length)
      ];
    const randomEmployeeIndex = Math.floor(
      Math.random() * projectData[department].length
    );
    const projectInfo = projectData[department][randomEmployeeIndex];

    const project = {
      lead,
      projectInfo,
      department,
      timeline: {
        startDate: getRandomDate(true),
        deadline: getRandomDate(false)
      },
      progress: Math.floor(Math.random() * 101),
      id: idx
    };

    projects.push(project);
  }

  return projects;
};

export default getProjects;
