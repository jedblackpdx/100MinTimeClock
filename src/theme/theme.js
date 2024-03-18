import { createTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiTable: {
      styleOverrides: {
        root: {
          padding: '10px',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '15px 0 10px 0',
          margin: '0px',
          width: 'fit-content',
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          width: 'fit-content',
          height: 'fit-content',
          margin: 'auto',
          padding: '10px',
        },
      },
    },
  },
})

export default theme
