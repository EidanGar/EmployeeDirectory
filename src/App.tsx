import "./styles/sb-admin-2.min.css";
import "./styles/AppStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import fetchEmployees from "./helpers/fetchEmployees";
import * as Types from "./types";
import Employees from "./pages/Employees";
import Dashboard from "./pages/Dashboard";
import Departments from "./pages/Departments";
import Projects from "./pages/Projects";
import EmployeeProfile from "./components/employeesComponents/EmployeeProfile";
import NewEmployee from "./components/employeesComponents/NewEmployee";
import Help from "./pages/Help";
import Error from "./components/Error";
import NotFound from "./components/NotFound";
import store from "./redux/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  const { isLoading, appError, employeeList } = useSelector<
    Types.CombinedReducers,
    Types.ApplicationReducerState
  >((state) => state.application);

  useEffect(() => {
    const setState = async () => {
      if (employeeList.length !== 0) return;
      dispatch({ type: Types.ApplicationReducerTypes.LOADING, payload: true });
      try {
        const fetchResult = await fetchEmployees();

        if (fetchResult && !("error" in fetchResult)) {
          dispatch({
            type: Types.ApplicationReducerTypes.LIST,
            payload: fetchResult,
          });
        } else {
          throw new Error(fetchResult.reason);
        }
      } catch (error) {
        dispatch({
          type: Types.ApplicationReducerTypes.ERROR,
          payload: { error: true, reason: "Failed to fetch employees" },
        });
      }
      setTimeout(() => {
        dispatch({
          type: Types.ApplicationReducerTypes.LOADING,
          payload: false,
        });
      }, 200);
    };

    setState();
  }, [employeeList.length, dispatch]);

  return (
    <div className="app bg-gray-200 position-relative">
      <Navigation />
      {appError.error && <Error />}
      <div id="content" className="container mt-5 mt-sm-3">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/employees">
            <Route index element={isLoading ? <Loading /> : <Employees />} />
            <Route path=":id" element={<EmployeeProfile />} />
            <Route path="new" element={<NewEmployee />} />
          </Route>
          <Route path="/projects" element={<Projects />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/help" element={<Help />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
