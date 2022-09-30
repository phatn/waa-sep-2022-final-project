import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllProperties } from 'services/PropertyService';
import { CircularLoading } from 'components/Loading/CircularLoading';
import PropertyList from 'components/PropertyList/PropertyList';
import PropertyCard from 'components/PropertyList/PropertyCard';


export const PropertyByRole = (props) => {
  const { roles } = props;

  const propertyState = useSelector((state) => state.property);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProperties());
  }, []);

  return (
    <div>
      {
        propertyState.loadedProperties === false &&
        <CircularLoading size={'20vh'} />
      }
      {
        propertyState.loadedProperties === true && 
        <PropertyList properties={propertyState.properties} />
      }
    </div>
  );
}