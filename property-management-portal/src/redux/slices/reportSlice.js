import { get10LatestProperties, getSumRentTypeProperties, getSumSellTypeProperties, getTotalApplications } from 'services/ReportService';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalApplications: 0,
  sumSellTypeProperties: 0,
  sumRentTypeProperties: 0,
  latestProperties: []
}

const reportSlice = createSlice({
  name: 'report',
  initialState: {...initialState},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTotalApplications.fulfilled, (state, action) => {
      state.totalApplications = action.payload;
    }).addCase(getSumSellTypeProperties.fulfilled, (state, action) => {
      state.sumSellTypeProperties = action.payload;
    }).addCase(getSumRentTypeProperties.fulfilled, (state, action) => {
      state.sumRentTypeProperties = action.payload;
    }).addCase(get10LatestProperties.fulfilled, (state, action) => {
      state.latestProperties = [...action.payload];
    })
  }
});

export default reportSlice;