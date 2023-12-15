import styles from './Bestseller.module.scss';
import ClothingItem from './ClothingItem';
import fitsData from '../fits.json';

function BestSellers() {
    return (
        <section className={styles.bestsellerSection}>
        <h1 className={styles.BestSellerHeading}><span className={styles.span}>BEST</span> SELLERS</h1>
            <div className={styles.bestsellerContainer}>
                {fitsData.map(fit => (
                    fit.bestseller && <ClothingItem id={fit.id} imgSrc={fit.imgSrc} name={fit.name} price={fit.price} />

                ))}
            </div>
        </section>
    );
}

export default BestSellers; 