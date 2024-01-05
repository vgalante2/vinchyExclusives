import React, { useState, useEffect} from 'react';
import styles from "./checkout.module.scss";


function Checkout() {
const [cartItems, setCartItems] = useState([]);

useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCartItems);
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
      <p className={styles.CheckoutInfo}>{item.name} - Size: {item.selectedSize} - Quantity: {item.quantity}</p>
    </div>
  </div>
))}

  
    </div>
    <div className={styles.CheckoutContainerTwo}>
     <button className={styles.Checkout_Btn}>Checkout</button>
    </div>
</div>
)
}



export default Checkout;