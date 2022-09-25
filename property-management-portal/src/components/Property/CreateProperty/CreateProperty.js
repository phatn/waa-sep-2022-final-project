import React, { useState } from 'react';
import {
  Button, Paper,
  Typography, Grid,
  TextField, FormControl,
  InputLabel, MenuItem,
  Select, FormHelperText,
  Stack
} from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import {
  DatePicker,
  LocalizationProvider
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloseIcon from '@mui/icons-material/Close';
import ResetIcon from '@mui/icons-material/RestartAlt';
import SaveIcon from '@mui/icons-material/Save';

import InputCurrencyFormat from 'components/InputCurrencyFormat/InputCurrencyFormat';
import Constants from 'Constants';
import './CreateProperty.scss';

export const CreateProperty = (props) => {
  
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '600px',
    bgcolor: 'background.paper',
    border: '5px',
    overflowY: 'auto',
    boxShadow: 24,
    p: 2,
  };
  const [property, setProperty] = useState({
    price: '',
    numOfRoom: '',
    propertyType: '',
    homeType: '',
    street: '',
    city: '',
    zipCode: '',
    overview: '',
    availableDate: '',
    pictures: []
  });
  const [propertyType, setPropertyType] = useState('');
  const [homeType, setHomeType] = useState('');

  const handleChange = (evt) => {
    setProperty({
      ...property,
      [evt.target.name]: evt.target.value
    });
    
    if (evt.target.name === 'propertyType') {
      setPropertyType(evt.target.value);
    }
    if (evt.target.name === 'homeType') {
      setHomeType(evt.target.value);
    }
  }
  const handleCapture = () => {
    //
  }
  return (
    <Paper sx={style}>
      <Typography component="h4" variant="h4" align="left" className='model-header'>
        Property Create
      </Typography>
      <Grid container spacing={3} className='grid'>
        <Grid item xs={12} sm={6}>
          <TextField
            label='Price' variant='standard'
            type='text' id='price' name='price'
            fullWidth required value={property.price}
            onChange={handleChange}
            InputProps={{
              inputComponent: InputCurrencyFormat,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id='numOfRoom' name='numOfRoom'
            label='Num of room' variant='standard'
            value={property.numOfRoom}
            onChange={handleChange}
            type='number' fullWidth required />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" required fullWidth>
            <InputLabel htmlFor='propertyType'>Property Type</InputLabel>
            <Select
              id='propertyType'
              name='propertyType'
              value={propertyType}
              label='Property Type'
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Select property type</em>
              </MenuItem>
              {
                Constants.PROPERTY_TYPE.length > 0 &&
                Constants.PROPERTY_TYPE.map((value, idx) => (
                  <MenuItem value={value} key={idx}>{value}</MenuItem>
                ))
              }
            </Select>
            {/* <FormHelperText>Required</FormHelperText> */}
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant='standard' required fullWidth>
            <InputLabel htmlFor='homeType'>Home Type</InputLabel>
            <Select
              id='homeType' name='homeType'
              value={homeType}
              label='Home Type'
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Select home type</em>
              </MenuItem>
              {
                Constants.HOME_TYPE.length > 0 &&
                Constants.HOME_TYPE.map((value, idx) => (
                  <MenuItem value={value} key={idx}>{value}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='street' name='street'
            label='Street' variant='standard'
            fullWidth required
            value={property.street}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id='city' name='city'
            label='City' variant='standard'
            fullWidth required
            value={property.city}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id='zipCode' name='zipCode'
            label='Zip Code' variant='standard'
            fullWidth required
            value={property.zipCode}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel htmlFor='overview'>Overview</InputLabel>
          <TextareaAutosize
            id='overview'
            name='overview'
            rows={5}
            aria-label='maximum height'
            defaultValue={property.overview}
            style={{ width: 570 }}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              id='availableDate' name='availableDate'
              views={['day', 'month', 'year']}
              label='Available Date'
              minDate={dayjs('2022-01-01')}
              value={property.availableDate}
              onChange={(newValue) => {
                setProperty({
                  ...property,
                  availableDate: newValue
                })
              }}
              renderInput={(params) => <TextField {...params} helperText={null} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant='contained'
            startIcon={<CloudUploadIcon />}
          >
            Upload Pictures
            <input 
              hidden
              accept='image/*'
              multiple
              type='file'
              id='pictures'
              onChange={handleCapture}
            />
          </Button>
        </Grid>
        <Grid item xs={12} >
          <Stack direction='row' spacing={2} alignItems='right' justifyContent='right'
            sx={{paddingTop: 4, borderTop: '1px solid #1A97F5'}}
          >
            <Button
              type='button'
              variant='outlined'
              startIcon={<CloseIcon />}
              onClick={props.closed}
            >Cancel</Button>
            <Button 
              type='reset'
              variant='outlined'
              startIcon={<ResetIcon />}
            >Clear</Button>
            <Button
              type='button'
              variant='contained'
              startIcon={<SaveIcon />}
            >Save</Button>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
    );
}