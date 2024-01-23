import TableRow from "@mui/material/TableRow";
import { HourIn, MinIn, HourMin } from "./TimeSelect.jsx";
// import timeRows from "./TccTable.jsx"



function createData(hIn1, mOut1, hIn2, mOut2) {
    return { hIn1, mOut1, hIn2, mOut2 };
  }

function RowButton() {
    const HandleAddRow = () => {
      addRow(() => {
        timeRows.push[createData(HourMin[0], HourMin[1])];
      });
      console.log(timeRows);
    };
    return (
      <Stack direction="row" spacing={2}>
        <Button onClick={HandleAddRow} variant="outlined">
          New Sesh
        </Button>
      </Stack>
    );
  }

function TableRows(timeRows)   {
    
    return
    {timeRows.map((row, index) => (
        
        <TableRow
          id={`timeShesh${index}`}
          key={index}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell align="center" component="th" scope="row">
            {row.keyNum % 2 == 1 ? timeType[0] : timeType[1]}
          </TableCell>
          <TableCell align="center">
            <HourIn />
          </TableCell>
          <TableCell align="center">
            <MinIn />
          </TableCell>
          <TableCell align="center">
            <HourIn />
          </TableCell>
          <TableCell align="center">
            <MinIn />
          </TableCell>
          <TableCell align="center">
            <RowButton />
          </TableCell>
        </TableRow>
      ))}

}

export {RowButton, TableRows, createData}