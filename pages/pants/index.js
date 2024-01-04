import fitsData from '../../components/fits.json';
 import styles from "./pants.module.scss"
 import ClothingItem from '../../components/ClothingSection/ClothingItem';

 function PantsPage() {
const pants = fitsData.filter(item => item.category === 'pants');

  return (
    <div className={styles.pantsSection}>
     <h1 className={styles.heading} >Pants</h1>
      <div className={styles.pantsContainer}>
      {pants.map(pants => (
        pants.category === "pants" && <ClothingItem id={pants.id} imgSrc={pants.imgSrc} name={pants.name} price={pants.price} />
        ))}
      </div>
    </div>
  );
}


  export default PantsPage;