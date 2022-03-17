import { useState } from "react";

export default function Question({ answer, children }) {
  const [open, setOpen] = useState(0);
  if (open === 0) {
    return (
      <div className="question" onClick={() => setOpen(1)}>
        <p className="question__text">{children}</p>
        <img
          className="question__icon"
          src="icons/caret-down.svg"
          alt="Caret-down icon"
        />
      </div>
    );
  } else {
    return (
      <div className="question" onClick={() => setOpen(0)}>
        <p className="question__text">{children}</p>
        <img
          className="question__icon"
          src="icons/caret-down.svg"
          alt="Caret-down icon"
        />
        <p className="question__answer">{answer}</p>
      </div>
    );
  }
}
