import React, { useState, forwardRef, useEffect } from 'react';
import {
  Button,
  Grid,
  TextField,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Slide,
  Dialog,
  DialogContent,
  DialogActions,
  LinearProgress,
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

import { InputCurrencyFormat } from 'components/InputCurrencyFormat/InputCurrencyFormat';
import { DialogTitleCustom } from 'components/DialogTitleCustom/DialogTitleCustom';
import Constants from 'Constants';
import { createProperty } from 'services/PropertyService';
import { AlertDialog } from 'components/AlertDialog/AlertDialog';
import { MultiUploader } from 'components/MultiUploader/MultiUploader';
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
  const initValidProperty = {
    price: '',
    numOfRoom: '',
    propertyType: '',
    homeType: '',
    street: '',
    city: '',
    zipCode: ''
  }
  const [property, setProperty] = useState(initialProperty);
  const [propertyType, setPropertyType] = useState('');
  const [homeType, setHomeType] = useState('');
  const [alertContent, setAlertContent] = useState({
    message: '',
    title: '',
    onClose: undefined
  });
  const [validProperty, setValidProperty] = useState(initValidProperty);
  const [openAlert, setOpenAlert] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (loading) {
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            closeForm();
          }
          const diff = Math.random() * 10;
          return Math.min(oldProgress + diff, 100);
        });
      }, 50);

      return () => {
        clearInterval(timer);
      };
    }
  }, [loading]);

  const openForm = () => {
    setIsOpenForm(true);
  };
  const closeForm = () => {
    setIsOpenForm(false);
  };

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
    validateField(evt.target.name, evt.target.value);
  };

  const handleCapture = () => {
    console.log('capture');
  };

  const handleReset = () => {
    setProperty(initialProperty);
    setHomeType('');
    setPropertyType('');
  };
  const validateField = (fieldName, fieldValue) => {
    let message = '';
    if (['street', 'city', 'zipCode'].includes(fieldName)) {
      if (fieldValue === '') {
        message = `${fieldName} is invalid!`;
      } else {
        message = '';
      }
    } else if (!['overview', 'availableDate'].includes(fieldName)) {
      if (fieldValue === '') {
        message = `${fieldName} is invalid!`;
      } else {
        message = '';
      }
    }
    setValidProperty({
      ...validProperty,
      [fieldName]: message
    })
  }
  const validateForm = () => {
    let flag = true;
    for (const key in property) {
      if (!['location', 'overview', 'availableDate'].includes(key) && property[key] === '') {
        flag = flag && false;
      } else if (key === 'location') {
        if (property.location.street === ''
          || property.location.city === ''
          || property.location.zipCode === '')
          flag = flag && false;
      }
    }
    setFormValid(flag);
  }
  useEffect(() => {
    validateForm();
  }, [property]);
  
  const handleSave = () => {
    if (formValid) {
      setLoading(true);
      const price = parseFloat(property.price.substring(1).replace(/,/g, ''));
      const saveProperty = {
        ...property,
        price: price,
        token: '',
      };
      dispatch(createProperty(saveProperty))
        .then(() => {
          //close dialog
          setLoading(false);
          closeForm();
          setOpenAlert(true);
          setAlertContent({
            title: 'Property Create Confirmation',
            message: 'Property is saved successful!',
            onClose: () => setOpenAlert(false)
          });
        })
        .catch((error) => {
          setAlertContent({
            open: true,
            title: 'Property Create Confirmation',
            message: error,
            onClose: () => setOpenAlert(false)
          });
        });
    } else {
      //validation
      setLoading(false);
    }
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
        <LinearProgress variant='determinate' value={progress}></LinearProgress>
        <DialogTitleCustom id='dialog-title' onClose={closeForm} >
          Property Create
        </DialogTitleCustom>
        
        <DialogContent dividers={true}>
          <Grid container spacing={3} className='grid'>
            <Grid item xs={12} sm={6}>
              <TextField
                error={validProperty.price !== '' ? true : false}
                helperText={validProperty.price}
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
                error={validProperty.numOfRoom !== '' ? true : false}
                helperText={validProperty.numOfRoom}
                id='numOfRoom'
                name='numOfRoom'
                label='Num of room'
                variant='standard'
                value={property.numOfRoom}
                onChange={handleChange}
                type='number'
                inputProps={{
                  min: 1
                }}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant='standard' required fullWidth
                error={validProperty.propertyType !== '' ? true : false}
              >
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
                {
                  validProperty.propertyType !== '' && 
                  <FormHelperText className='capitalize'>{validProperty.propertyType}</FormHelperText>
                }
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant='standard' required fullWidth
                error={validProperty.homeType !== '' ? true : false}
              >
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
                {
                  validProperty.homeType !== '' &&
                  <FormHelperText className='capitalize'>{validProperty.homeType}</FormHelperText>
                }
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={validProperty.street !== '' ? true : false}
                helperText={validProperty.street}
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
                error={validProperty.city !== '' ? true : false}
                helperText={validProperty.city}
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
                error={validProperty.zipCode !== '' ? true : false}
                helperText={validProperty.zipCode}
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
                value={property.overview}
                style={{ width: '100%', height: '60px' }}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <InputLabel htmlFor='availableDate'>Available Date</InputLabel>
                <DatePicker
                  id='availableDate'
                  name='availableDate'
                  //label='Available Date'
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
              <MultiUploader
                label='Upload Pictures'
                id='pictures'
                changed={handleCapture}
              />
              {/* <Button variant='contained' component='label' startIcon={<CloudUploadIcon />}>
                Upload Pictures
                <input
                  hidden
                  accept='image/*'
                  multiple
                  type='file'
                  id='pictures'
                  onChange={handleCapture}
                />
              </Button> */}
            </Grid>
            <Grid item xs={12}></Grid>
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
            disabled={!formValid}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
      <AlertDialog
        open={openAlert}
        onClose={() => setOpenAlert(!openAlert)}
        title={alertContent.title}
        message={alertContent.message}
      />
    </>
  );
};
