import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_BASE_URL } from './apiConfig';

const api = axios.create({ baseURL: API_BASE_URL });

// 設置 Axios 的預設 headers
api.interceptors.request.use(async (config) => {
  const sessionId = await AsyncStorage.getItem('sessionId');
  if (sessionId) {
    config.headers['Cookie'] = `.AspNetCore.Session=${JSON.parse(sessionId)}`; // 將 session ID 添加到 Cookie 中
  }
  return config;
}, (error) => Promise.reject(error));

export default api;
