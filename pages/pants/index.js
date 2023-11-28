import fitsData from '../../components/fits.json';
 import styles from "./pants.module.scss"

 function PantsPage() {
const pants = fitsData.filter(item => item.category === 'pants');

  return (
    <div className={styles.pantsSection}>
     <h1 className={styles.heading} >Pants</h1>
      <div className={styles.pantsContainer}>
        {pants.map(pant => (
          <div key={pant.id} className={styles.pantsContent}>
            <img className={styles.fitImg} src={pant.imgSrc} alt={pant.name} />
            <h2>{pant.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}


  export default PantsPage;