import React, { useState, forwardRef } from 'react';
import {
  Button
} from '@mui/material';

import { CreateProperty } from "./CreateProperty/CreateProperty";



export const Property = (props) => {
  
  return (
    <div className='container'>
      <CreateProperty />
      <p>List Property here</p>
    </div>
  );
}