import React from 'react';
import { Button, Paper, Typography, Box } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export const CreateProperty = (props) => {
  const handleCapture = () => {
    //
  }
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    bgcolor: 'background.paper',
    border: '2px solid #3F85CE',
    boxShadow: 24,
    p: 3,
  };
  return (
    <Paper sx={style}>
      <Typography component="h2" variant="h4" align="center">
        Property Create
      </Typography>
      
    </Paper>
    );
}
/*
<Stack direction='row' alignItems='right' spacing={2}>
            <Button
                variant='contained'
                startIcon={<CloudUploadIcon />}
            >
                Upload Pictures
                <input
                    hidden
                    accept="image/*"
                    multiple
                    type="file"
                    id="pictures"
                    onChange={handleCapture}
                />
            </Button>
        </Stack>
        */