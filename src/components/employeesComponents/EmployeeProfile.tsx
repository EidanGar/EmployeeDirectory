import { useSelector, useDispatch } from "react-redux";
import * as Types from "../../types";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const EmployeeProfile = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { employeeList } = useSelector<
    Types.CombinedReducers,
    Types.ApplicationReducerState
  >((state) => state.application);

  const selectedEmployee = employeeList.filter(employee => employee.name.toLowerCase().split(" ").join("-") === id)[0];

  return (
    <div
      className="container d-flex flex-column gap-3 bg-light w-100 min-vh-100 p-4"
    >
      <div className="profile-topmost d-flex justify-content-start mb-5">
        <Link
          className="btn position-absolute btn-secondary"
          to=".."
        >
          <AiOutlineArrowLeft />
        </Link>
      </div>
      <div className="container w-100 d-flex flex-column gap-3">
      <div className="d-flex flex-column flex-sm-row align-items-center align-items-sm-start">
              <img
          src={
            selectedEmployee?.pictures.imageUrl ??
            "../../static/placeholderEmployee.png"
          }
          alt="Employee"
          className="w-sm-50 w-100 mb-3"
          style={{ maxWidth: 300 }}
        />
        <div className="d-flex flex-column profile-topmost-content p-4">
          <h2 className="employee-profile-name">{selectedEmployee?.name}</h2>
          <span className="profile-job-title">
            {selectedEmployee?.jobData.jobTitle}
          </span>
          <span className="profile-job-department">
            {selectedEmployee?.jobData.department} Department
          </span>
          <span className="profile-age">{selectedEmployee?.age} years old</span>
        </div>

      </div>
        <div className="profile-middle d-flex flex-column gap-3">
          <div className="profile-soft-skills">
            <h4 className="mt-3">Soft skills</h4>
            <div className="d-flex flex-wrap gap-1">
              {selectedEmployee?.skills.softSkills.map((skill, idx) => (
                <span className="badge badge-primary" key={idx}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="profile-hard-skills">
            <h4>Hard skills</h4>
            <div className="d-flex flex-wrap gap-1">
              {selectedEmployee?.skills.hardSkills.map((skill, idx) => (
                <span className="badge badge-primary" key={idx}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <span className="profile-description">
            {selectedEmployee?.description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;
