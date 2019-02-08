/** module containing reducers */
import AUTH from '../actions/types';

const initialState = {
  signUpFailure: null,
  signUpSuccess: null,
};

const authReducer = (state = initialState, action) => {
  /** function to perform reducer functionality */
  switch (action.type) {
    case AUTH.SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpSuccess: action.signUpData.user,
      };
    case AUTH.SIGN_UP_FAILURE:
      return {
        ...state,
        signUpFailure: action.errors,
      };
    default:
      return state;
  }
};

export default authReducer;