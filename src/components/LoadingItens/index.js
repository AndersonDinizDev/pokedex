import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Container from '@mui/material/Container'
import React from 'react'

function LoadingItens() {
  return (
    <Container
      maxWidth="xxl"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Box>
        <CircularProgress />
      </Box>
    </Container>
  )
}

export default LoadingItens
