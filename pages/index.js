import { useState } from 'react';
import styles from "/styles/Welcome.module.scss";
import Header from '../components/Header/Header.jsx';
// import BigText from '../components/BigText/BigText.jsx';
import ClothingSection from '../components/ClothingSection/ClothingSection.jsx';
import Hoodies from '../components/ClothingSection/Hoodies.jsx';
import Shirts from '../components/ClothingSection/Shirts.jsx';
import Pants from '../components/ClothingSection/Pants.jsx';
import Categories from '../components/Categories/Categories.jsx';
import About from '../components/About/About.jsx';
import Promo from '../components/Promo/Promo.jsx';
import BestSellers from '../components/ClothingSection/BestSellers.jsx';
import Footer from '../components/Footer/Footer.jsx';

export default function HomePage() {
const [entered, setEntered] = useState(false);

if (!entered) {
return (
<div className={styles.WelcomeContainer}> 
<video className={styles.WelcomeVideo} src="/VINCHY_PROMO.mp4" autoPlay loop muted />
<div className={styles.Overlay}></div>
<div className={styles.contentContainer}>
<h1 className={styles.h1}>vinchy exclusives <span className={styles.span}>*</span></h1>
<button className={styles.WelcomeBtn} onClick={() => setEntered(true)} > Enter </button>
</div>
</div>
)
}


  return (
    <>
      <Header />
      <Hoodies />
      <Categories />
      <Shirts />
      <About />
      <BestSellers />
      <Promo />
      <Pants />
      <Footer />
      {/* Other components specific to the homepage */}
    </>
  );
}