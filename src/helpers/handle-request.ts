import { AxiosRequestConfig } from 'axios';
import {API_GITHUB_TOKEN} from '@/commons/config'

export const handleRequest = (config: AxiosRequestConfig) => {
  config.headers = {
    ...config.headers,
    Accept: 'application/vnd.github.v3+json',
    'Content-Type': 'application/json',
    Authorization: `token ${API_GITHUB_TOKEN}`
  };

  return config;
};

export const handleErrorRequest = (error: any) => Promise.reject(error);
