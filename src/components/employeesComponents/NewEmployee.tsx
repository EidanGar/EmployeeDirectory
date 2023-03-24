import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import * as Types from "../../types";
import * as Data from "../../static/employeeData";

const initialEmployeeState: Types.Employee = {
  name: "",
  age: NaN,
  pictures: {
    iconUrl: "",
    imageUrl: ""
  },
  contact: {
    email: "",
    phone: ""
  },
  description: "",
  isWorker: true,
  jobData: {
    jobTitle: "",
    department: ""
  },
  skills: {
    softSkills: [],
    hardSkills: []
  }
};

const NewEmployee = () => {
  const dispatch = useDispatch();
  const { employeeList } = useSelector<
    Types.CombinedReducers,
    Types.ApplicationReducerState
  >((state) => state.application);

  const [employee, setEmployee] = useState<Types.Employee>(
    initialEmployeeState
  );
  const [employeeName, setEmployeeName] = useState<[string, string]>(["", ""]);

  const handleEmployeeInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value } = target;

    switch (name) {
      case "firstName":
        setEmployeeName([value, employeeName[1]]);
        break;
      case "lastName":
        setEmployeeName([employeeName[0], value]);
        break;
      case "email":
      case "phone":
        setEmployee((prev) => {
          return {
            ...prev,
            contact: {
              ...prev.contact,
              [name]: value
            }
          };
        });
        break;
      case "age":
      case "description":
        setEmployee((prev) => {
          return {
            ...prev,
            [name]: value
          };
        });
        break;
      case "pictures":
        setEmployee((prev) => {
          return {
            ...prev,
            pictures: {
              imageUrl: value,
              iconUrl: value
            }
          };
        });
        break;
      default:
        setEmployee((prev) => {
          return name in prev
            ? {
                ...prev,
                [name]: value
              }
            : prev;
        });
    }
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
            [name]: value
          };
        });
        break;
      case "jobTitle":
        setEmployee((prev) => {
          return {
            ...prev,
            jobData: {
              department: value.split("-")[0],
              jobTitle: value.split("-")[1]
            }
          };
        });
        break;
    }
  };

  const handleEmployeeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newEmployee = { ...employee, name: employeeName.join(" ") };
    const newEmployeeList = [...employeeList, newEmployee];
    dispatch({
      type: Types.ApplicationReducerTypes.LIST,
      payload: newEmployeeList
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
        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            onChange={handleEmployeeInputChange}
            name="firstName"
            type="text"
            placeholder="First Name"
          />
        </Form.Group>

        <Form.Group controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            onChange={handleEmployeeInputChange}
            name="lastName"
            type="text"
            placeholder="Last Name"
          />
        </Form.Group>

        <Form.Group controlId="lastName">
          <Form.Label>Age</Form.Label>
          <Form.Control
            onChange={handleEmployeeInputChange}
            name="age"
            type="number"
            placeholder="Age"
          />
        </Form.Group>

        <Form.Group controlId="emailAddress">
          <Form.Label>Email address</Form.Label>
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
          <Form.Label>Phone number</Form.Label>
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
          <Form.Label>Employee Job</Form.Label>
          <Form.Select onChange={handleEmployeeSelectChange} name="jobTitle">
            <option>Job Title</option>
            {Data.jobDepartments.map((department, idx1) =>
              department.jobs.map((job, idx2) => (
                <option value={`${department}-${job}`} key={"" + idx1 + idx2}>
                  {job.title}
                </option>
              ))
            )}
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Employee Description</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Describe yourself here"
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
