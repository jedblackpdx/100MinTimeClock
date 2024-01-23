import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";
import Paper from "@mui/material/Paper";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { HourIn, MinIn, HourMin } from "./TimeSelect.jsx";

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

let timeRows = [];

function createData(hIn1, mOut1) {
    return { hIn1, mOut1 };
  }

function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);
//   const [timeArray, setTimearray] = React.useState();

//   function setTime() {
//     setTimearray(timeRows.push(createData(HourMin[0],HourMin[1])))
//   }
 
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    timeRows.push(createData(HourMin[0],HourMin[1]));
    //    console.log(timeRows[0].hIn1, timeRows[0].mOut1 );
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        add
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
<ThemeProvider theme={theme}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableBody align="center">              
          <TableRow>
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
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
      </Popover>
    </>
  );
}

export {timeRows, BasicPopover}