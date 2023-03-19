// pages/_app.js
import 'react';
import '../public/styles/main.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
