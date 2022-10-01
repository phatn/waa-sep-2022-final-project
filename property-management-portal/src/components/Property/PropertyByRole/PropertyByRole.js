import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllProperties } from 'services/PropertyService';
import { CircularLoading } from 'components/Loading/CircularLoading';
import PropertyList from 'components/PropertyList/PropertyList';

import './Property.scss';


export const PropertyByRole = (props) => {
  const propertyState = useSelector((state) => state.property);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProperties());
  }, []);

  return (
    <div className='property-list'>
      {
        propertyState.loadedProperties === false &&
        <CircularLoading size={'20vh'} />
      }
      {
        propertyState.loadedProperties === true && 
        <PropertyList
          properties={propertyState.properties}
          roles={props.roles}
          showTitle={false}
          showFavBtn={false}
          showListBtn={false}
          showDeleteBtn={false}
          itemPerPage={12}
        />
      }
    </div>
  );
}