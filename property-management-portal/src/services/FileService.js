import React from 'react';
import { AxiosService } from './AxiosService';
export const upload = async (token, formData) => {
  try {
    const result = await AxiosService(token, true).post('/files', formData);
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
}
