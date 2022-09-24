import { createAsyncThunk } from "@reduxjs/toolkit";

import Constants from "Constants";
import { AxiosService } from "./AxiosService";


export const getAllProperties = createAsyncThunk('properties/fetchAll', async (token) => {
  return await AxiosService(token).get(`${Constants.BASE_URL}/properties`);
});

export const getPropertyById = createAsyncThunk('properties/fetchById', async (token, id) => {
  return await AxiosService(token).get(`${Constants.BASE_URL}/properties/${id}`);
});

export const createProperty = createAsyncThunk('properties/create', async (token, property) => {
  return await AxiosService(token).post(`${Constants.BASE_URL}/properties`, JSON.stringify(property));
});