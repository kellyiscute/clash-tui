import { IProxies } from "../models/proxies";

const RequestManager = {
  async getProxies(): Promise<IProxies> {
    return (
      await globalThis.axios({
        url: "/proxies",
        method: "GET",
        headers: {
          Authorization: globalThis.authSecret
            ? `Bearer ${globalThis.authSecret}`
            : undefined,
        },
      })
    ).data;
  }
};

export default RequestManager;

