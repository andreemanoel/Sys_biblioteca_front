import { Alert, AlertTitle, Box, Collapse } from '@mui/material';
import React from 'react';

const Alerts = ({message, open}) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert
          severity="success"
          sx={{ m: 1 }}
        >
          <AlertTitle>Sucesso</AlertTitle>
          {message}
        </Alert>
      </Collapse>
    </Box>
  )
}

export default Alerts;