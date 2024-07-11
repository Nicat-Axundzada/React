import CalculatorIcon from "../../assets/icon-calculator.svg";
import { useState } from "react";

export default function Calculator() {
  const [amount, setAmount] = useState(0);
  const [term, setTerm] = useState(0);
  const [rate, setRate] = useState(0);
  const [type, setType] = useState(null);
  const [monthlyRepayment, setMonthlyRepayment] = useState(0);
  const [totalRepayment, setTotalRepayment] = useState(0);

  const handleCalculate = () => {
    let monthlyRate = rate / 100 / 12;
    let numberOfPayments = term * 12;

    if (type === "Repayment") {
      let monthly =
        (amount * monthlyRate) / (1 - (1 + monthlyRate) ** -numberOfPayments);
      setMonthlyRepayment(monthly.toFixed(2));
      setTotalRepayment((monthly * numberOfPayments).toFixed(2));
    } else if (type === "Interest Only") {
      let monthly = amount * monthlyRate;
      setMonthlyRepayment(monthly.toFixed(2));
      setTotalRepayment((monthly * numberOfPayments).toFixed(2));
    }
  };

  const handleClear = () => {
    setAmount(0);
    setTerm(0);
    setRate(0);
    setType(null);
    setMonthlyRepayment(0);
    setTotalRepayment(0);
  };

  return (
    <div className="container">
      <div className="calculator">
        <div className="header">
          <p>Mortgage Calculator</p>
          <span onClick={handleClear}>Clear All</span>
        </div>
        <div className="mortgage-container">
          <label htmlFor="mortgage-amount">
            Mortgage Amount
            <div id="mortgage-amount">
              <span>£</span>
              <input
                type="text"
                name="mortgage-amount"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
              />
            </div>
          </label>
          <div className="term-rate-container">
            <label htmlFor="mortgage-term">
              Mortgage Term
              <div id="mortgage-term">
                <input
                  type="text"
                  name="mortgage-term"
                  value={term}
                  onChange={(e) => setTerm(Number(e.target.value))}
                />
                <span>years</span>
              </div>
            </label>
            <label htmlFor="interest-rate">
              Interest Rate
              <div id="interest-rate">
                <input
                  type="text"
                  name="interest-rate"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                />
                <span>%</span>
              </div>
            </label>
          </div>
          <div className="mortgage-type">
            <p>Mortgage Type</p>
            <div>
              <input
                type="radio"
                name="mortgage-type"
                id="mortgage-type-repayment"
                value="Repayment"
                checked={type === "Repayment"}
                onChange={(e) => setType(e.target.value)}
              />
              <label htmlFor="mortgage-type-repayment">Repayment</label>
            </div>
            <div>
              <input
                type="radio"
                name="mortgage-type"
                id="mortgage-type-interest-only"
                value="Interest Only"
                checked={type === "Interest Only"}
                onChange={(e) => setType(e.target.value)}
              />
              <label htmlFor="mortgage-type-interest-interest-only">
                Interest Only
              </label>
            </div>
          </div>
          <button className="calculate-btn" onClick={handleCalculate}>
            <img src={CalculatorIcon} alt="calculator icon" />
            <p>Calculate Repayments</p>
          </button>
        </div>
      </div>
      <div className="result">
        <h3 className="result-header">Your results</h3>
        <p className="result-info">
          Your results are shown below based on the information you provided. To
          adjust the results, edit the form and click "calculate repayments"
          again.
        </p>
        <div className="result-container">
          <div>
            <p>Your monthly repayments</p>
            <p className="repayment">£{monthlyRepayment}</p>
            <div></div>
            <p className="repay-info">Total you'll repay over the term</p>
            <p className="total-repay">£{totalRepayment}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
