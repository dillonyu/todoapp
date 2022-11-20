import React from 'react';
import './style.css';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Task from './Task';
import { useState } from 'react';

export default function Display() {
  let [tasks, setTasks] = useState([]);
  return (
    <div className="header">
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
              onClick={() => {
                const newTasks = tasks.concat([<Task key={tasks.length} />]);
                setTasks(newTasks);
              }}
            >
              ADD
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          padding: 2,
          paddingTop: 4,
          boxShadow: 1,
        }}
      >
        <Typography color="text.secondary">Title</Typography>
        <Typography color="text.secondary">Description</Typography>
        <Typography color="text.secondary">Deadline</Typography>
        <Typography color="text.secondary">Priority</Typography>
        <Typography color="text.secondary">Is Complete</Typography>
        <Typography color="text.secondary">Action</Typography>
      </Box>
      {tasks}
    </div>
  );
}
