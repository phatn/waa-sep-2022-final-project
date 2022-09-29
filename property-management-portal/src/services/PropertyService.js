import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "./AxiosService";

export const getAllProperties = createAsyncThunk('properties/fetchAll', async () => {
  return await axiosInstance.get('/properties');
});

export const getPropertyById = createAsyncThunk('properties/fetchById', async (id) => {
  const response = await axiosInstance.get(`/properties/${id}`);
  return response.data;
});

export const contact = createAsyncThunk('properties/contact', async (payload) => {
    console.log('Inside: ' + JSON.stringify(payload));
    const response = await axiosInstance.post('/contacts', payload);
    return response.data;
})


export const createProperty = createAsyncThunk(
  'properties/create',
  async (propertyData) => {
    //const { token, ...property } = propertyData;
    try {
      const response = await axiosInstance.post('/properties', propertyData);
      return response.data;
    } catch(err) {
      return err.error;
    }
});