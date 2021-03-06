import React from "react";

function FormField({ formData, id, change }) {
  // ──────────────────────────────────────────────────────────────── SHOWERROR ─────
  const showError = () => {
    let errorMessage = (
      <div className="error_label">
        {formData.validation && !formData.valid
          ? formData.validationMessage
          : null}
      </div>
    );
    return errorMessage;
  };
  // ───────────────────────────────────────────────────────── RENDERFROMFIELDS ─────
  const renderFormFields = () => {
    let formTemplate = null;
    switch (formData.element) {
      case "input":
        return (formTemplate = (
          <React.Fragment>
            <input
              {...formData.config}
              value={formData.value}
              onChange={event => change({ event, id })}
            />
            {showError()}
          </React.Fragment>
        ));

      default:
        formTemplate = null;
    }
    return formTemplate;
  };
  // ─────────────────────────────────────────────────────────────────── RENDER ─────
  return <div>{renderFormFields()}</div>;
}

export default FormField;
