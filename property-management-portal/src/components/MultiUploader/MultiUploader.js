import React, { useState } from 'react';
import { Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export const MultiUploader = (props) => {
  const { id, label, changed, ...other  } = props;
  const [progress, setProgress] = useState(0);
  const [isUploading, setUploading] = useState(false);
  const [uploadPictures, setUploadedPictures] = useState([]);

  const onChange = async (evt) => {
    let formData = new FormData();
    setUploadedPictures([]);
    formData.append('file', evt.target.files[0]);
  }

  const handleCapture = () => {
    //
  }
  return (
    <>
      <Button variant='contained' component='label' startIcon={<CloudUploadIcon />} {...other}>
        {label}
        <input
          hidden
          accept='image/*'
          multiple
          type='file'
          id={id}
          onChange={changed}
        />
      </Button>
    </>
  )
}
