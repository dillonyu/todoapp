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
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import dayjs from 'dayjs';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import BlockIcon from '@mui/icons-material/Block';
import FormHelperText from '@mui/material/FormHelperText';

export default function Display() {
  let [tasks, setTasks] = useState([]);
  let [addOpen, setAddOpen] = useState(false);
  let [title, setTitle] = useState('');
  let [desc, setDesc] = useState('');
  let [date, setDate] = useState(dayjs());
  let [priority, setPriority] = useState('');
  let [submit, setSubmit] = useState(false);

  function handleAddOpen() {
    setSubmit(false);
    setAddOpen(true);
  }

  function handleAddClose() {
    setTitle('');
    setDesc('');
    setDate(dayjs());
    setPriority('');
    setAddOpen(false);
  }

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleDesc = (event) => {
    setDesc(event.target.value);
  };

  const handleDate = (date) => {
    setDate(date);
  };

  const handlePriority = (event) => {
    setPriority(event.target.value);
  };

  function handleAddTask() {
    setSubmit(true);
    if (!title || !desc) {
      return;
    }
    const newTasks = tasks.concat([
      <Task
        key={tasks.length}
        title={title}
        desc={desc}
        date={date}
        priority={priority}
      />,
    ]);
    setTasks(newTasks);
    setAddOpen(false);
    setSubmit(false);
    setTitle('');
    setDesc('');
    setDate(dayjs());
    setPriority('');
  }

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
              onClick={handleAddOpen}
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

      {/* Add Task Dialog */}
      <Dialog open={addOpen} onClose={handleAddClose} sx={{ width: '100%' }}>
        <Stack spacing={2}>
          <DialogTitle
            sx={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'primary.main',
              color: 'white',
            }}
          >
            <AddCircleIcon />
            Add Task
          </DialogTitle>
          <Stack spacing={2} style={{ padding: 10 }}>
            <FormControl>
              <InputLabel htmlFor="component-outlined">Title</InputLabel>
              <OutlinedInput
                id="component-outlined"
                value={title}
                onChange={handleTitle}
                label="Title"
                error={!title && submit}
              />
              {!title && submit && (
                <FormHelperText sx={{ color: 'error.main' }}>
                  Title is Required!
                </FormHelperText>
              )}
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="component-outlined">Description</InputLabel>
              <OutlinedInput
                id="component-outlined"
                value={desc}
                onChange={handleDesc}
                label="Description"
                error={!desc && submit}
              />
              {!desc && submit && (
                <FormHelperText sx={{ color: 'error.main' }}>
                  Description is Required!
                </FormHelperText>
              )}
            </FormControl>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Deadline"
                inputFormat="MM/DD/YYYY"
                value={date}
                onChange={handleDate}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <FormControl>
              <FormLabel>Priority</FormLabel>
              <RadioGroup row value={priority} onChange={handlePriority}>
                <FormControlLabel value="low" control={<Radio />} label="Low" />
                <FormControlLabel value="med" control={<Radio />} label="Med" />
                <FormControlLabel
                  value="high"
                  control={<Radio />}
                  label="High"
                />
              </RadioGroup>
            </FormControl>
            <FormControl>
              <Stack direction="row-reverse" spacing={1}>
                <Button
                  variant="contained"
                  color="error"
                  startIcon={<BlockIcon />}
                  onClick={handleAddClose}
                >
                  CANCEL
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<AddCircleIcon />}
                  onClick={handleAddTask}
                >
                  ADD
                </Button>
              </Stack>
            </FormControl>
          </Stack>
        </Stack>
      </Dialog>
    </div>
  );
}
