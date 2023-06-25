import { NextUIProvider } from "@nextui-org/react";
import Home from "./page";

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Home {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
