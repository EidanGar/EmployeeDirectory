import { createStore, combineReducers } from "redux";
import searchReducer from "./reducers/searchReducer";
import applicationReducer from "./reducers/applicationReducer";

const reducers = combineReducers({
  application: applicationReducer,
  search: searchReducer
});

const store = createStore(reducers);

export default store;
