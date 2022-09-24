import { createAsyncThunk } from "@reduxjs/toolkit";

import APIServer from "constant/APIServer";
import { AxiosService } from "./AxiosService";


export const getAllProperties = createAsyncThunk('properties/fetchAll', async (token) => {
  return await AxiosService(token).get(`${APIServer.BASEURL}/properties`);
});

export const getPropertyById = createAsyncThunk('properties/fetchById', async (token, id) => {
  return await AxiosService(token).get(`${APIServer.BASEURL}/properties/${id}`);
});

export const createProperty = createAsyncThunk('properties/create', async (token, property) => {
  return await AxiosService(token).post(`${APIServer.BASEURL}/properties`, JSON.stringify(property));
});