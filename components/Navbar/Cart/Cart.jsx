import React, { useState, useEffect } from 'react';
 import styles from "./Cart.module.scss"



function Cart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
      const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
      setCartItems(storedCartItems);
    }, []);

return (
<div className={styles.cartSection}>
<h1>Your Cart</h1>
<div className={styles.cartContent}>
{cartItems.map((item, index) => (
        <div key={index}>
        <p>{item.name} - Size: {item.selectedSize} - Quantity: {item.quantity}</p>
          <p> ${item.price}</p>
        </div>
      ))}
</div>
</div>
);
 }

export default Cart;