import { useDispatch, useSelector } from "react-redux";
import * as Types from "../../types";
import { HiViewGrid, HiViewList } from "react-icons/hi";

const DisplayFormat = () => {
  const dispatch = useDispatch();
  const { displayFormat } = useSelector<
    Types.CombinedReducers,
    Types.SearchReducerState
  >((state) => state.search);

  const setCardFormat = () => {
    dispatch({
      type: Types.FilterActionPayload.FORMAT,
      payload: Types.EmployeeCardsFormat.CARD
    });
  };

  const setRowFormat = () => {
    dispatch({
      type: Types.FilterActionPayload.FORMAT,
      payload: Types.EmployeeCardsFormat.ROW
    });
  };

  return (
    <div className="card-display d-flex">
      <div
        onClick={setCardFormat}
        className={`display--cards ${
          displayFormat === Types.EmployeeCardsFormat.CARD
            ? "selected--format"
            : ""
        }`}
      >
        <HiViewGrid />
      </div>
      <div
        onClick={setRowFormat}
        className={`display--cards ${
          displayFormat === Types.EmployeeCardsFormat.ROW
            ? "selected--format"
            : ""
        }`}
      >
        <HiViewList />
      </div>
    </div>
  );
};

export default DisplayFormat;
