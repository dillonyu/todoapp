import React from 'react';
import './style.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import CancelIcon from '@mui/icons-material/Cancel';
import EditIcon from '@mui/icons-material/Edit';

export default function Task(props) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        paddingLeft: 2,
        paddingRight: 2,
        paddingTop: 4,
        paddingBottom: 4,
        boxShadow: 1,
        alignItems: 'center',
      }}
    >
      <Typography color="text.primary">{props.title}</Typography>
      <Typography color="text.primary">{props.desc}</Typography>
      <Typography color="text.primary">
        {props.date.format('MM/DD/YYYY')}
      </Typography>
      <Typography color="text.primary">{props.priority}</Typography>
      <Checkbox sx={{ ml: -1 }} />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Button variant="contained" color="primary" startIcon={<EditIcon />}>
          UPDATE
        </Button>
        <Button variant="contained" color="error" startIcon={<CancelIcon />}>
          DELETE
        </Button>
      </div>
    </Box>
  );
}
