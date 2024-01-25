import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";
import Paper from "@mui/material/Paper";
import dayjs from "dayjs";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { HourIn, MinIn, HourMin } from "./TimeSelect.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";

let keyNum = 0;

const d = dayjs().format("DD/MMM/YYYY");
const timeType = ["T-Out:", "T-In:"];

function createData(hIn1, mOut1) {
  return { hIn1, mOut1 };
}

let timeRows = [];
// let timeRows = [createData(hIn1, mOut1, hIn2, mOut2)];

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

export default function TableX() {
    const [timeArray, setTimearray] = React.useState(timeRows);
   
    function setTime() {
     setTimearray(timeRows.push(createData(HourMin[0],HourMin[1])))
     console.log(timeRows[0].hIn1, timeRows[0].mOut1 );
    }
   
     return (
       <ThemeProvider theme={theme}>
         <TableContainer component={Paper}>
           <Table aria-label="simple table">
             <TableHead >
               {/* <TableRow >
                 <TableCell/>
                 <TableCell/>
                 <TableCell align="center">{d}</TableCell> 
               </TableRow> */}
             </TableHead>
             <TableBody align="center">              
             <TableRow
                   id={``}
                   sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                 >
                   <TableCell align="center">
                   <HourIn />
                   </TableCell>
                   <TableCell align="center">
                     <MinIn />
                   </TableCell>
                   <TableCell align="center">
                   <Button onClick={setTime}>add</Button>
                   </TableCell>
                 </TableRow>
               {timeRows.map((row, index) => (
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
             {/* <TableFooter>
             <TableRow >
                 <TableCell/>
                 <TableCell align="center" sx={{width: "auto"}}>Total Hours: 00 </TableCell>
                 <TableCell/>
               </TableRow>
             </TableFooter> */}
           </Table>
         </TableContainer>
       </ThemeProvider>
     );
   }