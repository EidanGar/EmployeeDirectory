import ProjectComponent from "../components/ProjectComponent";
import { useSelector } from "react-redux";
import * as Types from "../types";

const Projects = () => {
  const { projects } = useSelector<
    Types.CombinedReducers,
    Types.ApplicationReducerState
  >((state) => state.application);

  return (
    <div className="p-4 p-4 d-flex flex-column min-vh-100 w-100 gap-3">
      <h3 className="text-gray-800 mb-2 mt-sm-0 mt-4 text-sm-start text-center">
        Projects
      </h3>
      <div className="projects d-flex flex-column gap-3">
        {projects.map((project, idx) => (
          <ProjectComponent key={idx} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
