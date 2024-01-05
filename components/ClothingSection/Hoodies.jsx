import styles from './Hoodies.module.scss';
import ClothingItem from './ClothingItem';
import fitsData from '../fits.json';

function Hoodies() {
    return (
        <section className={styles.HoodieAreaSection}>
        <h1 className={styles.HoodiesHeading}><span className={styles.span}>Hoodies</span></h1>
            <div className={styles.HoodiesAreaContainer}>
                {fitsData.map(fit => (
                    fit.category === "hoodies" && <ClothingItem  id={fit.id} imgSrc={fit.imgSrc} name={fit.name} price={fit.price} />

                ))}
            </div>
        </section>
    );
}

export default Hoodies; 