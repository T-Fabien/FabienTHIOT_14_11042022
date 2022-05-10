import React, { useState } from "react";

// Import Material UI
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";

// Components
import EmployeeTableHead from "./Table_Head";
import { SearchBar } from "../Searchbar";

// Const
const dayjs = require("dayjs");

// Sorted Employees by the Sort Direction
const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

// Sorted Employees by the Sort Direction
const getComparator = (order, orderBy) => {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
};

export default function EmployeeTableContent() {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  const employeesDefaultList = employees.map((employee) => {
    return {
      firstName: employee.firstName,
      lastName: employee.lastName,
      birthdate: employee.birthdate,
      department: employee.department,
      startDate: employee.startDate,
      street: employee.street,
      city: employee.city,
      state: employee.state,
      zipCode: employee.zipCode,
    };
  });
  // States
  const [orderDirection, setOrderDirection] = useState("asc");
  const [valueToOrderBy, setValueToOrderBy] = useState("firstName");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [rows, setRows] = useState(employeesDefaultList);

  // Change Sort Direction and apply it
  const handleRequestSort = (event, property) => {
    const isAscending = valueToOrderBy === property && orderDirection === "asc";
    setValueToOrderBy(property);
    setOrderDirection(isAscending ? "desc" : "asc");
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Search Employee Function
  const requestSearch = (searchedVal) => {
    const filteredRows = employeesDefaultList.filter((row) => {
      return [
        row.firstName,
        row.lastName,
        dayjs(row.birthdate).format("DD/MM/YYYY"),
        row.department,
        dayjs(row.startDate).format("DD/MM/YYYY"),
        row.street,
        row.city,
        row.state,
        row.zipCode,
      ].some((text) => {
        const [formattedText, formattedSearch] = [
          text.trim().toLowerCase(),
          searchedVal.trim().toLowerCase(),
        ];

        return formattedText.includes(formattedSearch);
      });
    });
    setRows(filteredRows);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - employees.length) : 0;

  return (
    <div className="main__list">
      <SearchBar requestSearch={requestSearch} />
      <TableContainer>
        <Table>
          <EmployeeTableHead
            valueToOrderBy={valueToOrderBy}
            orderDirection={orderDirection}
            handleRequestSort={handleRequestSort}
          />
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .sort(getComparator(orderDirection, valueToOrderBy))
              .map((employee, index) => {
                return (
                  <TableRow hover tabIndex={-1} key={index}>
                    <TableCell component="th" scope="employee">
                      {employee.firstName}
                    </TableCell>
                    <TableCell>{employee.lastName}</TableCell>
                    <TableCell>
                      {dayjs(employee.birthdate).format("DD/MM/YYYY")}
                    </TableCell>
                    <TableCell>{employee.department}</TableCell>
                    <TableCell>
                      {dayjs(employee.startDate).format("DD/MM/YYYY")}
                    </TableCell>
                    <TableCell>{employee.street}</TableCell>
                    <TableCell>{employee.city}</TableCell>
                    <TableCell>{employee.state}</TableCell>
                    <TableCell>{employee.zipCode}</TableCell>
                  </TableRow>
                );
              })}
            {emptyRows > 0 && (
              <TableRow>
                <TableCell colSpan={9} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[2, 10, 25, 50]}
        component="div"
        count={employees.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}
