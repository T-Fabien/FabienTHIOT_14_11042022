import React from "react";

export default function FormLabelInput(props) {
  return (
      <div>
          <label htmlFor={props.for}>{props.label}</label>
          <input type="text" id={props.for} onChange={props.onChange}/>
      </div>
  )
}