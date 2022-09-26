import React, { useState, forwardRef } from 'react';
import {
  Button,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  FormHelperText,
  Stack,
  Slide,
  Dialog,
  DialogContent,
  DialogActions,
} from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ResetIcon from '@mui/icons-material/RestartAlt';
import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';

import InputCurrencyFormat from 'components/InputCurrencyFormat/InputCurrencyFormat';
import DialogTitleCustom from 'components/DialogTitleCustom/DialogTitleCustom';
import Constants from 'Constants';
import { createProperty } from 'services/PropertyService';

import './CreateProperty.scss';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='down' ref={ref} {...props} />;
});

export const CreateProperty = (props) => {
  const initialProperty = {
    price: '',
    numOfRoom: '',
    propertyType: '',
    homeType: '',
    location: {
      street: '',
      city: '',
      zipCode: '',
    },
    overview: '',
    availableDate: dayjs(),
    pictures: [],
  };

  const [isOpenForm, setIsOpenForm] = useState(false);
  const openForm = () => {
    setIsOpenForm(true);
  };
  const closeForm = () => {
    setIsOpenForm(false);
  };
  const [property, setProperty] = useState(initialProperty);
  const [propertyType, setPropertyType] = useState('');
  const [homeType, setHomeType] = useState('');

  const propertyState = useSelector((state) => state.properties);
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    if (['street', 'city', 'zipCode'].includes(evt.target.name)) {
      setProperty({
        ...property,
        location: {
          ...property.location,
          [evt.target.name]: evt.target.value,
        },
      });
    } else {
      setProperty({
        ...property,
        [evt.target.name]: evt.target.value,
      });
    }

    if (evt.target.name === 'propertyType') {
      setPropertyType(evt.target.value);
    }
    if (evt.target.name === 'homeType') {
      setHomeType(evt.target.value);
    }
  };
  const handleCapture = () => {
    console.log('capture');
  };
  const handleReset = () => {
    setProperty(initialProperty);
    setHomeType('');
    setPropertyType('');
  };
  const handleSave = () => {
    const saveProperty = {
      ...property,
      price: property.price.substring(1),
      token: '',
    };
    dispatch(createProperty(saveProperty))
      .then(() => {
        //close dialog
        closeForm();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Stack direction='row' spacing={2}>
        <Button onClick={openForm} variant='contained' startIcon={<AddIcon />}>
          Create
        </Button>
      </Stack>
      <Dialog
        open={isOpenForm}
        TransitionComponent={Transition}
        scroll={'paper'}
        //onClose={closeForm}
      >
        <DialogTitleCustom id='dialog-title' onClose={closeForm} >
          Property Create
        </DialogTitleCustom>
        
        <DialogContent dividers={true}>
          <Grid container spacing={3} className='grid'>
            <Grid item xs={12} sm={6}>
              <TextField
                label='Price'
                variant='standard'
                type='text'
                id='price'
                name='price'
                fullWidth
                required
                value={property.price}
                onChange={handleChange}
                InputProps={{
                  inputComponent: InputCurrencyFormat,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id='numOfRoom'
                name='numOfRoom'
                label='Num of room'
                variant='standard'
                value={property.numOfRoom}
                onChange={handleChange}
                type='number'
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant='standard' required fullWidth>
                <InputLabel htmlFor='propertyType'>Property Type</InputLabel>
                <Select
                  id='propertyType'
                  name='propertyType'
                  value={propertyType}
                  label='Property Type'
                  onChange={handleChange}
                >
                  <MenuItem value=''>
                    <em>Select property type</em>
                  </MenuItem>
                  {Constants.PROPERTY_TYPE.length > 0 &&
                    Constants.PROPERTY_TYPE.map((value, idx) => (
                      <MenuItem value={value} key={idx}>
                        {value}
                      </MenuItem>
                    ))}
                </Select>
                {/* <FormHelperText>Required</FormHelperText> */}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant='standard' required fullWidth>
                <InputLabel htmlFor='homeType'>Home Type</InputLabel>
                <Select
                  id='homeType'
                  name='homeType'
                  value={homeType}
                  label='Home Type'
                  onChange={handleChange}
                >
                  <MenuItem value=''>
                    <em>Select home type</em>
                  </MenuItem>
                  {Constants.HOME_TYPE.length > 0 &&
                    Constants.HOME_TYPE.map((value, idx) => (
                      <MenuItem value={value} key={idx}>
                        {value}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='street'
                name='street'
                label='Street'
                variant='standard'
                fullWidth
                required
                value={property.location.street}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id='city'
                name='city'
                label='City'
                variant='standard'
                fullWidth
                required
                value={property.location.city}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id='zipCode'
                name='zipCode'
                label='Zip Code'
                variant='standard'
                fullWidth
                required
                value={property.location.zipCode}
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
                value={property.overview}
                style={{ width: '100%', height: '60px' }}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  id='availableDate'
                  name='availableDate'
                  label='Available Date'
                  inputFormat='MM/DD/YYYY'
                  minDate={dayjs('01-01-2022')}
                  value={property.availableDate}
                  onChange={(newValue) => {
                    setProperty({
                      ...property,
                      availableDate: newValue,
                    });
                  }}
                  renderInput={(params) => (
                    <TextField {...params} helperText={null} />
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12}>
              <Button variant='contained' startIcon={<CloudUploadIcon />}>
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
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            type='reset'
            variant='outlined'
            startIcon={<ResetIcon />}
            onClick={handleReset}
          >
            Clear
          </Button>
          <Button
            type='button'
            variant='contained'
            startIcon={<SaveIcon />}
            onClick={handleSave}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
