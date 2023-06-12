import getProjects from ".";
import { Employee, Project } from "../../types";

describe("getProjects", () => {
  it("returns an array of projects with valid property values", () => {
    const employeeList: Employee[] = [
      {
        name: "John Doe",
        jobData: {
          department: "Information Technology (IT)",
          jobTitle: "Software Engineer"
        },
        pictures: {
          iconUrl: "",
          imageUrl: ""
        },
        contact: {
          email: "",
          phone: ""
        },
        skills: {
          softSkills: [],
          hardSkills: []
        },
        description: "",
        age: 30,
        isWorker: true,
        id: 1
      }
    ];
    const projects: Project[] = getProjects(5, employeeList);

    expect(Array.isArray(projects)).toBe(true);
    expect(projects.length).toBe(5);

    for (const project of projects) {
      expect(typeof project.department).toBe("string");
      expect(typeof project.timeline.startDate).toBe("string");
      expect(typeof project.timeline.deadline).toBe("string");
      expect(typeof project.progress).toBe("number");
      expect(project.lead).toBeTruthy();
      expect(typeof project.projectInfo.title).toBe("string");
      expect(typeof project.projectInfo.description).toBe("string");
      expect(typeof project.id).toBe("number");
    }
  });
});
