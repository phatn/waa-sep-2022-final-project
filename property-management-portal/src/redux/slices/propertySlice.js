import { createSlice } from "@reduxjs/toolkit";
import { createProperty, getPropertyById } from "services/PropertyService";

const propertySlice = createSlice({
  name: 'property',
  initialState: { properties: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createProperty.fulfilled, (state, action) => {
      state.properties.push(action.payload);
    })
      .addCase(getPropertyById.fulfilled, (state, action) => {
        state.properties.push(action.payload);
    })
  }
});

export default propertySlice;