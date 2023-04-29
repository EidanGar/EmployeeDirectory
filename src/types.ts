type ValueOf<T> = T[keyof T];

export interface AppError {
  error: boolean;
  reason: string;
}

export type Themes = "DARK" | "LIGHT";

export enum SortActionPayload {
  DEFAULT = "DEFAULT",
  ASCENDING = "ASCENDING",
  DECENDING = "DECENDING"
}

export enum FilterActionPayload {
  SEARCH = "SEARCH",
  TITLE = "TITLE",
  AGE = "AGE",
  SKILLS = "SKILLS",
  DEPARTMENT = "DEPARTMENT",
  WORKING = "WORKING",
  FORMAT = "FORMAT"
}

export type SearchReducerActionTypes = SortActionPayload | FilterActionPayload;

export interface AgeRange {
  min: number;
  max: number;
}

export enum EmployeeCardsFormat {
  CARD = "CARD",
  ROW = "ROW"
}

export interface SearchReducerState {
  searchTerm: string;
  jobTitle: string;
  workStatus: boolean | "ANY";
  skillsSelected: string[];
  ageRange: AgeRange;
  jobDepartment: string;
  sortDirection: SortActionPayload;
  displayFormat: EmployeeCardsFormat;
}

export type SearchReducerPayload = ValueOf<SearchReducerState>;

export interface SearchReducerAction {
  type: SearchReducerActionTypes;
  payload: SearchReducerPayload;
}

export interface JobData {
  department: string;
  jobTitle: string;
}

export interface Picture {
  iconUrl: string;
  imageUrl: string;
}

export interface Contact {
  email: string;
  phone: string;
}

export interface Skills {
  softSkills: string[];
  hardSkills: string[];
}

export interface Employee {
  name: string;
  jobData: JobData;
  pictures: Picture;
  contact: Contact;
  skills: Skills;
  description: string;
  age: number;
  isWorker: boolean;
  id?: number;
}

export interface SelectOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

export enum ApplicationReducerTypes {
  THEME = "THEME",
  LOADING = "LOADING",
  ERROR = "ERROR",
  LIST = "LIST",
  PROJECT = "PROJECT"
}

export enum ApplicationThemes {
  DARK = "DARK",
  LIGHT = "LIGHT"
}

export type Project = {
  department: string;
  timeline: {
    startDate: string;
    deadline: string;
  };
  progress: number;
  lead: Employee;
  projectInfo: {
    title: string;
    description: string;
  };
  id: number;
};

export interface ApplicationReducerState {
  theme: ApplicationThemes;
  isLoading: boolean;
  appError: AppError;
  employeeList: Employee[];
  projects: Project[];
}

export type ApplicationReducerPayload = ValueOf<ApplicationReducerState>;

export interface ApplicationReducerAction {
  type: ApplicationReducerTypes;
  payload: ApplicationReducerPayload;
}

export enum ApplicationPages {
  DASHBOARD = "DASHBOARD",
  EMPLOYEES = "EMPLOYEES",
  HELP = "HELP",
  PROJECTS = "PROJECTS",
  DEPARTMENTS = "DEPARTMENTS"
}

export interface CombinedReducers {
  application: ApplicationReducerState;
  search: SearchReducerState;
}

export type ProjectInfo = {
  title: string;
  description: string;
};

export type ProjectData = Record<string, ProjectInfo[]>;
