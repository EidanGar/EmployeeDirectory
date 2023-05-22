import { BsSpeedometer2, BsFillPeopleFill } from "react-icons/bs";
import { BsBuilding } from "react-icons/bs";
import { HiDocumentReport } from "react-icons/hi";
import { FiHelpCircle } from "react-icons/fi";
import { useState } from "react";
import { ApplicationPages } from "../types";
import { Link } from "react-router-dom";

const Navigation = () => {
  const getCurrentPage = () => {
    const currentHref = window.location.href;
    const currentUrl = currentHref.match(/\/\w+/g);
    if (currentUrl == null) return ApplicationPages.DASHBOARD;

    if (currentHref.includes("/employees")) {
      return ApplicationPages.EMPLOYEES;
    } else if (currentHref.includes("/departments")) {
      return ApplicationPages.DEPARTMENTS;
    } else if (currentHref.includes("/projects")) {
      return ApplicationPages.PROJECTS;
    } else if (currentHref.includes("/help")) {
      return ApplicationPages.HELP;
    } else if (
      currentHref[currentHref.length - 1] === "/" ||
      currentUrl.length === 1
    ) {
      return ApplicationPages.DASHBOARD;
    }
  };

  const [currentPage, setCurrentPage] = useState(getCurrentPage());

  const navLinkClass = (isSelected: boolean): string => {
    const NavItemClass =
      "navigation__link d-flex gap-3 align-items-center w-100 rounded";
    const unselectedLinkClass = NavItemClass + " text-dark";
    const selected = NavItemClass + " bg-primary text-light active";
    return isSelected ? selected : unselectedLinkClass;
  };

  const navLinkText = "navigation__text h6 m-0";

  return (
    <div className="navigation position-fixed start-0 top-0 p-3 bg-light vh-sm-100 d-flex flex-sm-column gap-3">
      <Link
        title="Dashboard"
        to="/"
        className={navLinkClass(currentPage === ApplicationPages.DASHBOARD)}
        onClick={() => setCurrentPage(ApplicationPages.DASHBOARD)}
      >
        <BsSpeedometer2 className="navigation__icon" />
        <span className={navLinkText}>Dashboard</span>
      </Link>
      <Link
        title="Employees"
        to="/employees"
        className={navLinkClass(currentPage === ApplicationPages.EMPLOYEES)}
        onClick={() => setCurrentPage(ApplicationPages.EMPLOYEES)}
      >
        <BsFillPeopleFill className="navigation__icon" />
        <span className={navLinkText}>Employees</span>
      </Link>
      <Link
        title="Departments"
        to="/departments"
        className={navLinkClass(currentPage === ApplicationPages.DEPARTMENTS)}
        onClick={() => setCurrentPage(ApplicationPages.DEPARTMENTS)}
      >
        <BsBuilding className="navigation__icon" />
        <span className={navLinkText}>Departments</span>
      </Link>
      <Link
        title="Projects"
        to="/projects"
        className={navLinkClass(currentPage === ApplicationPages.PROJECTS)}
        onClick={() => setCurrentPage(ApplicationPages.PROJECTS)}
      >
        <HiDocumentReport className="navigation__icon" />
        <span className={navLinkText}>Projects</span>
      </Link>
      <Link
        title="Help"
        to="/help"
        className={navLinkClass(currentPage === ApplicationPages.HELP)}
        onClick={() => setCurrentPage(ApplicationPages.HELP)}
      >
        <FiHelpCircle className="navigation__icon" />
        <span className={navLinkText}>Help</span>
      </Link>
      <hr />
    </div>
  );
};

export default Navigation;
