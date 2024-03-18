import * as React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import dayjs from "dayjs";
import { DataGrid } from '@mui/x-data-grid';

import TimeSelecter, { timeRows } from "./TimeSelectModal"
import TimeDataGrid from "./DataGrid";
// import TableX from "./Table";
// import OutlinedButtons from "./Button";


const d = dayjs().format("DD/MMM/YYYY");
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function App({data}) {


  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} maxWidth={'500px'} margin={'auto'}>
        <Grid xs={12}>
          <Item>100 Minute Time Clock Converter</Item>
        </Grid>
        <Grid xs={12} >
          <Item><TimeDataGrid/></Item>
        </Grid>
        <Grid xs={4} >
          <Item><div>{d}</div></Item>
        </Grid>
        <Grid xs={4} >
          <Item><div>Total Hrs: X</div></Item>
        </Grid>
        <Grid xs={4} >
          <Item><TimeSelecter/></Item>
        </Grid>
 
      </Grid>
    </Box>
  );
}

