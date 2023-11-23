import fitsData from '../../components/fits.json';
 import styles from "./shirts.module.scss"

 function ShirtsPage() {
const shirts = fitsData.filter(item => item.category === 'shirts');

  return (
    <div className={styles.shirtsSection}>
     <h1 className={styles.heading} >Shirts</h1>
      <div className={styles.shirtsContainer}>
        {shirts.map(shirt => (
          <div key={shirt.id} className={styles.shirtsContent}>
            <img className={styles.fitImg} src={shirt.imgSrc} alt={shirt.name} />
            <h2>{shirt.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}


  export default ShirtsPage;