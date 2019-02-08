import AUTH from './types';


export const signUpActionCreatorSuccess = signUpData => ({
  /** function to generate a sign-up action */
  type: AUTH.SIGN_UP_SUCCESS,
  signUpData,
});

export const signUpActionCreatorFailure = errors => ({
  /** function to generate a sign-up action */
  type: AUTH.SIGN_UP_FAILURE,
  errors,
});