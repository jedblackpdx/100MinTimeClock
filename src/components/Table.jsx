import { useState } from 'react';
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
} from '@mui/material';

const timeType = ['T-Out:', 'T-In:'];

export default function TableX({ data = timeRows }) {
	return (
		<TableContainer component={Paper}>
			<Table aria-label="simple table">
				<TableHead></TableHead>
				<TableBody align="center">
					{data.map((row, index) => (
						<TableRow
							id={`timeShesh-${index}`}
							key={index}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell align="center" component="th" scope="row">
								{index % 2 == 1 ? timeType[0] : timeType[1]}
							</TableCell>
							<TableCell align="center">{row.hIn1}</TableCell>
							<TableCell align="center">{row.mOut1}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
