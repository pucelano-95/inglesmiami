import type { AppProps } from "next/app";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Script from "next/script";
import { Provider } from "react-redux";
import store from "@/store";

const App = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossOrigin="anonymous"
    />
    <Script
      src="https://kit.fontawesome.com/a076d05399.js"
      crossOrigin="anonymous"
    />
    <Component {...pageProps} />
  </Provider>
);

export default App;
