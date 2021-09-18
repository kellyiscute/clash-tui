import axios, { AxiosInstance } from "axios";

export function createAxiosInstance(): AxiosInstance {
  return axios.create({
    baseURL: globalThis.baseUrl,
  });
}

