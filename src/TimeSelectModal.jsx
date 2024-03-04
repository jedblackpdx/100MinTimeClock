import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { HourIn, MinIn, HourMin } from "./TimeSelect.jsx";


let timeRows = [];
// let timeRows = [createData(hIn1, mOut1, hIn2, mOut2)];

function createData(hIn1, mOut1) {
  return { hIn1, mOut1 };
}

export default function TimeSelect() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [timeArray, setTimearray] = React.useState();

  function setTime() {
    setTimearray(timeRows.push(createData(HourMin[0],HourMin[1])))
    console.log(timeRows[0].hIn1, timeRows[0].mOut1 );
   }

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

export {timeRows}