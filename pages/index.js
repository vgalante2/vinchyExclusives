
import Header from '../components/Header/Header.jsx';
import BigText from '../components/BigText/BigText.jsx';
import ClothingSection from '../components/ClothingSection/ClothingSection.jsx';
import Promo from '../components/Promo/Promo.jsx';

export default function HomePage() {
  return (
    <>
      <Header />
      <ClothingSection />
      <BigText />
      <Promo />
      {/* Other components specific to the homepage */}
    </>
  );
}