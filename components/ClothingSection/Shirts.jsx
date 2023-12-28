import styles from './Shirts.module.scss';
import ClothingItem from './ClothingItem';
import fitsData from '../fits.json';

function Shirts() {
    return (
        <section className={styles.ShirtsAreaSection}>
        <h1 className={styles.ShirtsHeading}><span className={styles.span}>Shirts</span></h1>
            <div className={styles.ShirtsAreaContainer}>
                {fitsData.map(fit => (
                    fit.category === "shirts" && <ClothingItem id={fit.id} imgSrc={fit.imgSrc} name={fit.name} price={fit.price} />

                ))}
            </div>
        </section>
    );
}

export default Shirts; 