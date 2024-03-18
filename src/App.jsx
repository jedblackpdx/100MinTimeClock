import * as React from 'react'
import { styled } from '@mui/material/styles'
import { Box, Paper, Grid } from '@mui/material'
import dayjs from 'dayjs'

import TableX from './Table'
import OutlinedButtons from './Button'

const d = dayjs().format('DD/MMM/YYYY')
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} maxWidth={'500px'} margin={'auto'}>
        <Grid item xs={12}>
          <Item>100 Minute Time Clock Converter</Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <TableX />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <OutlinedButtons btnText={d} />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <OutlinedButtons btnText={'Total Hrs'} />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <OutlinedButtons btnText={'Add+'} />
          </Item>
        </Grid>
      </Grid>
    </Box>
  )
}

export default App
