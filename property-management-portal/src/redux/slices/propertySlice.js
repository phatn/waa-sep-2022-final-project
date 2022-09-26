import { createSlice } from "@reduxjs/toolkit";
import { createProperty, getPropertyById } from "services/PropertyService";

const initialState = {
  properties: [],  loadedProperties: false,
  property: null,  loadedProperty: false
}

const propertySlice = createSlice({
  name: 'property',
  initialState: {...initialState},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createProperty.fulfilled, (state, action) => {
      state.properties.push(action.payload);
    })
      .addCase(getPropertyById.fulfilled, (state, action) => {
      state.property = action.payload;
      state.loadedProperty = true;
    })
      .addCase(getPropertyById.pending, (state) => {
        state.loadedProperty = false;
      })
  }
});

export default propertySlice;