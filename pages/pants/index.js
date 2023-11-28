import fitsData from '../../components/fits.json';
 import styles from "./pants.module.scss"

 function PantsPage() {
const pants = fitsData.filter(item => item.category === 'pants');

  return (
    <div className={styles.pantsSection}>
     <h1 className={styles.heading} >Pants</h1>
      <div className={styles.pantsContainer}>
        {pants.map(pant => (
          <div key={shirt.id} className={styles.pantsContent}>
            <img className={styles.fitImg} src={shirt.imgSrc} alt={shirt.name} />
            <h2>{shirt.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}


  export default PantsPage;