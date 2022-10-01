import React from 'react';

import { CreateProperty } from "./CreateProperty/CreateProperty";
import { getLoggedRoles } from "Utils";
import { PropertyByRole } from './PropertyByRole/PropertyByRole';
import Constants from "Constants";


export const Property = (props) => {
  const roles = getLoggedRoles();
  
  return (
    <div className='container'>
      <h1>Property List</h1>
      {
        roles.includes(Constants.OWNER_ROLE) &&
        <CreateProperty />
      }
      {
        (roles.includes(Constants.ADMIN_ROLE)
          || roles.includes(Constants.OWNER_ROLE)
          || roles.includes(Constants.CUSTOMER_ROLE)
        ) &&
          <PropertyByRole roles={roles} />
      }
    </div>
  );
}