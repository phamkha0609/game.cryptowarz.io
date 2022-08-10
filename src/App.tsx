import { useRouter } from "hooks/useRouter";
import React, { useState, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "router";

import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider, useWeb3React } from "@web3-react/core";
import useEagerConnect from "hooks/useEagerConnect";
import useInactiveListener from "hooks/useInactiveListener";
import "antd/dist/antd.css";
import "./styles/app.scss";

function getLibrary(provider: any) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

function App() {
  const { connector } = useWeb3React();
  const element = useRoutes(routes);
  const [isLoaded, setIsLoaded] = useState(false);
  useRouter();

  const [activatingConnector, setActivatingConnector] = useState();
  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);
  const triedEager = useEagerConnect();
  useInactiveListener(!triedEager || !!activatingConnector);

  return <div className="App">{element}</div>;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  );
}
