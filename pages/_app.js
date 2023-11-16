import '@/styles/globals.scss'
import Navbar from '../components/Navbar/Navbar.jsx'
import Header from '../components/Header/Header.jsx'
import Promo from '../components/Promo/Promo.jsx'
import ClothingSection from '../components/ClothingSection/ClothingSection.jsx'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <Header />
      <ClothingSection />
      <Promo />
      <Component {...pageProps} />
    </>
  );
}
