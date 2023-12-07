
import Header from '../components/Header/Header.jsx';
import BigText from '../components/BigText/BigText.jsx';
import ClothingSection from '../components/ClothingSection/ClothingSection.jsx';
import Categories from '../components/Categories/Categories.jsx';
import About from '../components/About/About.jsx';
import Footer from '../components/Footer/Footer.jsx';

export default function HomePage() {
  return (
    <>
      <Header />
      <ClothingSection />
      <BigText />
      <Categories />
      <About />
      <Footer />
      {/* Other components specific to the homepage */}
    </>
  );
}