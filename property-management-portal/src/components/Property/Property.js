import React, { useState } from 'react';
import { Button, Modal, Backdrop, Fade, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { CreateProperty } from "./CreateProperty/CreateProperty";

export const Property = (props) => {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const openForm = () => {
    setIsOpenForm(true);
  }
  const closeForm = () => {
    setIsOpenForm(false);
  }

  return (
    <div className='container'>
      <Stack direction="row" spacing={2}>
        <Button
          onClick={openForm}
          variant="contained"
          startIcon={<AddIcon />}
        >Create</Button>
      </Stack>

      <p>List Property here</p>
      
      <Modal
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        open={isOpenForm}
        onClose={closeForm}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade >
          <CreateProperty />
        </Fade>
      </Modal>
    </div>
  );
}