import * as React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import dayjs from "dayjs";

import TimeSelect from "./TimeSelectModal"
import TableX from "./Table";
import OutlinedButtons from "./Button";

const d = dayjs().format("DD/MMM/YYYY");
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} maxWidth={'500px'} margin={'auto'}>
        <Grid xs={12}>
          <Item>100 Minute Time Clock Converter</Item>
        </Grid>
        <Grid xs={12} >
          <Item><TableX/></Item>
        </Grid>
        <Grid xs={4} >
          <Item><OutlinedButtons btnText = {d}/></Item>
        </Grid>
        <Grid xs={4} >
          <Item><OutlinedButtons btnText = {"Total Hrs"}/></Item>
        </Grid>
        <Grid xs={4} >
          <Item><TimeSelect/></Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App
