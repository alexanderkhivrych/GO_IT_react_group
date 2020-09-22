import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import authAPI from '../../api/auth';

export const logoutAction = createAction('auth/logout');
export const loginAction = createAsyncThunk('auth/login', async (params, thunkAPI) => {
  const response = await authAPI.login(params);

  return response;
});

export const registerAction = createAsyncThunk('auth/register', async (params, thunkAPI) => {
  const response = await authAPI.register(params);

  return response;
});
