import * as React from "react";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { HourIn, MinIn, HourMin } from "./TimeSelect.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { timeRows } from "./TimeSelectModal.jsx";
// import { timeContext } from "./TimeContext.jsx";

const timeType = ["T-Out:", "T-In:"];

const theme = createTheme({
  components: {
    MuiTable: {
      styleOverrides: {
        root: {
          padding: "10px",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: "15px 0 10px 0",
          margin: "0px",
          width: "fit-content"
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          width: "fit-content",
          height: "fit-content",
          margin: "auto",
          padding: "10px",
        },
      },
    },
  },
});
 
export default function TableX({data = timeRows}) {
  const [updatedRow, setRow] = useState();
  // setRow({data})
     return (
       <ThemeProvider theme={theme}>
         <TableContainer component={Paper}>
           <Table aria-label="simple table">
             <TableHead >
             </TableHead>
             <TableBody align="center">              
             {data.map((row, index) => (
                 <TableRow 
                   id={`timeShesh-${index}`}
                   key={index}
                   sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                 >
                   <TableCell align="center" component="th" scope="row">
                     {index % 2 == 1 ? timeType[0] : timeType[1]}
                   </TableCell>
                   <TableCell align="center">
                   {row.hIn1}
                   </TableCell>
                   <TableCell align="center">
                   {row.mOut1}
                   </TableCell>
                 </TableRow>
               ))}
             </TableBody>

           </Table>
         </TableContainer>
       </ThemeProvider>
     );
   }