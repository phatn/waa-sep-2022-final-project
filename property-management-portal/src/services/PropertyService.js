import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "./AxiosService";

export const getAllProperties = createAsyncThunk('properties/fetchAll', async () => {
  return await axiosInstance.get('/properties');
});

export const getPropertyById = createAsyncThunk('properties/fetchById', async (id) => {
  const response = await axiosInstance.get(`http://localhost:8080/properties/${id}`);
  return response.data;
});


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


export const getPropertyByEmail = createAsyncThunk('properties/fetchByEmail', async (email) => {
    const response = await AxiosService().get(`http://localhost:8080/users/${email}/favourites`);

    console.log('in PropertyService: ' + JSON.stringify(response.data))
    return response.data;
});