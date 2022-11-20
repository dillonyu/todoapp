import React from 'react';
import './style.css';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <div></div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <MenuIcon sx={{ textAlign: 'center' }} />
            <Typography>FRAMEWORKS</Typography>
          </div>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddCircleIcon />}
          >
            ADD
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
