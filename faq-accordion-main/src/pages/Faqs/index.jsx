import HeaderSvg from "../../assets/images/background-pattern-desktop.svg";
import StarSvg from "../../assets/images/icon-star.svg";
import FaqsList from "../../faqs.js";
import FaqComponent from "./components/FaqComponent.jsx";
export default function Faqs() {
  console.log(FaqsList);
  return (
    <>
      <div className="header-img">
        <img src={HeaderSvg} alt="header-svg" className="header-img" />
      </div>
      <div className="container">
        <div>
          <div className="faqs-header ">
            <img src={StarSvg} alt="star-svg" />
            <span>FAQs</span>
          </div>
          <div className="faq-component-container">
            {FaqsList.map((faq, index) => (
              <FaqComponent
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
