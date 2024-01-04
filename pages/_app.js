
import  '@/styles/globals.scss'
import Navbar from '../components/Navbar/Navbar.jsx'
import Cart from '../components/Navbar/Cart/Cart.jsx'
import { useState } from 'react';

export default function App({ Component, pageProps }) {
  const [cartOpen, setCartOpen] = useState(false);
const [cartItems, setCartItems] = useState([]);

const addToCart = (product, selectedSize) => {
  setCartItems([...cartItems, {...product, size: selectedSize, quantity: quantity }]);
}

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };
  
  return (
    <>
      <Navbar toggleCart={toggleCart} />
      <div className={`contentWrapper ${cartOpen ? 'slideOutContent blurBackground' : ''}`}>
        <Component {...pageProps} />
      </div>
      <div className={`cartContainer ${cartOpen ? 'slideInCart' : ''}`}>
        {cartOpen && <Cart />}
      </div>
    </>
  );
}
