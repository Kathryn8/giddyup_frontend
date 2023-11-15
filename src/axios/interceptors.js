import axios from 'axios';

const authFetch = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Accept: 'application/json',
  },
});

authFetch.interceptors.request.use(
  (request) => {
    request.headers['Accept'] = 'application/json';
    console.log(`${(request.method).toUpperCase()} request sent to baseUrl + ${request.url} with parameters: ${JSON.stringify(request.params)}`);

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authFetch.interceptors.response.use(
  (response) => {
    console.log(`${(response.data.status).toUpperCase()}: ${response.status} response from baseUrl + ${response.config.url} with parameters: ${JSON.stringify(response.config.params)}`);

    return response;
  },
  (error) => {
    if (error.response && error.response.status === 404) {
      console.log('INTERCEPTOR: NOT FOUND');
    } else if (error.response && error.response.status === 400) {
      console.log(`INTERCEPTOR: Error message: ${error.response.data.message}`)
    }
    else {
        console.log('INTERCEPTOR: Other snazy error');
    }
    return Promise.reject(error);
  }
);

export default authFetch;