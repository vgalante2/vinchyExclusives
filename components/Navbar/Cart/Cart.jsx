import React, { useState, useEffect } from 'react';
 import styles from "./Cart.module.scss"
 import ClearIcon from '@mui/icons-material/Clear';
 import Link from 'next/link';


function Cart() {
    const [cartItems, setCartItems] = useState([]);


    useEffect(() => {
      const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
      const aggregatedItems = aggregateItems(storedCartItems);
        setCartItems(aggregatedItems);
    }, []);


    const aggregateItems = (items) => {
        const itemMap = {};

        items.forEach(item => {
            const key = item.id + '-' + item.selectedSize;
            const itemQuantity = parseInt(item.quantity, 10);

            if (!itemMap[key]) {
                itemMap[key] = {...item, price: item.price, quantity: itemQuantity};
            } else {
                itemMap[key].quantity += itemQuantity;
            }
        });

        return Object.values(itemMap);
    };


    const handleDeletedItem = (id) => {
        const updatedCartItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCartItems);
        localStorage.setItem('cart', JSON.stringify(updatedCartItems));

      };

      
      const calculateTotalPrice = (cartItems) => {
      return cartItems.reduce((total, item) => {
        return total + (item.price * item.quantity);
      }, 0);
      };

      const totalPrice = calculateTotalPrice(cartItems);
      localStorage.setItem('totalPrice', JSON.stringify(totalPrice));

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
     <h1 className={styles.totalPrice}>Total: $ <span className={styles.totalPriceNum}>{totalPrice}</span></h1>
     <Link href={`/checkout`}>
<button className={styles.checkOutBtn}>CHECK OUT </button>
      </Link>
</div>
);
 }

export default Cart;