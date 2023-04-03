import {GlobalStyle} from '../styles/globals'
import { AuthProvider } from "../context/AuthProvider";

function MyApp({ Component, pageProps }) {

  return (
    <AuthProvider>
       <GlobalStyle />
        <Component {...pageProps} />
    </AuthProvider>
  );
}
export default MyApp;