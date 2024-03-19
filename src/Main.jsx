import React from 'react';
import ReactDOM from 'react-dom/client';

// import MUI's react context provider for spreading the mui theme to all children via useTheme() or natively in mui comps OOB.
import { ThemeProvider } from '@mui/material/styles';

import App from './components/App';

// import your custom react context provider for handling time data shared to all children via the hook
import { TimeContextProvider } from './context/TimeContext';
import { theme } from './theme';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<TimeContextProvider>
				<App />
			</TimeContextProvider>
		</ThemeProvider>
	</React.StrictMode>
);
