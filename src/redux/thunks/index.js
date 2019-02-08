import axios from 'axios';
import  errorOccurred  from '../actions/CommonAction';

const axiosInstance = axios.create({
  baseURL: 'https://fast-food-fast-3.herokuapp.com/api/v1/',
});

axiosInstance.interceptors.response.use(
  response => response,
  error => Promise.reject(error.response.data),
);

const postDataThunkNoHeader = (endpoint, data, actionCreatorSuccess, method) => (dispatch) => {
   
    return axiosInstance[method](endpoint, data.data).then((response) => {
      dispatch(actionCreatorSuccess(response.data));
      
    }).catch((err) => {
      dispatch(errorOccurred(err));
    });
  };

const getPrivateDataThunk = (endpoint, actionCreator) => {
  return (dispatch) => {
    const token = localStorage.getItem('user');

    axiosInstance.defaults.headers.common.Authorization = 'Token '.concat(
      token,
    );
    return axiosInstance
      .get(endpoint)
      .then((response) => {
        dispatch(actionCreator(response.data));
      })
      .catch((err) => {
        dispatch(errorOccurred(err));
      });
  };
};


const getDataThunk = (endpoint, actionCreator) => {

  return dispatch => (
    axiosInstance.get(endpoint).then((response) => {
      dispatch(actionCreator(response.data));
      dispatch(errorOccurred(null));
    }).catch(err => dispatch(errorOccurred(err)))
  );
};

const postDataThunk = (endpoint, data, actionCreator, method) => (dispatch) => {
  const token = localStorage.getItem('user');

  axiosInstance.defaults.headers.common.Authorization = 'Token '.concat(token);
  return axiosInstance[method](endpoint, data).then((response) => {
    dispatch(actionCreator(response.data));
  }).catch((err) => {
    dispatch(errorOccurred(err));
  });
};

export {
  getDataThunk, postDataThunk, axiosInstance, getPrivateDataThunk, postDataThunkNoHeader
};