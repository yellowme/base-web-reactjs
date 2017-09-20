/* eslint-disable no-undef */
import auth from 'utils/auth.js';
import runtimeEnv from '@mars/heroku-js-runtime-env';
const env = runtimeEnv();
const REACT_APP_API_ENDPOINT = env.REACT_APP_API_ENDPOINT;

function createHeaders() {
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  if (auth.loggedIn()) {
    headers.append('Authorization', auth.getToken());
  }
  return headers;
}

function search(endpoint, query, limit, page, sort, dir) {
  return fetch(`${REACT_APP_API_ENDPOINT}/${endpoint}?filter=${query}&limit=${limit}&page=${page}&sort=${sort}&dir=${dir}`, {
    headers: createHeaders(),
  })
  .then(checkStatus)
  .then(parseJSON);
}

function get(endpoint, {id}, params) {
  let endpointID = id ? `/${id}` : '';
  let url = `${REACT_APP_API_ENDPOINT}/${endpoint}${endpointID}?`;
  for (let prop in params) {
    if (params.hasOwnProperty(prop)) {
      url = `${url}${prop}=${params[prop]}&`;
    }
  }
  return fetch(url, {
    headers: createHeaders(),
  })
  .then(checkStatus)
  .then(parseJSON);
}

function post(endpoint, data) {
  return fetch(`${REACT_APP_API_ENDPOINT}/${endpoint}`, {
    headers: createHeaders(),
    method: 'POST',
    body: JSON.stringify(data),
  })
  .then(checkStatus)
  .then(parseJSON);
}

function put(endpoint, data) {
  return fetch(`${REACT_APP_API_ENDPOINT}/${endpoint}`, {
    headers: createHeaders(),
    method: 'PUT',
    body: JSON.stringify(data),
  })
  .then(checkStatus)
  .then(parseJSON);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 400) {
    return response;
  }
  if (response.status === 401) {
    auth.logout();
  }
  return Promise.reject(response);
}

function parseJSON(response) {
  if (response.status === 204) {
    return response;
  }
  return response.json();
}

const Api = { search, post, get, put };
export default Api;
