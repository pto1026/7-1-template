export default function Question({ children }) {
  return (
    <div className="question">
      <p className="question__text">{children}</p>
      <img
        className="question__icon"
        src="icons/caret-down.svg"
        alt="Caret-down icon"
      />
    </div>
  );
}
