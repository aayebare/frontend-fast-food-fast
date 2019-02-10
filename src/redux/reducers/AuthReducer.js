/** module containing reducers */
import { AUTH } from '../actions/types';

const authReducer = (state = {}, action) => {
  /** function to perform reducer functionality */
  switch (action.type) {
    case AUTH.SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpSuccess: action.signUpData,
      };
    // case AUTH.SIGN_UP_FAILURE:
    //   return {
    //     ...state,
    //     signUpFailure: action.errors,
    //   };
    default:
      return state;
  }
};

export default authReducer;