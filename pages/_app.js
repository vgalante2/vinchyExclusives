import '@/styles/globals.scss'
import Navbar from '../components/Navbar/Navbar.jsx'


export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
    </>
  );
}
