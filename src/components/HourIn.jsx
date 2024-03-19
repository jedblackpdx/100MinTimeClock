import { useState } from 'react';
import { InputLabel, MenuItem, FormControl, Select } from '@mui/material';

export default function HourIn({ hour, onSetHour }) {
	const handleChangeHr = (event) => {
		onSetHour(event.target.value);
	};

	return (
		<FormControl sx={{ margin: '0', minWidth: 60 }}>
			<InputLabel id="hr-title">Hr</InputLabel>
			<Select
				labelId="hr-dropdown"
				id="hr-dropdown"
				value={hour}
				onChange={handleChangeHr}
				autoWidth
				label="Hr"
			>
				<MenuItem value="">
					<em>None</em>
				</MenuItem>
				{Array.from({ length: 24 }, (_, i) => (
					<MenuItem key={i} value={i}>
						{i.toString().padStart(2, '0')}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
}
