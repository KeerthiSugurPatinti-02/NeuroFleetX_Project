// src/services/apiClient.js
import axios from 'axios';
import { API_BASE_URL } from '../config';
import { getToken, isTokenExpired, clearAuth } from '../utils/authUtils';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

apiClient.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      if (isTokenExpired(token)) {
        clearAuth();
        return Promise.reject(new Error('Token expired'));
      }
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      clearAuth();
      // optional: redirect handled in components
    }
    return Promise.reject(error);
  }
);

export default apiClient;
