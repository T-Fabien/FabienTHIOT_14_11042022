import React from "react";

export default function FormLabelInput(props) {
  return (
    <div className="form__field">
      <label htmlFor={props.for}>{props.label}</label>
      <input
        type={props.type}
        id={props.for}
        placeholder={props.placeholder}
        onChange={props.onChange}
        required={true}
      />
    </div>
  );
}
