import axios, { AxiosInstance, CreateAxiosDefaults } from 'axios';

const appConfig = require('../appConfig/config.json');

const config: CreateAxiosDefaults = {
  baseURL: appConfig.backendUrl,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

const axiosClient: AxiosInstance = axios.create(config);

export default axiosClient;
