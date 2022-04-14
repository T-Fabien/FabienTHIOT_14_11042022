import { React } from "react";

// Import Material UI
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";

import Box from '@mui/material/Box';
import { visuallyHidden } from '@mui/utils';

//components

const headCells = [
  {
    id: 'firstName',
    label: 'First Name',
  },
  {
    id: 'lastName',
    label: 'Last Name',
  },
  {
    id: 'birthdate',
    label: 'Date of Birth',
  },
  {
    id: 'department',
    label: 'Department',
  },
  {
    id: 'startDate',
    label: 'Start Date',
  },
  {
    id: 'street',
    label: 'Street',
  },
  {
    id: 'city',
    label: 'City',
  },
  {
    id: 'state',
    label: 'State',
  },
  {
    id: 'zipCode',
    label: 'zip Code',
  },
];

export default function EmployeeTableHead(props) {

  const{valueToOrderBy, orderDirection, handleRequestSort} = props

  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property)
  }

  return (
    <TableHead>
      <TableRow>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            sortDirection={valueToOrderBy === headCell.id ? orderDirection : false}>
            <TableSortLabel
              active={valueToOrderBy === headCell.id}
              direction={valueToOrderBy === headCell.id ? orderDirection : 'asc'}
              onClick={createSortHandler(headCell.id)}>
              {headCell.label}
              {valueToOrderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {valueToOrderBy === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
