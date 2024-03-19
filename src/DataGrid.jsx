import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { HourIn, MinIn, HourMin } from './TimeSelect';
import { timeRows } from './TimeSelectModal';

const columns = [
  { field: 'id', headerName: 'ID', width: 75 },
  {
    field: 'hundIn',
    headerName: '100-In',
    width: 100,
    editable: true,
  },
  {
    field: 'hundOut',
    headerName: '100-Out',
    width: 100,
    editable: true,
  },
];

let rows = [
  // { id: timeRows[0].keyNum, hundIn: timeRows[0].hIn1, hundOut: timeRows[0].mOut1 },
];

export default function TimeDataGrid() {
    const [state, setState] = useState(timeRows);
 
    rows = () => {
      setState(timeRows);
    }
 
  return (  
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={state}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}