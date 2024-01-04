// pages/products/[productId].js
import  React, { useState } from 'react';
import fitsData from '../../components/fits.json';
import styles from "./productPage.module.scss";
import CartSelector from "./CartSelector";


function ProductId({ productData }) {
const [size, setSize] = useState(false);
const [quantity, setQuantity] = useState([0]);
const [alert, setAlert] = useState(false);
  
  // If the product data was not found, render a "Not Found" message
  if (!productData) {
    return <div>Product not found</div>;
  }


const handleNewSize = (newSize) => {
  setSize(newSize);
}

const handleAddToCart = () => {
  if (size) {
    const cartItem = { ...productData, selectedSize: size, quantity: quantity };
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    localStorage.setItem('cart', JSON.stringify([...currentCart, cartItem]));
  } else {
    setAlert(true);
  }
};

const handleQuantity = (newQuantity) => {
  setQuantity(newQuantity);
}



  // Render the product details
  return (
   
    <div className={styles.productSection}>
     {alert && (
      <div className={styles.alert}>
        <p className={styles.alertText} >Please pick a size to add to your cart</p>
        <button className={styles.alertBtn} onClick ={() => {setAlert(false)}}> got it </button>
      </div>
    )}
     <div className={styles.ImageContainer}>
     <img className={styles.ProductImage} src={productData.imgSrc} alt={productData.name} />
     </div>
     <div className={styles.InfoContainer}>
     <div className={styles.NameContainer}>
      <h1 className={styles.name}>{productData.name}</h1>
      <p className={styles.price}>${productData.price}</p>
      <p className={styles.description}>{productData.description}</p>
      </div>
      <div className={styles.sizeContainer}>
        <p className={styles.sizeHead}>size</p>
       <div className={styles.sizes}>
       <button  onClick={() => {handleNewSize(productData.size[0])}}    className={`${styles.small} ${size === productData.size[0] ? styles.sizeSelected : ''}`}>{productData.size[0]}</button>
       <button  onClick={() => {handleNewSize(productData.size[1])}}    className={`${styles.medium} ${size === productData.size[1] ? styles.sizeSelected : ''}`}>{productData.size[1]}</button>
       <button  onClick={() => {handleNewSize(productData.size[2])}}    className={`${styles.large} ${size === productData.size[2] ? styles.sizeSelected : ''}`}>{productData.size[2]}</button>
       </div>
      </div>
      <div className={styles.CheckoutContainer}>
      <CartSelector setQuantity={handleQuantity} />;
     <div className={styles.CartContainer}>
     <button onClick={handleAddToCart} className={styles.ATCContainer}>Add to Cart</button>
     <button className={styles.CheckContainer}>Checkout</button>
     </div> 
      </div>
      </div>
    </div>
  );
}

// This function gets called at build time on server-side.
export async function getServerSideProps(context) {
  const { productId } = context.params;

  // Find the product in fitsData
  const productData = fitsData.find(product => product.id === parseInt(productId, 10));

  // If no product is found, return a notFound flag
  if (!productData) {
    return { notFound: true };
  }

  // Pass product data to the page via props
  return { props: { productData } };
}

export default ProductId;
