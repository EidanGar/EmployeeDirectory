import { filterEmployees } from '../pages/Employees';
import { Employee, EmployeeCardsFormat, SearchReducerState, SortActionPayload } from '../types';

describe('filterEmployees', () => {
    const employees: Employee[] = [
      {
        name: 'Connie Mitchell',
        jobData: { jobTitle: 'Recruiter', department: 'Human Resources (HR)' },
        pictures: {
          iconUrl: '',
          imageUrl: ''
        },
        contact: {
          email: '',
          phone: ''
        },
        skills: { 
          hardSkills: ['Sourcing and interviewing techniques', 'Employment law compliance', 'Talent acquisition and retention strategies'],
          softSkills: ['Teamwork', 'Collaboration', 'Critical Thinking', 'Flexibility', 'Positive Attitude', 'Humor', 'Empathy', 'Presentation Skills', 'Adaptability']
        },
        description: '',
        age: 24,
        isWorker: false,
        id: 0,
      }
    ];
  
    it('should filter employees based on search term', () => {
      const searchFilter: SearchReducerState = {
        searchTerm: 'Connie',
        jobTitle: '',
        workStatus: 'ANY',
        skillsSelected: [],
        ageRange: { min: 0, max: 100 },
        jobDepartment: '',
        sortDirection: SortActionPayload.ASCENDING,
        displayFormat: EmployeeCardsFormat.CARD,
        page: 1,
      };
  
      const result = filterEmployees(employees, searchFilter);
      expect(result).toEqual([employees[0]]);
    });
  
    it('should filter employees based on job title', () => {
      const searchFilter: SearchReducerState = {
        searchTerm: '',
        jobTitle: 'Recruiter',
        workStatus: 'ANY',
        skillsSelected: [],
        ageRange: { min: 0, max: 100 },
        jobDepartment: '',
        sortDirection: SortActionPayload.ASCENDING,
        displayFormat: EmployeeCardsFormat.CARD,
        page: 1,
      };
  
      const result = filterEmployees(employees, searchFilter);
      expect(result).toEqual([employees[0]]);
    });
  
    it('should filter employees based on work status', () => {
      const searchFilter: SearchReducerState = {
        searchTerm: '',
        jobTitle: '',
        workStatus: false,
        skillsSelected: [],
        ageRange: { min: 0, max: 100 },
        jobDepartment: '',
        sortDirection: SortActionPayload.ASCENDING,
        displayFormat: EmployeeCardsFormat.CARD,
        page: 1,
      };
  
      const result = filterEmployees(employees, searchFilter);
      expect(result).toEqual([employees[0]]);
    });
  
    it('should filter employees based on skills selected', () => {
      const searchFilter: SearchReducerState = {
        searchTerm: '',
        jobTitle: '',
        workStatus: 'ANY',
        skillsSelected: ['Teamwork'],
        ageRange: { min: 0, max: 100 },
        jobDepartment: '',
        sortDirection: SortActionPayload.ASCENDING,
        displayFormat: EmployeeCardsFormat.CARD,
        page: 1,
      };
  
      const result = filterEmployees(employees, searchFilter);
      expect(result).toEqual([employees[0]]);
    });
  
    it('should filter employees based on age range', () => {
      const searchFilter: SearchReducerState = {
        searchTerm: '',
        jobTitle: '',
        workStatus: 'ANY',
        skillsSelected: [],
        ageRange: { min: 25, max: 30 },
        jobDepartment: '',
        sortDirection: SortActionPayload.ASCENDING,
        displayFormat: EmployeeCardsFormat.CARD,
        page: 1,
      };
  
      const result = filterEmployees(employees, searchFilter);
      expect(result).toEqual([]);
    });
  });  