import React from 'react';
import { Stack, Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export const CreateProperty = (props) => {
    const handleCapture = () => {
        //
    }
    
    return (
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
    );
}