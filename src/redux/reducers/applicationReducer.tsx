import * as Types from "../../types";

const applicationReducer = (
  state: Types.ApplicationReducerState = {
    theme: Types.ApplicationThemes.LIGHT,
    isLoading: false,
    appError: {
      error: false,
      reason: ""
    },
    employeeList: JSON.parse(String(localStorage.getItem("EMPLOYEES"))) ?? [],
    projects: JSON.parse(String(localStorage.getItem("PROJECTS"))) ?? []
  },
  action: Types.ApplicationReducerAction
) => {
  switch (action.type) {
    case Types.ApplicationReducerTypes.LOADING:
      return { ...state, isLoading: action.payload as boolean };
    case Types.ApplicationReducerTypes.THEME:
      return { ...state, theme: action.payload as Types.ApplicationThemes };
    case Types.ApplicationReducerTypes.ERROR:
      return { ...state, appError: action.payload as Types.AppError };
    case Types.ApplicationReducerTypes.LIST:
      localStorage.setItem("EMPLOYEES", JSON.stringify(action.payload));
      return { ...state, employeeList: action.payload as Types.Employee[] };
    case Types.ApplicationReducerTypes.PROJECT:
      localStorage.setItem("PROJECTS", JSON.stringify(action.payload));
      return { ...state, projects: action.payload as Types.Project[] };
    default:
      return state;
  }
};

export default applicationReducer;
