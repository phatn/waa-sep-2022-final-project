import React from 'react';

import { CreateProperty } from "./CreateProperty/CreateProperty";


export const Property = (props) => {
  
  return (
    <div className='container'>
      <CreateProperty />
      <p>List Property here</p>
    </div>
  );
}