import axios from 'axios';
import errorOccurred from '../actions/CommonAction';

const axiosInstance = axios.create({
  baseURL: 'https://fast-food-fast-3.herokuapp.com/api/v1/',
});

axiosInstance.interceptors.response.use(
  response => response,
  error => Promise.reject(error.response.data),
);

const postDataThunkNoHeader = (endpoint, data, actionCreator, method) => (dispatch) => {

  return axiosInstance[method](endpoint, data.data).then((response) => {
    dispatch(actionCreator(response.data));

  }).catch((err) => {
    dispatch(errorOccurred(err));
  });
};

const getPrivateDataThunk = (endpoint, actionCreator) => {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    console.log(token)
    axiosInstance.defaults.headers.common.Authorization = 'Bearer '.concat(token);
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

const postDataThunk = (endpoint, data, actionCreator, method) => (dispatch) => {
  const token = localStorage.getItem('token');

  axiosInstance.defaults.headers.common.Authorization = 'Bearer '.concat(token);
  return axiosInstance[method](endpoint, data.data).then((response) => {
    dispatch(actionCreator(response.data));
  }).catch((err) => {

    dispatch(errorOccurred(err));
  });
};

export {
  postDataThunk, axiosInstance, getPrivateDataThunk, postDataThunkNoHeader
};