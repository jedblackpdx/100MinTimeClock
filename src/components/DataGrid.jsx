import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useTimeContext } from '../context/TimeContext';

const columns = [
	{ field: 'id', headerName: 'ID', width: 75 },
	{
		field: 'hour',
		headerName: '100-In',
		width: 100,
		editable: true,
	},
	{
		field: 'minute',
		headerName: '100-Out',
		width: 100,
		editable: true,
	},
];

export default function TimeDataGrid() {
	const { timeRows = [] } = useTimeContext() || {};

	return (
		<Box sx={{ height: 400, width: '100%' }}>
			<DataGrid
				rows={timeRows}
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
