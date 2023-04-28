import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

interface AccordionProps {
  name: string;
  children?: JSX.Element | JSX.Element[];
  className?: string;
  divider?: boolean;
}

const Accordion = ({ name, children, className, divider }: AccordionProps) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="d-flex flex-column">
      <div
        style={{ paddingLeft: "1rem" }}
        className={`${
          className ?? ""
        } rounded accordion d-flex justify-content-between align-items-center py-2`}
        onClick={() => setIsShown((prev) => !prev)}
      >
        <h4 className="text-primary mb-0 ml-0">{name}</h4>
        <button className="accordion-trigger">
          <IoIosArrowForward
            className={`accordion-trigger-icon ${isShown ? "arrow-down" : ""}`}
          />
        </button>
      </div>
      <div
        className={`accordion-content ${
          isShown && "accordion-content-shown"
        } flex-column gap-2 px-3 mt-2`}
      >
        {children}
        {(divider ?? true) && <hr />}
      </div>
    </div>
  );
};

export default Accordion;
