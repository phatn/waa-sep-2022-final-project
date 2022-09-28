import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosService } from "./AxiosService";

export const getAllProperties = createAsyncThunk('properties/fetchAll', async () => {
  return await AxiosService().get('/properties');
});

export const getPropertyById = createAsyncThunk('properties/fetchById', async (id) => {
  const response = await AxiosService().get(`http://localhost:8080/properties/${id}`);
  return response.data;
});


export const createProperty = createAsyncThunk(
  'properties/create',
  async (propertyData) => {
    const { token, ...property } = propertyData;
    try {
      return await AxiosService(token).post('/properties', JSON.stringify(property));
    } catch(err) {
      return err.message;
    }
});


export const getPropertyByEmail = createAsyncThunk('properties/fetchByEmail', async (email) => {
    const response = await AxiosService().get(`http://localhost:8080/users/${email}/favourites`);

    console.log('in PropertyService: ' + JSON.stringify(response.data))
    return response.data;
});