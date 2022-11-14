import axios from 'axios';
import { storageService } from '../services/storageService';

export const apiClient = axios.create({
  baseURL: 'http://localhost:8000',
  timeout: 20000,
  headers: { 'Content-Type': 'application/json' }
});

const buildRequestWithAccessToken = async (request, token) => {
  return {
    ...request,
    ...{ headers: { ...request.headers, ...{ Authorization: token } } }
  };
};

const authenticationInterceptor = async (request) => {
  const accessToken = storageService.getItem('accessToken');

  return !accessToken
    ? request
    : buildRequestWithAccessToken(request, accessToken);
};

apiClient.interceptors.request.use(authenticationInterceptor, (error) =>
  Promise.reject(error)
);
