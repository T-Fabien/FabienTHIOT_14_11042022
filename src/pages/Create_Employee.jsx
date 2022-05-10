import React from "react";
// Components
import EmployeeForm from "../components/EmployeeForm";
import Header from "../components/Header";

export default function Create_Employee() {
  return (
    <>
      <Header page="Create Employee" />
      <EmployeeForm />
    </>
  );
}
