import AUTH from './types'

const errorOccurred = errMsg => ({ type: AUTH.ERROR_OCCURRED, errMsg });

export default errorOccurred;