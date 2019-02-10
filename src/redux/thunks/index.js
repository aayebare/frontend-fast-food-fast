import axios from 'axios';
import  errorOccurred  from '../actions/CommonAction';

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
    // const token = localStorage.getItem('user');
    // const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDk3OTUwNDYsIm5iZiI6MTU0OTc5NTA0NiwianRpIjoiNWQyMzkwMDgtNTA2Yy00ZGVmLWE2OTEtMzAyZGZjZGI1NTQ4IiwiZXhwIjoxNTQ5Nzk1OTQ2LCJpZGVudGl0eSI6NSwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.jb_2zbw8H8l_UT8RRrp1mQj0UyY1bhruB6fgedLH9Po"
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


const getDataThunk = (endpoint, actionCreator) => {

  return dispatch => (
    axiosInstance.get(endpoint).then((response) => {
      dispatch(actionCreator(response.data));
      dispatch(errorOccurred(null));
    }).catch(err => dispatch(errorOccurred(err)))
  );
};

const postDataThunk = (endpoint, data, actionCreator, method) => (dispatch) => {
  const token = localStorage.getItem('token');
// const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDk3OTEwNTYsIm5iZiI6MTU0OTc5MTA1NiwianRpIjoiYmExNDJjMWItYzFhYS00MDUyLTkwYTktNTJmNmQwODg4ZjVlIiwiZXhwIjoxNTQ5NzkxOTU2LCJpZGVudGl0eSI6NSwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.Q5qpkaUNZC-0sZBc0rtZ-_DAV650k3JPWOFMJA_0ctg"
  axiosInstance.defaults.headers.common.Authorization = 'Bearer '.concat(token);
  return axiosInstance[method](endpoint, data.data).then((response) => {
    dispatch(actionCreator(response.data));
  }).catch((err) => {
    console.log(err)
    
    dispatch(errorOccurred(err));
  });
};

export {
  getDataThunk, postDataThunk, axiosInstance, getPrivateDataThunk, postDataThunkNoHeader
};