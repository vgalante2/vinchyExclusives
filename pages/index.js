
import Header from '../components/Header/Header.jsx';
import BigText from '../components/BigText/BigText.jsx';
import ClothingSection from '../components/ClothingSection/ClothingSection.jsx';
import Promo from '../components/Promo/Promo.jsx';
import About from '../components/About/About.jsx';
import Footer from '../components/Footer/Footer.jsx';

export default function HomePage() {
  return (
    <>
      <Header />
      <ClothingSection />
      <BigText />
      <Promo />
      <About />
      <Footer />
      {/* Other components specific to the homepage */}
    </>
  );
}