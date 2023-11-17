import '@/styles/globals.scss'
import Navbar from '../components/Navbar/Navbar.jsx'
import Header from '../components/Header/Header.jsx'
import BigText from '../components/BigText/BigText.jsx'
import ClothingSection from '../components/ClothingSection/ClothingSection.jsx'
import Promo from '../components/Promo/Promo.jsx'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <Header />
      <ClothingSection />
      <BigText />
      <Promo />
      <Component {...pageProps} />
    </>
  );
}
