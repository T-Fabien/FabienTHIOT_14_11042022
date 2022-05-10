import React from "react";

export default function Modal (props) {
    const { setModalIsOpen } = props;
  return (
    <div className="modal">
        <img src={props.img} alt=""/>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
    </div>
  );
}
