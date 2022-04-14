import React from "react";

export default function FormDataPicker(props) {
  return (
      <div>
          <label htmlFor={props.for}>{props.label}</label>
          <input type="date" id={props.for} onChange={props.onChange}/>
      </div>
  )
}