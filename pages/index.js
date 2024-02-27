import { useEffect, useState } from 'react';
import styles from "/styles/Welcome.module.scss";
import Header from '../components/Header/Header.jsx';
// import BigText from '../components/BigText/BigText.jsx';
import ClothingSection from '../components/ClothingSection/ClothingSection.jsx';
import Hoodies from '../components/ClothingSection/Hoodies.jsx';
import Shirts from '../components/ClothingSection/Shirts.jsx';
import Pants from '../components/ClothingSection/Pants.jsx';
import Categories from '../components/Categories/Categories.jsx';
import About from '../components/About/About.jsx';
// import Cart from '../components/Navbar//Cart/Cart.jsx';
import Promotion from '../components/Promo/Promotion.jsx';
import BestSellers from '../components/ClothingSection/BestSellers.jsx';
import Footer from '../components/Footer/Footer.jsx';

export default function HomePage() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const enterTimestamp = localStorage.getItem('enterTimestamp');
    if (enterTimestamp) {
      const currentTime = new Date().getTime();
      const elapsedTime = currentTime - enterTimestamp;
      const tenMinutes = 20 * 1000; // 10 minutes in milliseconds

      if (elapsedTime < tenMinutes) {
        // If less than 10 minutes have passed, set entered to true
        setEntered(true);
      } else {
        // More than 10 minutes have passed, remove the timestamp and require re-entry
        localStorage.removeItem('enterTimestamp');
        setEntered(false);
      }
    }
  }, []);

  const handleEnter = () => {
    const timestamp = new Date().getTime();
    localStorage.setItem('enterTimestamp', timestamp.toString());
    setEntered(true);
  };

  if (!entered) {
    return (
      <div className={styles.WelcomeContainer}> 
        <video className={styles.WelcomeVideo} src="/VINCHY_PROMO.mp4" autoPlay loop muted playsInline />
        <div className={styles.Overlay}></div>
        <div className={styles.contentContainer}>
          <h1 className={styles.h1}>vinchy exclusives <span className={styles.span}>*</span></h1>
          <button className={styles.WelcomeBtn} onClick={handleEnter} > Enter </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />   
      <Hoodies />
      <Categories />
      <Shirts />
      <About />
      <Pants />
      <Promotion />
      <BestSellers />
      <Footer />
    </>
  );
}
