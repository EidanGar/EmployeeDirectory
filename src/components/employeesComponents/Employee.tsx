import * as Types from "../../types";
import { Card, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { BsBuilding, BsTelephone } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import EmployeeRow from "./EmployeeRow";
import EmployeeControl from "./EmployeeControl";
import placeholderEmployee from "../../static/placeholderEmployee.png";

const Employee = (employee: Types.Employee) => {
  const { displayFormat } = useSelector<
    Types.CombinedReducers,
    Types.SearchReducerState
  >((state) => state.search);

  const EmployeeTable = () => (
    <Table className="employee-card-table w-100" hover>
      <tbody>
        <tr>
          <td>
            <FaUserTie />
          </td>
          <td>{employee.jobData.jobTitle}</td>
        </tr>
        <tr>
          <td>
            <BsBuilding />
          </td>
          <td>{employee.jobData.department}</td>
        </tr>
        <tr>
          <td>
            <AiOutlineMail />
          </td>
          <td>{employee.contact.email.split("@")[0]}</td>
        </tr>
        <tr>
          <td>
            <BsTelephone />
          </td>
          <td>{employee.contact.phone}</td>
        </tr>
      </tbody>
    </Table>
  );

  return displayFormat === Types.EmployeeCardsFormat.CARD ? (
    <Card
      className={`d-flex align-items-center p-3 text-dark border-bottom-${
        employee.isWorker ? "success" : "warning"
      }`}
      style={{ maxWidth: 320 }}
    >
      <Card.Img
        variant="top rounded-circle w-75"
        src={employee.pictures.imageUrl || placeholderEmployee}
      />
      <Card.Body className="text-center w-100">
        <h5 className="text-dark text-nowrap m-0 mb-4">{employee.name}</h5>
        <EmployeeTable />
      </Card.Body>
      <EmployeeControl {...employee } />
    </Card>
  ) : (
    <EmployeeRow {...employee} />
  );
};

export default Employee;
