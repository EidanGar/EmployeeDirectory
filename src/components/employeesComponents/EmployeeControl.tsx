import * as Types from "../../types";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FaTrash, FaInfoCircle, FaCheckCircle } from "react-icons/fa";
import { AiFillWarning } from "react-icons/ai";

const EmployeeControl = ({
  employee,
  idx
}: {
  employee: Types.Employee;
  idx: number;
}) => {
  const dispatch = useDispatch();
  const { employeeList } = useSelector<
    Types.CombinedReducers,
    Types.ApplicationReducerState
  >((state) => state.application);
  const [workStatus, setWorkStatus] = useState<boolean>(employee.isWorker);

  const deleteEmployee = () => {
    dispatch({
      type: Types.ApplicationReducerTypes.LIST,
      payload: [...employeeList.slice(0, idx), ...employeeList.slice(idx + 1)]
    });
  };

  const setWorkerStatusPositive = () => {
    setWorkStatus(true);
    const alteredEmployeeList = [...employeeList];
    alteredEmployeeList[idx] = { ...employee, isWorker: true };
    dispatch({
      type: Types.ApplicationReducerTypes.LIST,
      payload: alteredEmployeeList
    });
  };

  const setWorkerStatusNegative = () => {
    setWorkStatus(false);
    const alteredEmployeeList = [...employeeList];
    alteredEmployeeList[idx] = { ...employee, isWorker: false };
    dispatch({
      type: Types.ApplicationReducerTypes.LIST,
      payload: alteredEmployeeList
    });
  };

  return (
    <div className="d-flex justify-content-center control gap-3">
      <Link
        className="btn btn-primary"
        to={`/employees/${employee.name.toLowerCase().split(" ").join("-")}`}
      >
        <FaInfoCircle />
      </Link>
      <Button onClick={deleteEmployee} variant="danger">
        <FaTrash />
      </Button>
      {workStatus ? (
        <Button onClick={setWorkerStatusNegative} variant="warning text-light">
          <AiFillWarning />
        </Button>
      ) : (
        <Button onClick={setWorkerStatusPositive} variant="success">
          <FaCheckCircle />
        </Button>
      )}
    </div>
  );
};

export default EmployeeControl;
