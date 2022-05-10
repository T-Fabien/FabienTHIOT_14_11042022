import React from "react";

export default function FormDataPicker(props) {
  return (
    <div className="form__field form__datapicker">
      <label htmlFor={props.for}>{props.label}</label>
      <input
        type="date"
        id={props.for}
        placeholder={props.placeholder}
        onChange={props.onChange}
        required={true}
      />
    </div>
  );
}
