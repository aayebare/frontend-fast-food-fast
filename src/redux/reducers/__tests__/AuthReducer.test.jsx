
import authReducer from '../AuthReducer';
import {
  signUpActionCreatorSuccess
} from '../../actions/AuthActions';

describe('auth reducer', () => {
  it('should return initial state', () => {
    expect(authReducer(undefined, {})).toEqual({});
  });

  it('should return success message', () => {
    const newState = authReducer({}, signUpActionCreatorSuccess({}));
    expect(newState).toEqual({ signUpSuccess: {}, });
  });
});

