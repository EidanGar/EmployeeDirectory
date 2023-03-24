import Alert from "react-bootstrap/Alert";
import { useSelector } from "react-redux";
import * as Types from "../types";

const Error = () => {
  const { appError } = useSelector<
    Types.CombinedReducers,
    Types.ApplicationReducerState
  >((state) => state.application);

  return (
    <Alert className="position-absolute top-center" variant="danger">
      {appError.reason}
    </Alert>
  );
};

export default Error;
