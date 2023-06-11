import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  console.log("testdddddddddddddddddde");
  return <Component {...pageProps} />;
}
