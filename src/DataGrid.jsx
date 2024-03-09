import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

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

const rows = [
  { id: 1, hundIn: '13:77', hundOut: '14:66' },
  { id: 2, hundIn: '15:69', hundOut: '17:12' }
];

export default function TimeDataGrid() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
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