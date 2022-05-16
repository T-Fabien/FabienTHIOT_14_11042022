import React from "react";
import { NavLink } from "react-router-dom";

export default function Header(props) {
  const pages = [
    {
      id: 1,
      namepage: "Create Employee",
    },
    {
      id: 2,
      namepage: "Employee List",
    },
  ];

  return (
    <header className="header">
      <div>
        <h1>HR Net</h1>
      </div>
      <div>
        <h2>{props.page}</h2>
      </div>
      <div className="header__links">
        <NavLink to="/FabienTHIOT_14_11042022" end className="link">
          Create Page
        </NavLink>
        <NavLink to="/employee-list" end className="link">
          List Page
        </NavLink>
      </div>
    </header>
  );
}
