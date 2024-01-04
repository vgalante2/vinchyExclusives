import React, { useState, useEffect } from 'react';
 import styles from "./Cart.module.scss"
 import ClearIcon from '@mui/icons-material/Clear';


function Cart() {
    const [cartItems, setCartItems] = useState([]);


    useEffect(() => {
      const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
      setCartItems(storedCartItems);
    }, []);


    const handleDeletedItem = (id) => {
        const updatedCartItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCartItems);
        localStorage.setItem('cart', JSON.stringify(updatedCartItems));
      };

    

return (
<div className={styles.cartSection}>
<h1>Your Cart</h1>
<div className={styles.cartContent}>
{cartItems.map((item, index) => (
        <div key={index} className={styles.CartSetup}>
        <img className={styles.cartImg} src={item.imgSrc} alt="clothing_pic" />
        <p>{item.name} </p> 
        <p> ${item.price}</p>
        <p>- Size: {item.selectedSize} </p> 
        <p>Quantity: {item.quantity}</p>
          
          <ClearIcon onClick={() => handleDeletedItem(item.id)} className={styles.delete} />
        </div>
      ))}
</div>
     <h1>Total: $  </h1>
</div>
);
 }

export default Cart;