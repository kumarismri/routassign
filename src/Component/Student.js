import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

const rows = [
  {
      "Id": "1",
      "Name": "Smriti",
      "Age":"22",
      "Course":"cse",
      "Batch":"2017",

  }
,
  {
    "Id": "2",
    "Name": "Kddf",
    "Age":"28",
    "Course":"ece",
    "Batch":"206"

}
,
{
    "Id": "3",
    "Name": "Smrhjki",
    "Age":"23",
    "Course":"csejj",
    "Batch":"290"
}
,
{
    "Id": "4",
    "Name": "Smrhhh",
    "Age":"29",
    "Course":"eee",
    "Batch":"2016"
}
];

export default function BasicTable() {
  return (
  
  <div>

    <h1>Student Details</h1>
    <button className="buttt">Add new student</button>
    <TableContainer component={Paper}>
      <Table sx={{ minWIdth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell>Id</TableCell> */}
            <TableCell>Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Course</TableCell>
            <TableCell align="right">Batch</TableCell>
            <TableCell align="right">Change</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Id}
              // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.Name}</TableCell>
              {/* <TableCell align="right">{row.Name}</TableCell> */}
              <TableCell align="right">{row.Age}</TableCell>
              <TableCell align="right">{row.Course}</TableCell>
              <TableCell align="right">{row.Batch}</TableCell>
              <TableCell align="right"><Link to="">edit</Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}