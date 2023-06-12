import Accordion from "../components/Accordion";
import { FAQs } from "../static/employeeData";

const Help = () => {
  return (
    <div className="p-4 py-5 d-flex flex-column min-vh-100 w-100">
      <h3 className="text-gray-800 mb-5 text-center">
        Frequently Asked Questions
      </h3>
      <div className="questions d-flex flex-column gap-3 w-100">
        {FAQs.map((faq, idx) => (
          <Accordion divider={false} className="faq__accordion" key={idx} name={faq.question}>
            <p className="text-dark p-3 bg-light rounded lead">{faq.answer}</p>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default Help;
