import React from "react";
import "./LabelledInput.css";

function LabelledInput({
  children,
  label,
  isRequired,
  labelAlignment = "top",
  errorLabel,
  errors = {},
}) {
  let containerClass = "labelled-container ";

  if (labelAlignment === "top") {
    containerClass += "labelled-top";
  } else if (labelAlignment === "side-by-side") {
    containerClass += "labelled-side-by-side";
  }
  return (
    <>
      <div className={containerClass}>
        {label && (
          <label className="content-left">
            {label} {isRequired && <sup className="label-asterisk">*</sup>}
          </label>
        )}
        <span className="content-left">{children}</span>

        {errors[errorLabel] && (
          <div className="content-left error-message">
            {errors[errorLabel].message}
          </div>
        )}
      </div>
    </>
  );
}

export default LabelledInput;
