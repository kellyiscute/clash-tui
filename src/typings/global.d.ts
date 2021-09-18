import { AxiosInstance } from "axios";

export declare global {
  namespace globalThis {
    var baseUrl: string;
    var authSecret: string | undefined;
    var axios: AxiosInstance; 
  }
}

