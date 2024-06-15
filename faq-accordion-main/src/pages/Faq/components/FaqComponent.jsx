export default function FaqComponent({ question, answer, isClicked }) {
  return (
    <div className="faq">
      <p className="dkfjsdklfj">{question}</p>
      {isClicked ? <p>{answer}</p> : undefined}
    </div>
  );
}
