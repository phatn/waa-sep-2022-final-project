import { createSlice } from "@reduxjs/toolkit";
import {
  contact, createProperty, getAllProperties,
  getPropertyById, requestVisit
} from "services/PropertyService";

const initialState = {
  properties: [],  loadedProperties: false,
  property: null,  loadedProperty: false,
  contactResponse: null
}

const propertySlice = createSlice({
  name: 'property',
  initialState: {...initialState},
  reducers: {
    resetContactResponse: (state) => {
      state.contactResponse = null;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createProperty.fulfilled, (state, action) => {
      state.property = action.payload;
      state.loadedProperty = true;
    });

    builder.addCase(createProperty.pending, (state) => {
        state.loadedProperty = false;
    });

    builder.addCase(getAllProperties.fulfilled, (state, action) => {
      state.properties = action.payload;
      state.loadedProperties = true;
    });

    builder.addCase(getAllProperties.pending, (state) => {
      state.loadedProperties = false;
    });

    builder.addCase(getPropertyById.fulfilled, (state, action) => {
        state.property = action.payload;
        state.loadedProperty = true;
    });

    builder.addCase(getPropertyById.pending, (state) => {
      state.loadedProperty = false;
    });

    builder.addCase(contact.fulfilled, (state, action) => {
      state.contactResponse = action.payload;
    });

    builder.addCase(requestVisit.fulfilled, (state, action) => {
      state.contactResponse = action.payload;
    });

  }
});

export const { resetContactResponse } = propertySlice.actions;

export default propertySlice;