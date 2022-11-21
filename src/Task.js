import React from 'react';
import './style.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import CancelIcon from '@mui/icons-material/Cancel';
import EditIcon from '@mui/icons-material/Edit';
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
import { useState } from 'react';

export default function Task(props) {
  let [editOpen, setEditOpen] = useState(false);
  let [desc, setDesc] = useState(props.desc);
  let [date, setDate] = useState(props.date);
  let [priority, setPriority] = useState(props.priority);
  let [submit, setSubmit] = useState(false);
  let [del, setDel] = useState(false);
  let [check, setCheck] = useState(false);

  let [inputDesc, setInputDesc] = useState(props.desc);
  let [inputDate, setInputDate] = useState(props.date);
  let [inputPriority, setInputPriority] = useState(props.priority);

  function handleEditOpen() {
    setSubmit(false);
    setEditOpen(true);
  }

  function handleEditClose() {
    setInputDesc(desc);
    setInputDate(date);
    setInputPriority(priority);
    setEditOpen(false);
  }

  const handleDesc = (event) => {
    setInputDesc(event.target.value);
  };

  const handleDate = (date) => {
    setInputDate(date);
  };

  const handlePriority = (event) => {
    setInputPriority(event.target.value);
  };

  function handleEditSubmit() {
    setSubmit(true);
    if (!desc) {
      return;
    }
    setDesc(inputDesc);
    setDate(inputDate);
    setPriority(inputPriority);
    setEditOpen(false);
  }

  function handleDelete() {
    setDel(true);
  }

  const handleCheck = (event) => {
    setCheck(event.target.checked);
  };

  return (
    !del && (
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
        <Typography color="text.primary">{desc}</Typography>
        <Typography color="text.primary">
          {date.format('MM/DD/YYYY')}
        </Typography>
        <Typography color="text.primary">{priority}</Typography>
        <Checkbox sx={{ ml: -1 }} onChange={handleCheck} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {!check && (
            <Button
              variant="contained"
              color="primary"
              startIcon={<EditIcon />}
              onClick={handleEditOpen}
            >
              UPDATE
            </Button>
          )}
          <Button
            variant="contained"
            color="error"
            startIcon={<CancelIcon />}
            onClick={handleDelete}
          >
            DELETE
          </Button>
        </div>
        <Dialog
          open={editOpen}
          onClose={handleEditClose}
          sx={{ width: '100%' }}
        >
          <Stack spacing={2}>
            <DialogTitle
              sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'primary.main',
                color: 'white',
              }}
            >
              <EditIcon />
              Edit Task
            </DialogTitle>
            <Stack spacing={2} style={{ padding: 10 }}>
              <FormControl>
                <InputLabel htmlFor="component-outlined">
                  Description
                </InputLabel>
                <OutlinedInput
                  id="component-outlined"
                  value={inputDesc}
                  onChange={handleDesc}
                  label="Description"
                  error={!inputDesc && submit}
                />
                {!inputDesc && submit && (
                  <FormHelperText sx={{ color: 'error.main' }}>
                    Description is Required!
                  </FormHelperText>
                )}
              </FormControl>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  label="Deadline"
                  inputFormat="MM/DD/YYYY"
                  value={inputDate}
                  onChange={handleDate}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              <FormControl>
                <FormLabel>Priority</FormLabel>
                <RadioGroup row value={inputPriority} onChange={handlePriority}>
                  <FormControlLabel
                    value="low"
                    control={<Radio />}
                    label="Low"
                  />
                  <FormControlLabel
                    value="med"
                    control={<Radio />}
                    label="Med"
                  />
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
                    onClick={handleEditClose}
                  >
                    CANCEL
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<EditIcon />}
                    onClick={handleEditSubmit}
                  >
                    EDIT
                  </Button>
                </Stack>
              </FormControl>
            </Stack>
          </Stack>
        </Dialog>
      </Box>
    )
  );
}
