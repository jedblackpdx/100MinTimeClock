import { useState } from 'react';
import { Popover, Typography, Button } from '@mui/material';

import { useTimeContext } from '../context/TimeContext';
import HourIn from './HourIn';
import MinuteIn from './MinuteIn';
// // let timeRows = [createData(hIn1, mOut1, hIn2, mOut2)];

function createData(keyNum, hIn1, mOut1) {
	return { id: keyNum, hundIn: hIn1, hundOut: mOut1 };
}

export default function TimeSelectModel() {
	const { timeRows, onAddTimeRow } = useTimeContext();
	const [anchorEl, setAnchorEl] = useState(null);
	const [hour, setHour] = useState(0);
	const [minute, setMinute] = useState(0);

	const handleOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleAddTimeRow = () => {
		// add to context
		onAddTimeRow({ hour, minute });

		// close modal
		handleClose();

		// clear field state
		setHour(0);
		setMinute(0);
	};

	function setTime() {
		keyNum = keyNum + 1;
		// timeRows.push(createData(keyNum, HourMin[0], HourMin[1]));

		// console.log(
		// 	`//array check... hour:${HourMin[0]} -- minutes: ${HourMin[1]}`
		// );
		console.log(
			`//object check... id:${timeRows[0].id} -- `,
			`hour:${timeRows[0].hundIn} -- `,
			`minutes:${timeRows[0].hundOut}`
		);
	}

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;

	return (
		<div>
			<Button aria-describedby={id} variant="contained" onClick={handleOpen}>
				+add
			</Button>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
			>
				{/* <Typography sx={{ p: 2 }}><HourIn /><MinIn /><Button onClick={''}>add</Button></Typography> */}
				<HourIn hour={hour} onSetHour={setHour} />
				<MinuteIn minute={minute} onSetMinute={setMinute} />
				<Button onClick={handleAddTimeRow}>add</Button>
			</Popover>
		</div>
	);
}
