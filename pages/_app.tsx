import "../styles/globals.css";
import "antd/dist/antd.css";
import type { AppProps } from "next/app";
import { AuthContext, AuthContextProvider } from "../contexts/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}
export default MyApp;
