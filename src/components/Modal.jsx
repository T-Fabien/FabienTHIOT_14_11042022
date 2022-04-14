import React from "react";

import logo from "../asset/wealth_health_logo.jpg"

export default function Modal (modalProps) {
    const { setModalIsOpen } = modalProps;
  return (
    <div className="modal">
        <img src={logo} alt=""/>
        <h2>Sucess !</h2>
        <p>The new employee has been created</p>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
    </div>
  );
}
