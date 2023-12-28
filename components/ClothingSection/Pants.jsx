import styles from './Pants.module.scss';
import ClothingItem from './ClothingItem';
import fitsData from '../fits.json';

function Pants() {
    return (
        <section className={styles.PantsAreaSection}>
        <h1 className={styles.PantsHeading}><span className={styles.span}>Shirts</span></h1>
            <div className={styles.PantsAreaContainer}>
                {fitsData.map(fit => (
                    fit.category === "pants" && <ClothingItem id={fit.id} imgSrc={fit.imgSrc} name={fit.name} price={fit.price} />

                ))}
            </div>
        </section>
    );
}

export default Pants; 