//@ts-ignore
import { apiConfig } from "@/shared/config/api";
import axios, { AxiosInstance } from "axios";

export abstract class BaseAPI {
  protected baseUrl: string;
  private axiosInstance: AxiosInstance | any = null;

  constructor() {
    this.baseUrl = apiConfig.baseUrl;
    this.axiosInstance = axios.create({
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.enableInterceptors();
  }

  private enableInterceptors(): void {
    this.axiosInstance.interceptors.response.use(
      this.getSuccessResponseHandler(),
      this.getErrorResponseHandler()
    );
  }

  private getErrorResponseHandler() {
    return async (error: any) => {
      console.log("ERROR RESPONSE HANDLER ", error);
      return Promise.reject({ ...error });
    };
  }

  private getSuccessResponseHandler() {
    return (response: any) => {
      return response.data;
    };
  }

  protected get(url: string, params?: any, headers?: any): Promise<any> {
    return this.axiosInstance({
      method: "GET",
      url: `${this.baseUrl}${url}`,
      params: params ? params : null,
      headers: headers ? headers : null,
    });
  }

  protected post(
    url: string,
    data?: any,
    params?: any,
    accessToken?: string
  ): Promise<any> {
    //return axios.post(`${this.baseUrl}${url}`, { data: data });
    return this.axiosInstance({
      method: "POST",
      url: `${this.baseUrl}${url}`,
      data: data,
      params: params ? params : null,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  protected pluginPost(
    url: string,
    payload?: any,
    params?: any,
    headers?: any
  ): Promise<any> {
    //return axios.post(`${this.baseUrl}${url}`, { data: data });
    return this.axiosInstance({
      method: "POST",
      url: `${this.baseUrl}${url}`,
      data: payload,
      params: params ? params : null,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  protected upload(url: string, file: any, refId: string): Promise<any> {
    let formData = new FormData();
    formData.append(`files`, file);
    formData.append(`refId`, refId);

    //return axios.post(`${this.baseUrl}${url}`, { data: data });
    return this.axiosInstance({
      method: "POST",
      url: `${this.baseUrl}${url}`,
      data: formData,
    });
  }

  protected put(
    url: string,
    data?: any,
    params?: any,
    headers?: any
  ): Promise<any> {
    return this.axiosInstance({
      method: "PUT",
      url: `${this.baseUrl}${url}`,
      data: {
        data: data,
      },
      params: params ? params : null,
      headers: headers ? headers : null,
    });
  }
}
