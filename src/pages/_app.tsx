import React from "react";
import type { AppProps } from "next/app";
import "@/styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <Component {...pageProps} />
    </React.StrictMode>
  );
}

export default App;
