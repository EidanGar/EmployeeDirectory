import * as Types from "../../types";

const searchReducer = (
  state: Types.SearchReducerState = {
    searchTerm: "",
    jobTitle: "",
    workStatus: "ANY",
    skillsSelected: [],
    ageRange: {
      min: 0,
      max: 100
    },
    jobDepartment: "",
    sortDirection: Types.SortActionPayload.DEFAULT,
    displayFormat: Types.EmployeeCardsFormat.CARD
  },
  action: Types.SearchReducerAction
) => {
  switch (action.type) {
    case Types.SortActionPayload.ASCENDING:
      return { ...state, sortDirection: Types.SortActionPayload.ASCENDING };
    case Types.SortActionPayload.DECENDING:
      return { ...state, sortDirection: Types.SortActionPayload.DECENDING };
    case Types.SortActionPayload.DEFAULT:
      return { ...state, sortDirection: Types.SortActionPayload.DEFAULT };
    case Types.FilterActionPayload.SEARCH:
      return { ...state, searchTerm: action.payload as string };
    case Types.FilterActionPayload.TITLE:
      return { ...state, jobTitle: action.payload as string };
    case Types.FilterActionPayload.SKILLS:
      return { ...state, skillsSelected: action.payload as string[] };
    case Types.FilterActionPayload.WORKING:
      return { ...state, workStatus: action.payload as boolean | "ANY" };
    case Types.FilterActionPayload.AGE:
      return {
        ...state,
        ageRange: action.payload as { min: number; max: number }
      };
    case Types.FilterActionPayload.DEPARTMENT:
      return { ...state, jobDepartment: action.payload as string };
    case Types.FilterActionPayload.FORMAT:
      return {
        ...state,
        displayFormat: action.payload as Types.EmployeeCardsFormat
      };
    default:
      return state;
  }
};

export default searchReducer;
