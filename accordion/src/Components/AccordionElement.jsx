import React from "react";

export default function AccordionElement({
  title,
  paragraph,
  active,
  onClick,
}) {
  return (
    <div
      className={`accordion__element ${
        active ? "accordion__element--active" : ""
      }`}
      onClick={onClick}
    >
      <div className="accordion__content">
        <div className="accordion__title">
          <h6>{title}</h6>
        </div>
        <div className="accordion__paragraph">
          <p>{paragraph}</p>
        </div>
      </div>
      <div className="accordion__icon">
        <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 .799l4 4 4-4"
            stroke="#F47B56"
            stroke-width="2"
            fill="none"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}
