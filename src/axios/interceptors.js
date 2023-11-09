import axios from 'axios';

const authFetch = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL, // change THIS for live deploy
  headers: {
    Accept: 'application/json',
  },
});

authFetch.interceptors.request.use(
  (request) => {
    // old version
    // request.headers.common['Accept'] = 'application/json';
    request.headers['Accept'] = 'application/json';
    console.log(`Request Method and params: ${request.method}: ${request.param}`); //output: `/api: true`
    console.log('INTERCEPTOR: request sent');
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authFetch.interceptors.response.use(
  (response) => {
    console.log('INTERCEPTOR: got response');
    return response;
  },
  (error) => {
    // console.log("line 30")
    // console.log(`here is the error resp: ${error.response}`);
    // console.log("you're here");
    if (error.response && error.response.status === 404) {
      // Handle the 404 error
      console.log('INTERCEPTOR: NOT FOUND');
    } else if (error.response && error.response.status === 400) {
      // Handle the 404 error
      // console.log('congrats - you found the 400 erro!');
      console.log(`INTERCEPTOR: Error message: ${error.response.data.message}`)
    }
    else {
      // Handle other errors or provide a default action
      console.log('INTERCEPTOR: Other snazy error');
    }
    return Promise.reject(error);
  }
);

export default authFetch;