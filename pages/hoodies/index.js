import fitsData from '../../components/fits.json';
 import styles from "./hoodies.module.scss"

 function HoodiesPage() {
  return (
    <div className={styles.hoodiesSection}>
     <h1>hoodies</h1>
      <div className={styles.hoodiesContainer}>
        {fitsData.map((fit) => (
          <div key={fit.id} className={styles.hoodiesContent}>
            <img className={styles.fitImg} src={fit.imgSrc} alt={fit.name} />
            <h2>{fit.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}


  export default HoodiesPage;