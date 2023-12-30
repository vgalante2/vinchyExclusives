// pages/products/[productId].js
import * as React from 'react';
import fitsData from '../../components/fits.json';
import styles from "./productPage.module.scss";
import CartSelector from "./CartSelector";


function ProductId({ productData }) {
  // If the product data was not found, render a "Not Found" message
  if (!productData) {
    return <div>Product not found</div>;
  }




  // Render the product details
  return (
    <div className={styles.productSection}>
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
       <button className={styles.small}>{productData.size[0]}</button>
       <button className={styles.medium}>{productData.size[1]}</button>
       <button className={styles.large}>{productData.size[2]}</button>
       </div>
      </div>
      <div className={styles.CheckoutContainer}>
      <CartSelector />;
     <div className={styles.CartContainer}>
     <button className={styles.ATCContainer}>Add to Cart</button>
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
