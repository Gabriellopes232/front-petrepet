import { AppProps } from 'next/app';
import '../styles/globals.css';

type NextAppProp = AppProps & {
  Component: AppProps['Component'] & { requireAuth: boolean };
};

const App = ({ Component, pageProps }: NextAppProp): JSX.Element => {
  return <Component {...pageProps} />;
};

export default App;
