import { useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import * as Data from "../../static/employeeData";
import CreatableSelect from "react-select/creatable";
import { MultiValue } from "react-select";
import * as Types from "../../types";
import { useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { GoSettings } from "react-icons/go";

const allSkillOptions: Types.SelectOption[] = Data.allHardSkills
  .concat(...Data.softSkills)
  .map((skill) => {
    return {
      value: skill,
      label: skill,
      color: "#00B8D9",
      isFixed: true,
    };
  });

interface advancedFilterState {
  workStatus: boolean | "ANY";
  jobTitle: string;
  skillsSelected: string[];
  ageRange: Types.AgeRange;
}

const defaultFilterState: advancedFilterState = {
  jobTitle: "",
  workStatus: "ANY",
  skillsSelected: [],
  ageRange: {
    min: 0,
    max: 100,
  },
};

const SearchFilter = () => {
  const [show, setShow] = useState(false);
  const [filter, setFilter] = useState<advancedFilterState>(defaultFilterState);
  const dispatch = useDispatch();

  const handleClose = () => {
    setShow(false);
    setFilter(defaultFilterState);
  };

  const handleShow = () => setShow(true);

  const filterEmployees = () => {
    dispatch({ type: Types.FilterActionPayload.PAGE, payload: 1 });
    dispatch({
      type: Types.FilterActionPayload.SKILLS,
      payload: filter.skillsSelected,
    });
    dispatch({
      type: Types.FilterActionPayload.TITLE,
      payload: filter.jobTitle,
    });
    dispatch({
      type: Types.FilterActionPayload.WORKING,
      payload: filter.workStatus,
    });
    dispatch({
      type: Types.FilterActionPayload.AGE,
      payload: filter.ageRange,
    });
    setShow(false);
  };

  const clearFilter = () => {
    setFilter(defaultFilterState);
    filterEmployees();
  };

  const handgleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value } = target;
    if (name === "MIN") {
      setFilter((prev) => {
        return { ...prev, ageRange: { ...prev.ageRange, min: +value } };
      });
    } else {
      setFilter((prev) => {
        return { ...prev, ageRange: { ...prev.ageRange, max: +value } };
      });
    }
  };

  const handleSkillChange = (
    e: MultiValue<{
      value: string;
      label: string;
    }>
  ) => {
    const allSkillsStrings = new Set(
      Data.allHardSkills.concat(...Data.softSkills)
    );
    if (e.length && allSkillsStrings.has(e[e.length - 1].value)) {
      const skillsSelected = [...filter.skillsSelected, e[e.length - 1].value];
      setFilter((prev) => {
        return { ...prev, skillsSelected };
      });
    }
  };

  const handleWorkStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const target = e.target as HTMLSelectElement;
    let workStatus =
      target.value === "Working"
        ? true
        : target.value === "ANY"
        ? ("ANY" as const)
        : false;

    setFilter((prev: advancedFilterState) => {
      return { ...prev, workStatus };
    });
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const target = e.target as HTMLSelectElement;
    setFilter((prev) => {
      return { ...prev, jobTitle: target.value };
    });
  };

  return (
    <div className="w-100">
      <Button
        variant="outline-secondary"
        onClick={handleShow}
        className="text-nowrap w-100"
      >
        <GoSettings />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Filter Employees</Modal.Title>
          <Button onClick={handleClose} variant="btn-secondary">
            <AiOutlineClose />
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Form style={{ gap: "1rem" }} className="d-flex flex-column">
            <div>
              <Form.Label className="text-dark" htmlFor="job-title-filter">
                Job Title
              </Form.Label>
              <Form.Select
                onChange={handleTitleChange}
                id="job-title-filter"
                className="custom-select"
                value={filter.jobTitle ?? ""}
              >
                <option value="">Any</option>
                {Data.allJobs.map((job: string, i: number) => (
                  <option key={i} value={job}>
                    {job}
                  </option>
                ))}
              </Form.Select>
            </div>
            <div>
              <Form.Label htmlFor="skillOptionsSelect">Skills</Form.Label>
              <CreatableSelect
                onChange={handleSkillChange}
                id="skillOptionsSelect"
                options={allSkillOptions}
                isMulti
                isClearable
              />
            </div>
            <div>
              <Form.Label htmlFor="workStatus-status">Work Status</Form.Label>
              <Form.Select
                onChange={handleWorkStatusChange}
                className="custom-select"
                id="workStatus-status"
                value={
                  filter.workStatus === true
                    ? "Working"
                    : filter.workStatus === "ANY"
                    ? "ANY"
                    : "Not Working"
                }
              >
                <option value="ANY">Any</option>
                <option value="Working">Present</option>
                <option value="Not Working">Absent</option>
              </Form.Select>
            </div>
            <InputGroup className="mb-3">
              <InputGroup.Text>Employees' Age</InputGroup.Text>
              <Form.Control
                placeholder="Minimum age"
                type="number"
                aria-label="min age"
                name="MIN"
                onChange={handgleAgeChange}
              />
              <Form.Control
                placeholder="Maximum age"
                type="number"
                aria-label="max age"
                name="MAX"
                onChange={handgleAgeChange}
              />
            </InputGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={clearFilter}>
            Clear
          </Button>
          <Button variant="primary" onClick={filterEmployees}>
            Filter
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SearchFilter;
