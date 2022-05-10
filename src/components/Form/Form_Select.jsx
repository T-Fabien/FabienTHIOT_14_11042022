import React from "react";

export default function FormSelectInput(props) {
  return (
    <div className="form__field form__select">
      <label htmlFor={props.for}>{props.label}</label>
      <select
        name={props.for}
        id={props.for}
        onChange={props.onChange}
      >
        {props.list.map((item, key) => {
          return (
            <option key={key} value={item.abbreviation}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
