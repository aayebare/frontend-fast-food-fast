import { AUTH } from './types'

export const errorOccurred = errMsg => ({ type: AUTH.ERROR_OCCURRED, errMsg });
