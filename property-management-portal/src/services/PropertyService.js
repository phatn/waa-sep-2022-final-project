import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosService } from "./AxiosService";


export const getAllProperties = createAsyncThunk('properties/fetchAll', async (token) => {
  return await AxiosService(token).get('/properties');
});

export const getPropertyById = createAsyncThunk('properties/fetchById', async (token, id) => {
  return await AxiosService(token).get(`/properties/${id}`);
});

export const createProperty = createAsyncThunk(
  'properties/create',
  async (propertyData, thunkApi) => {
    const { token, ...property } = propertyData;
    //console.log('thunkApi', thunkApi);
    try {
      return await AxiosService(token).post('/properties', JSON.stringify(property));
    } catch(err) {
      return err.message;
    }
});