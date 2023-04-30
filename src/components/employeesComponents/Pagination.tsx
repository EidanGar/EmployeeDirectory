import * as Types from "../../types";
import { useDispatch, useSelector } from "react-redux";

const Pagination = ({ employeesCount }: { employeesCount: number }) => {
  const dispatch = useDispatch();

  const { page: currentPage } = useSelector<
    Types.CombinedReducers,
    Types.SearchReducerState
  >((state) => state.search);

  const setPage = (page: number) => {
    dispatch({ type: Types.FilterActionPayload.PAGE, payload: page });
  };

  const Page = ({ page }: { page: number }) => (
    <span
      onClick={() => setPage(page)}
      className={`pagination__page bg-light d-flex align-items-center justify-content-center ${
        currentPage === page && "page--selected"
      }`}
    >
      {page}
    </span>
  );

  const arrayFromNumber = (num: number) => {
    const array = [];

    for (let i = 0; i < num; i++) {
      array.push(i + 1);
    }

    return array;
  };

  return (
    <div className="d-flex w-100 p-3 pt-5 align-items-center justify-content-center gap-4">
      {arrayFromNumber(Math.ceil(employeesCount / 20)).map((page, idx) => (
        <Page key={idx} page={page} />
      ))}
    </div>
  );
};

export default Pagination;
