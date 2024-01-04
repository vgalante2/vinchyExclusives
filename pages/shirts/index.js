import fitsData from '../../components/fits.json';
 import styles from "./shirts.module.scss"
 import ClothingItem from '../../components/ClothingSection/ClothingItem';

 function ShirtsPage() {
const fit = fitsData.filter(item => item.category === 'shirts');

  return (
    <div className={styles.shirtsSection}>
     <h1 className={styles.heading} >Shirts</h1>
      <div className={styles.shirtsContainer}>
        {fit.map(fit => (
          fit.category === "shirts" && <ClothingItem id={fit.id} imgSrc={fit.imgSrc} name={fit.name} price={fit.price} />
        ))}
      </div>
    </div>
  );
}


  export default ShirtsPage;