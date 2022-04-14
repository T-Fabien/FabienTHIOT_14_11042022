import React from "react";
// Components
import EmployeeForm from "../components/EmployeeForm";

export default function Create_Employee() {
  return (
    <div className="main">
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <a href="employee-list">View Current Employees</a>
        <h2>Create Employee</h2>
        <EmployeeForm />
      </div>
    </div>
  );
}
