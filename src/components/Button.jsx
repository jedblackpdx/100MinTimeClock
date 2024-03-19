import { Button, Stack } from '@mui/material'

export default function OutlinedButtons({ btnText }) {
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Button variant="outlined">{btnText}</Button>
    </Stack>
  )
}
