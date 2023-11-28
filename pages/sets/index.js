import fitsData from '../../components/fits.json';
 import styles from "./sets.module.scss"

 function SetsPage() {
const sets = fitsData.filter(item => item.category === 'sets');

  return (
    <div className={styles.setsSection}>
     <h1 className={styles.heading} >Combo</h1>
      <div className={styles.setsContainer}>
        {sets.map(set => (
          <div key={set.id} className={styles.setsContent}>
            <img className={styles.fitImg} src={set.imgSrc} alt={set.name} />
            <h2>{set.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}


  export default SetsPage;