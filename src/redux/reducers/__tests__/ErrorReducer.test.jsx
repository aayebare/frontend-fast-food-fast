import reducer from '../ErrorReducer';
import { errorOccurred } from '../../actions/CommonAction';

describe('error reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });
  it('should handle ERROR_OCCURED', () => {
    expect(
      reducer({}, errorOccurred()),
    ).toEqual({});
  });
});