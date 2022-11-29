import type { AppProps } from "next/app";
import { ChainId, Web3sdkioProvider } from "@web3sdkio/react";
import "../styles/globals.css";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3sdkioProvider
      desiredChainId={activeChainId}
      authConfig={{
        // The backend URL of the authentication endoints.
        authUrl: "/api/auth",
        // Set this to your domain to prevent signature malleability attacks.
        domain: "example.com",
        // The redirect URL after a successful login.
        loginRedirect: "/",
      }}
    >
      <Component {...pageProps} />
    </Web3sdkioProvider>
  );
}

export default MyApp;
