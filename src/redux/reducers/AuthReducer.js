
import { AUTH } from '../actions/types';

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTH.SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpSuccess: action.signUpData,
      };
    default:
      return state;
  }
};

export default authReducer;