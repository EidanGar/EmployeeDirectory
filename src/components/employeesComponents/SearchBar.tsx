import { useDispatch, useSelector } from "react-redux";
import * as Types from "../../types";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { searchTerm } = useSelector<
    Types.CombinedReducers,
    Types.SearchReducerState
  >((state) => state.search);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    dispatch({ type: Types.FilterActionPayload.SEARCH, payload: target.value });
  };

  return (
    <div className="input-group w-100">
      <input
        type="text"
        value={searchTerm}
        className="form-control bg-light border-0 small"
        placeholder="Search for..."
        aria-label="Search employee"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
