// pages/products/[productId].js
import fitsData from '../../components/fits.json';
import styles from "./productPage.module.scss";

function ProductId({ productData }) {
  // If the product data was not found, render a "Not Found" message
  if (!productData) {
    return <div>Product not found</div>;
  }

  // Render the product details
  return (
    <div className={styles.productSection}>
      <h1 className={styles.name}>{productData.name}</h1>
      <img className={styles.image} src={productData.imgSrc} alt={productData.name} />
      <p className={styles.description}>{productData.description}</p>
      <p className={styles.price}>Price: ${productData.price}</p>
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
