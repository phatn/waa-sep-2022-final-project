import React from 'react';
import { AxiosService } from './AxiosService';


export const awsS3Upload = async (token, formData) => {
  try {
    const result = await AxiosService(token, true).post('/files', formData);
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
}
// const instance = axios.create({
//     baseURL: 'http://localhost:4040/',
//     headers: { 'Authorization': 'Bearer ' + AppConstant.accessToken}
// });
// export const createProperty = createAsyncThunk(
//   'properties/create',
//   async (propertyData) => {
//     const { token, ...property } = propertyData;
//     try {
//       return await AxiosService(token).post('/properties', JSON.stringify(property));
//     } catch(err) {
//       return err.message;
//     }
// });