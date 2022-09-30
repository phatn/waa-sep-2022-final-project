import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from './AxiosService';

export const getTotalApplications = createAsyncThunk('reports/getTotalApplications', async () => {
    const response = await axiosInstance.get('/reports/applications/total');
    return response.data;
});

export const getSumSellTypeProperties = createAsyncThunk('reports/getSumSellTypeProperties', async () => {
    const response = await axiosInstance.get('/reports/properties/sumSellTypes');
    return response.data;
});

export const getSumRentTypeProperties = createAsyncThunk('reports/getSumRentTypeProperties', async () => {
    const response = await axiosInstance.get('/reports/properties/sumRentType');
    return response.data;
});

export const getLatestProperties = createAsyncThunk('reports/getLatestProperties', async (number) => {
    const response = await axiosInstance.get('/reports/properties/latest/' + number);
    return response.data;
});