import dayjs from 'dayjs';
import { styled } from '@mui/material/styles';
import { Box, Paper, Grid } from '@mui/material';

import TimeSelecter from './TimeSelectModal';
import TimeDataGrid from './DataGrid';
// import TableX from "./Table";
// import OutlinedButtons from "./Button";

const dt = dayjs().format('DD/MMM/YYYY');
const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

export default function App({ data }) {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={1} maxWidth={'500px'} margin={'auto'}>
				<Grid item xs={12}>
					<Item>100 Minute Time Clock Converter</Item>
				</Grid>
				<Grid item xs={12}>
					<Item>
						<TimeDataGrid />
					</Item>
				</Grid>
				<Grid item xs={4}>
					<Item>
						<div>{dt}</div>
					</Item>
				</Grid>
				<Grid item xs={4}>
					<Item>
						<div>Total Hrs: X</div>
					</Item>
				</Grid>
				<Grid item xs={4}>
					<Item>
						<TimeSelecter />
					</Item>
				</Grid>
			</Grid>
		</Box>
	);
}
