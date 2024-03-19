import { createContext, useState } from 'react';

// Creating the context for Time
export const TimeContext = createContext(null);

// TimeContextProvider component
export const TimeContextProvider = ({ children }) => {
	// Context State(s)
	const [timeRows, setTimeRows] = useState([]);

	// const DEFAULT_TIME_ROWS = [
	// 	{
	// 		id: timeRows[0]?.keyNum,
	// 		hundIn: timeRows[0]?.hIn1,
	// 		hundOut: timeRows[0]?.mOut1,
	// 	},
	// ];

	// Handlers for all rows
	const handleUpdateTimeRows = (rowIndex, newValue) => {};
	const handleAddTimeRow = ({ hour, minute }) => {
		setTimeRows((prevState) => [
			...prevState,
			{
				id: prevState.length + 1, // Assign ID based on the current length
				hour,
				minute,
			},
		]);
	};
	const handleRemoveTimeRow = (rowIndex) => {};
	const handleResetTimeRows = () => {
		setTimeRows([]);
	};

	const handleSubmitForm = () => {
		// TODO: implement server api post logic here.
	};

	// Providing the form state and functions through context
	return (
		<TimeContext.Provider
			value={{
				timeRows,
				onUpdateTimeRows: handleUpdateTimeRows,
				onAddTimeRow: handleAddTimeRow,
				onRemoveTimeRow: handleRemoveTimeRow,
				onResetTimeRows: handleResetTimeRows,
				onSubmitForm: handleSubmitForm,
			}}
		>
			{children}
		</TimeContext.Provider>
	);
};
