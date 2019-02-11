import { AUTH } from './types';

export const signUpActionCreatorSuccess = (signUpData) => ({
  type: AUTH.SIGN_UP_SUCCESS,
  signUpData,
});


