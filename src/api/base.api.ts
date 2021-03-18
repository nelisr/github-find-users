import { BaseModel } from '@/models/base';
import { handleRequest, handleErrorRequest } from '@/helpers/handle-request';
import { handleErrorResponse, handleResponse } from '@/helpers/handle-response';

import axios, { AxiosResponse, AxiosRequestConfig, AxiosInstance } from 'axios';
import { API_URL_SERVICE } from '@/commons/config';

export interface APIModel<T extends BaseModel> {
  body?: T;
  pageIndex?: number;
  pageSize?: number;
}

export interface GitHubQuery {
  q: string;
  page: number;
  per_page: number;
  sort?: string;
  order?: string;
}

export class BaseAPI<T extends BaseModel> {
  protected axios: any;

  protected apiUrl: string

  constructor() {
    this.axios = this.buildAxiosInstance();
    this.apiUrl = API_URL_SERVICE;
  }

  private buildAxiosInstance(): AxiosInstance {
    const axiosInstance = axios.create({});
    this.requestInterceptor(axiosInstance);
    this.responseInterceptor(axiosInstance);

    return axiosInstance;
  }

  private requestInterceptor(axios: AxiosInstance): void {
    axios.interceptors.request.use(
      (config: AxiosRequestConfig) => handleRequest(config),
      (error: any) => handleErrorRequest(error),
    );
  }

  private responseInterceptor(axios: AxiosInstance): void {
    axios.interceptors.response.use(
      (response: AxiosResponse) => handleResponse(response),
      (error: any) => handleErrorResponse(error),
    );
  }
}
