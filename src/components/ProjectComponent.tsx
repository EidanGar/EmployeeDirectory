import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { Project } from "../types";
import { useDispatch, useSelector } from "react-redux";
import * as Types from "../types";
import ProgressBar from "./ProgressBar";

const ProjectComponent = ({
  lead,
  projectInfo,
  progress,
  timeline,
  department,
  id,
}: Project) => {
  const dispatch = useDispatch();
  const { projects } = useSelector<
    Types.CombinedReducers,
    Types.ApplicationReducerState
  >((state) => state.application);
  const [isShown, setIsShown] = useState(false);

  const changeProgress = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newProgress = (e.target as HTMLInputElement).value;
    const newProject = { ...projects[id], progress: newProgress };
    const updateProjects = [
      ...projects.slice(0, id),
      newProject,
      ...projects.slice(id + 1),
    ];
    dispatch({
      type: Types.ApplicationReducerTypes.PROJECT,
      payload: updateProjects,
    });
  };

  const deleteProject = () => {
    const updateProjects = [
      ...projects.slice(0, id),
      ...projects.slice(id + 1),
    ];
    dispatch({
      type: Types.ApplicationReducerTypes.PROJECT,
      payload: updateProjects,
    });
  };

  return (
    <div className="project card shadow p-3 d-flex flex-column gap-3">
      <div className="d-flex flex-column flex-sm-row justify-content-between gap-3 gap-sm-0 align-items-center w-100">
        <h4 className="mb-0 text-center text-sm-start text-dark">
          {projectInfo.title ?? "Untitled"}
        </h4>
        <div className="d-flex gap-3 align-items-center">
          <div className="w-auto">
            <input
              type="number"
              name="progress"
              className="form-control form-control-sm"
              onChange={changeProgress}
              style={{ minWidth: 40, maxWidth: 55 }}
              max={100}
              min={0}
              value={progress}
            />
          </div>
          <button onClick={deleteProject} className="btn btn-sm btn-danger">
            <FaTrash />
          </button>
          <button
            onClick={() => setIsShown((prev) => !prev)}
            className="accordion-trigger project-button"
          >
            <IoIosArrowForward
              className={`accordion-trigger-icon ${
                isShown ? "arrow-down" : ""
              }`}
            />
          </button>
        </div>
      </div>
      <div
        className={`accordion-content ${isShown && "accordion-content-shown"}`}
      >
        <div className="d-flex flex-sm-row flex-column align-items-sm-start align-items-center justify-content-start gap-3">
          <Link
            to={`/employees/${lead.name.toLowerCase().replace(" ", "-")}`}
            className=" d-flex flex-column justify-content-center align-items-center"
            style={{ textDecoration: "none" }}
          >
            <img
              className="w-sm-100 rounded"
              src={lead.pictures.imageUrl}
              alt={lead.name}
            />
            <h5 className="text-center text-nowrap mt-2 text-dark">
              {lead.name}
            </h5>
            <div className="h6 mb-1 text-gray-900 text-center">
              Project Lead
            </div>
          </Link>
          <div className="d-flex gap-1 flex-column justify-content-start align-items-start">
            <p className="mb-0 text-gray-700">Project Description:</p>
            <p style={{ fontSize: "1.2rem" }}>{projectInfo.description}</p>
            <div className="d-flex w-100 gap-3 flex-wrap">
              <h6 className="text-gray-900">
                Start Date: {timeline.startDate}
              </h6>
              <h6 className="text-gray-900">Deadline: {timeline.deadline}</h6>
            </div>
            <h6 className="text-gray-900 mb-0">{department} Department</h6>
          </div>
        </div>
      </div>
      <ProgressBar progress={progress} />
    </div>
  );
};

export default ProjectComponent;
