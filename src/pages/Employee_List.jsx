import { React } from "react";
import Header from "../components/Header";

// Components
import EmployeeTableContent from "../components/Table/Table_Content";

export default function Employee_List() {
  return (
    <>
      <Header page="Employee List" />
      <EmployeeTableContent />
    </>
  );
}