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
        className={`card-display-format ${
          displayFormat === Types.EmployeeCardsFormat.CARD
            ? "selected-card-format"
            : ""
        }`}
      >
        <HiViewGrid />
      </div>
      <div
        onClick={setRowFormat}
        className={`card-display-format ${
          displayFormat === Types.EmployeeCardsFormat.ROW
            ? "selected-card-format"
            : ""
        }`}
      >
        <HiViewList />
      </div>
    </div>
  );
};

export default DisplayFormat;
