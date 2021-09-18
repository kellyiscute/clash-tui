import {createAxiosInstance} from "../src/axios-instance";
import RequestManager from "../src/requests/request-manager";

export async function testRequestManager() {
  globalThis.baseUrl = "http://kellycutie.com:8883";
  globalThis.authSecret = "kellysoooocute";
  globalThis.axios = createAxiosInstance();
  console.log(await RequestManager.getProxies());
  
}

