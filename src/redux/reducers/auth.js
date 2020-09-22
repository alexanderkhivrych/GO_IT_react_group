import { createReducer } from '@reduxjs/toolkit';
import { loginAction, registerAction, logoutAction } from '../actions/auth';

const authReducer = createReducer(
  { accessToken: '' },
  {
    [logoutAction.type]: (state) => ({ ...state, accessToken: '' }),
    [loginAction.fulfilled]: (state, { payload: { accessToken } }) => ({ ...state, accessToken }),
    [registerAction.fulfilled]: (state, { payload: { accessToken } }) => ({ ...state, accessToken }),
  }
);

export default authReducer;
