
import * as React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import rows from './TccTable.jsx'

export default function OutlinedButtons() {
    return (
      <Stack direction="row" spacing={2}>
        <Button  onClick={()=>{
            rows.push(0);
        }} variant="outlined">New Sesh</Button>
      </Stack>
    );
  }
  