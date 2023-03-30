import { combineReducers } from '@reduxjs/toolkit';
import accountSlice from './slices/accountSlice';
import authSlice from './slices/authSlice';
import layoutSlice from './slices/layoutSlice';
import socketSlice from './slices/socketSlice';
import petSlice from './slices/petSlice';

export const whitelist = [];

export const rootReducer = combineReducers({
  layoutSlice,
  authSlice,
  accountSlice,
  petSlice,
  socketSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export type PayloadName = 'payload';
