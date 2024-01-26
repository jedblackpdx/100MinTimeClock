
import * as React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function OutlinedButtons({btnText}) {
    return (
      <Stack direction="row" spacing={2} justifyContent={"center"} alignItems={"center"}>
        <Button variant="outlined">{btnText}</Button>
      </Stack>
    );
  }
  