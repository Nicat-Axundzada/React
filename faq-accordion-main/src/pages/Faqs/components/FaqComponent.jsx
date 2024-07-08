import { useState } from "react";
import PlusIcon from "../../../assets/images/icon-plus.svg";
import MinusIcon from "../../../assets/images/icon-minus.svg";
export default function FaqComponent({ question, answer }) {
  const [isClicked, SetIsClicked] = useState(false);
  function handleClick() {
    SetIsClicked((prev) => !prev);
  }
  return (
    <div className="faq">
      <div className="faq-line">
        <p>{question}</p>
        {isClicked ? (
          <img src={MinusIcon} alt="minus-icon" onClick={handleClick}></img>
        ) : (
          <img src={PlusIcon} alt="plus-icon" onClick={handleClick}></img>
        )}
      </div>
      {isClicked ? <p>{answer}</p> : null}
    </div>
  );
}
