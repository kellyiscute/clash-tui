type IProxyType = "Direct" | "Reject" | "Selector" | "Shadowsocks" | "ShadowsocksR" | "Vmess" | "Trojan" | "Socks5" | "URLTest";

export interface IProxy {
  type: IProxyType;
  all?: IProxy[];
  name?: string;
  now?: string;
}

export interface IProxies {
  "DIRCET": {
    type: "Direct";
  };
  "GLOBAL": IProxy;
  "REJECT": {
    type: "Reject";
  };
  [k: string]: IProxy;
}

