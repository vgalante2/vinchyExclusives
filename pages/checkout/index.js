import React, { useState, useEffect} from 'react';
import styles from "./checkout.module.scss";
import Cart from "../../components/Navbar/Cart/Cart.jsx"


function Checkout() {
const [cartItems, setCartItems] = useState([]);
const [totalPrice, setTotalPrice] = useState(0);

useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const storedTotalPrice = JSON.parse(localStorage.getItem('totalPrice')) || 0;
  
    setCartItems(storedCartItems);
    setTotalPrice(storedTotalPrice);
  }, []);





return (
    <div className={styles.CheckoutPage}>
    <h1 className={styles.CheckoutHeading}> Your Cart </h1>
    <div className={styles.CheckoutContainerOne}>
    {cartItems.map((item, index) => (
  <div className={styles.CheckoutItemRow} key={index}>
    <div className={styles.CheckoutImageContainer}>
      <img className={styles.CheckoutImg} src={item.imgSrc} alt={item.name} />
    </div>
    <div className={styles.CheckoutInfoContainer}>
      <p className={`${styles.CheckoutInfo} ${styles.CheckoutItemName}`}>{item.name} </p>
      <p className={`${styles.CheckoutInfo} ${styles.CheckoutItemSize}`}> Size: {item.selectedSize} </p>
      <p className={`${styles.CheckoutInfo} ${styles.CheckoutItemQuantity}`}>Quantity: {item.quantity}</p>
      <p className={`${styles.CheckoutInfo} ${styles.CheckoutItemPrice}`}> ${item.price}</p>
    </div>
  </div>
))}

  
    </div>
    <div className={styles.CheckoutContainerTwo}>
    <h1 className={styles.TotalPrice}> Total: <span className={styles.PriceSpan}>${totalPrice}</span></h1>
     <button className={styles.Checkout_Btn}>Checkout</button>
    </div>
</div>
)
}



export default Checkout;