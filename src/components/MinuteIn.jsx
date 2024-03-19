import { useState } from 'react';
import { InputLabel, MenuItem, FormControl, Select } from '@mui/material';

export default function MinuteIn({ minute, onSetMinute }) {
	const handleChangeMinute = (event) => {
		onSetMinute(event.target.value);
	};

	return (
		<FormControl sx={{ m: '0', minWidth: 60 }}>
			<InputLabel id="min-title">Min</InputLabel>
			<Select
				labelId="min-dropdown"
				id="min-dropdown"
				value={minute}
				onChange={handleChangeMinute}
				autoWidth
				label="Min"
			>
				<MenuItem value="">
					<em>None</em>
				</MenuItem>
				{Array.from({ length: 60 }, (_, i) => (
					<MenuItem key={i} value={i}>
						{i.toString().padStart(2, '0')}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
}
