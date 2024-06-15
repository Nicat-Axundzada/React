import { useState } from "react";
import starIcon from "../../../public/icon-star.svg";
import FaqComponent from "./components/FaqComponent";

export default function Faq() {
  const faqs = [
    {
      question: "FAQs What is Frontend Mentor, and how will it help me?",
      answer:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building. Is Frontend Mentor free? Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels. Can I use Frontend Mentor projects in my portfolio? Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers! How can I get help if I'm stuck on a Frontend Mentor challenge? The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    },
    {
      question: "Is Frontend Mentor free?",
      answer: "",
    },
    {
      question: "Can I use Frontend Mentor projects in my portfolio?",
      answer: "",
    },
    {
      question: "How can I get help if I'm stuck on a challenge?",
      answer: "",
    },
  ];
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="faq-page">
      <div className="faq-container">
        <div className="faq-header">
          <img src={starIcon} alt="star icon" />
          <h1 className="faq-header-text">FAQs</h1>
        </div>
        <div className="faqs">
          {faqs.map((faq, i) => {
            <FaqComponent
              key={i}
              answer={faq.answer}
              question={faq.question}
              isClicked={isClicked}
            />;
          })}
        </div>
      </div>
    </div>
  );
}
