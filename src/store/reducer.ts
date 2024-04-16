// src/app/reducers.ts
import { combineReducers } from '@reduxjs/toolkit';
import locationSlice from './locationSlice';

const rootReducer = combineReducers({
  // Add your reducers here
  location: locationSlice,
});

export default rootReducer;
