import { useState } from 'react'
import {
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableFooter,
} from '@mui/material'
import { HourIn, MinIn, HourMin } from './TimeSelect'

let keyNum = 0
const timeType = ['T-Out:', 'T-In:']

function createData(hIn1, mOut1) {
  return { hIn1, mOut1 }
}

let timeRows = []

export default function TableX() {
  const [timeArray, setTimearray] = useState(timeRows)

  function setTime() {
    setTimearray(timeRows.push(createData(HourMin[0], HourMin[1])))
    console.log(timeRows[0].hIn1, timeRows[0].mOut1)
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          {/* <TableRow >
                 <TableCell/>
                 <TableCell/>
                 <TableCell align="center">{d}</TableCell> 
               </TableRow> */}
        </TableHead>
        <TableBody align="center">
          <TableRow
            id={``}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
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
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                {index % 2 == 1 ? timeType[0] : timeType[1]}
              </TableCell>
              <TableCell align="center">{row.hIn1}</TableCell>
              <TableCell align="center">{row.mOut1}</TableCell>
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
  )
}
