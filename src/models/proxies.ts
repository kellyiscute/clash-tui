type IProxyType = "Direct" | "Reject" | "Selector" | "Shadowsocks" | "Socks5" | "URLTest";

export interface IProxy {
  type: IProxyType;
  all?: IProxy[];
  now?: string;
}

export interface IProxies {
  "DIRCET": {
    type: "Direct";
  };
  "GLOBAL": IProxy;
  "Proxy": IProxy;
  "REJECT": {
    type: "Reject";
  };
  [k: string]: IProxy;
}

