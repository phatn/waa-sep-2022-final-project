import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosService } from "./AxiosService";

export const getAllProperties = createAsyncThunk('properties/fetchAll', async () => {
  return await AxiosService().get('/properties');
});

export const getPropertyById = createAsyncThunk('properties/fetchById', async (id) => {
  const response = await AxiosService().get(`http://localhost:8080/properties/${id}`);
  return response.data;
});

export const createProperty = createAsyncThunk('properties/create', async (property) => {
  return await AxiosService().post('/properties', JSON.stringify(property));
});


