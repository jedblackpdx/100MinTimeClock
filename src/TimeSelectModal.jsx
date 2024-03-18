import * as React from 'react';
import { useState } from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { HourIn, MinIn, HourMin } from "./TimeSelect.jsx";

let keyNum = 0
const timeRows = [];
// // let timeRows = [createData(hIn1, mOut1, hIn2, mOut2)];

function createData(keyNum, hIn1, mOut1) {
  return { id: keyNum, hundIn: hIn1, hundOut: mOut1 };
}

function setTime() {

  keyNum = keyNum+1;
  timeRows.push(createData(keyNum, HourMin[0],HourMin[1]));
  
  console.log(`//array check... hour:${HourMin[0]} -- minutes: ${HourMin[1]}`);
  console.log(`//object check... id:${timeRows[0].id} -- `,`hour:${timeRows[0].hundIn} -- `, `minutes:${timeRows[0].hundOut}`)

 }

export default function TimeSelecter() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        +add
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
        {/* <Typography sx={{ p: 2 }}><HourIn /><MinIn /><Button onClick={''}>add</Button></Typography> */}
        <HourIn /><MinIn /><Button onClick={setTime}>add</Button>
      </Popover>
    </div>
  );
}

export {keyNum, timeRows, HourIn, MinIn, HourMin}