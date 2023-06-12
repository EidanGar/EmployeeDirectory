import fetchEmployees from ".";
import { Employee } from "../../types";

describe("fetchEmployees", () => {
  it("returns an array of employees with truthy values for all properties except isWorker and id", async () => {
    const employees: Employee[] = await fetchEmployees();

    expect(Array.isArray(employees)).toBe(true);
    expect(employees.length).toBeGreaterThan(0);

    for (const employee of employees) {
      expect(employee.name).toBeTruthy();
      expect(employee.jobData).toBeTruthy();
      expect(employee.pictures).toBeTruthy();
      expect(employee.contact).toBeTruthy();
      expect(employee.skills).toBeTruthy();
      expect(employee.description).toBeTruthy();
      expect(employee.age).toBeTruthy();
      expect(typeof employee.isWorker).toBe("boolean");
      expect(typeof employee.id).toBe("number");
    }
  });
});
