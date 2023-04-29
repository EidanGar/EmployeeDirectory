import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CreatableSelect from "react-select/creatable";
import { MultiValue } from "react-select";
import * as Types from "../../types";
import * as Data from "../../static/employeeData";

const NewEmployee = () => {
  const dispatch = useDispatch();
  const { employeeList } = useSelector<
    Types.CombinedReducers,
    Types.ApplicationReducerState
  >((state) => state.application);

  const allSoftSkillOptions: Types.SelectOption[] = Data.softSkills.map(
    (skill) => {
      return {
        value: skill,
        label: skill,
        color: "#00B8D9",
        isFixed: true,
      };
    }
  );

  const initialEmployeeState: Types.Employee = {
    name: "",
    age: NaN,
    pictures: {
      iconUrl: "",
      imageUrl: "",
    },
    contact: {
      email: "",
      phone: "",
    },
    description: "",
    isWorker: true,
    jobData: {
      jobTitle: "",
      department: "",
    },
    skills: {
      softSkills: [],
      hardSkills: [],
    },
    id: NaN,
  };

  const [employee, setEmployee] =
    useState<Types.Employee>(initialEmployeeState);
  const [hardSkillOptions, setHardSkillOptions] = useState<string[]>([]);

  const getHardSkillOptions = ({
    department,
    jobTitle,
  }: Types.JobData): Types.SelectOption[] => {
    console.log(jobTitle);
    const jobDepartment = Data.jobDepartments[department];
    const indexOfJob = jobDepartment
      .map((job) => job.jobTitle)
      .indexOf(jobTitle);
    const skills = jobDepartment[indexOfJob].hardSkills;

    setHardSkillOptions(
      skills.map((skill) => ({
        value: skill,
        label: skill,
        color: "#00B8D9",
        isFixed: true,
      }))
    );
  };

  const handleEmployeeInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value } = target;

    switch (name) {
      case "name":
        setEmployee((prev) => ({ ...prev, name: value }));
        break;
      case "email":
      case "phone":
        setEmployee((prev) => {
          return {
            ...prev,
            contact: {
              ...prev.contact,
              [name]: value,
            },
          };
        });
        break;
      case "age":
      case "description":
        setEmployee((prev) => ({ ...prev, [name]: value }));
        break;
      case "pictures":
        setEmployee((prev) => {
          return {
            ...prev,
            pictures: {
              imageUrl: value,
              iconUrl: value,
            },
          };
        });
        break;
      default:
        setEmployee((prev) => {
          return name in prev
            ? {
                ...prev,
                [name]: value,
              }
            : prev;
        });
    }
  };

  const handleSoftSkillChange = (
    s: MultiValue<{
      value: string;
      label: string;
    }>
  ) => {
    console.log(s);
  };

  const handleHardSkillChange = (
    s: MultiValue<{
      value: string;
      label: string;
    }>
  ) => {
    console.log(s);
  };

  const handleEmployeeSelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const target = e.target as HTMLSelectElement;
    const { name, value } = target;
    switch (name) {
      case "gender":
        setEmployee((prev) => {
          return {
            ...prev,
            [name]: value,
          };
        });
        break;
      case "jobTitle":
        const newJobData = {
          department: value.split("-")[0],
          jobTitle: value.split("-")[1],
        };
        setEmployee((prev) => {
          return {
            ...prev,
            jobData: newJobData,
          };
        });
        getHardSkillOptions(newJobData);
        break;
    }
  };

  const handleEmployeeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newEmployee = {
      ...employee,
      name: employeeName.join(" "),
      id: employeeList.length - 1,
    };
    const newEmployeeList = [...employeeList, newEmployee];
    dispatch({
      type: Types.ApplicationReducerTypes.LIST,
      payload: newEmployeeList,
    });
    console.log(`Employee ${employeeName.join(" ")} Added`);
  };

  return (
    <div className="p-3 py-4 d-flex flex-column justify-content-center min-vh-100 w-100 gap-3">
      <h3 className="text-gray-800 mb-2 mt-sm-0 mt-4 text-sm-start text-center">
        New Employee
      </h3>
      <Form
        onSubmit={handleEmployeeSubmit}
        className="h-100 w-100 d-flex flex-column gap-3 bg-light p-4 rounded"
      >
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={handleEmployeeInputChange}
            name="name"
            type="text"
            placeholder="Your Name"
          />
        </Form.Group>

        <Form.Group controlId="age">
          <Form.Label>Age</Form.Label>
          <Form.Control
            onChange={handleEmployeeInputChange}
            name="age"
            id="age"
            type="number"
            placeholder="Age"
          />
        </Form.Group>

        <Form.Group controlId="emailAddress">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            onChange={handleEmployeeInputChange}
            name="email"
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="phoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            name="phone"
            type="tel"
            placeholder="Enter phone number"
            onChange={handleEmployeeInputChange}
          />
          <Form.Text className="text-muted">
            We'll never share your phoneNumber with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="gender">
          <Form.Label>Gender</Form.Label>
          <Form.Select onChange={handleEmployeeSelectChange} name="gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
            <option value="N/A">Prefer not answer</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="jobTitle">
          <Form.Label>Job Title</Form.Label>
          <Form.Select onChange={handleEmployeeSelectChange} name="jobTitle">
            <option>Job Title</option>
            {Data.departments.map((department, idx1) =>
              Data.jobDepartments[department].map((job, idx2) => (
                <option
                  value={`${department}-${job.jobTitle}`}
                  key={"" + idx1 + idx2}
                >
                  {job.jobTitle}
                </option>
              ))
            )}
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="softSkills">
          <Form.Label>Soft Skills</Form.Label>
          <CreatableSelect
            onChange={handleSoftSkillChange}
            name="softSkills"
            options={allSoftSkillOptions}
            isMulti
            isClearable
          />
        </Form.Group>

        <Form.Group controlId="hardSkills">
          <Form.Label>Hard Skills</Form.Label>
          <CreatableSelect
            onChange={handleHardSkillChange}
            name="hardSkills"
            options={hardSkillOptions}
            isDisabled={!employee.jobData.jobTitle}
            isMulti
            isClearable
          />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Describe employee here"
            style={{ height: "100px" }}
            name="description"
            onChange={handleEmployeeInputChange}
          />
        </Form.Group>

        <Form.Group controlId="pictures">
          <Form.Label>Picture of Employee</Form.Label>
          <Form.Control
            onChange={handleEmployeeInputChange}
            name="pictures"
            type="file"
          />
        </Form.Group>

        <Button variant="primary mt-3" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default NewEmployee;
