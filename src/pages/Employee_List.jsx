import { Search } from "@mui/icons-material";
import { React } from "react";

// Components
import EmployeeTableContent from "../components/Table/Table_Content";

export default function Employee_List() {
  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <a href="/">Home</a>
          <EmployeeTableContent />
    </div>
  );
}
