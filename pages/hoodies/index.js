import fitsData from '../../components/fits.json';
 import styles from "./hoodies.module.scss"

 function HoodiesPage() {
const hoodies = fitsData.filter(item => item.category === 'hoodies');

  return (
    <div className={styles.hoodiesSection}>
     <h1 className={styles.heading} >hoodies</h1>
      <div className={styles.hoodiesContainer}>
        {hoodies.map(hoodie => (
          <div key={hoodie.id} className={styles.hoodiesContent}>
            <img className={styles.fitImg} src={hoodie.imgSrc} alt={hoodie.name} />
            <h2>{hoodie.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}


  export default HoodiesPage;