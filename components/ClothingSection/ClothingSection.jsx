import styles from './ClothingSection.module.scss';
import ClothingItem from './ClothingItem';
import fitsData from '../fits.json';

function ClothingSection() {
    return (
        <section >
            <div className={styles.clothingSection}>
                {fitsData.map(fit => (
                    <ClothingItem id={fit.id} imgSrc={fit.imgSrc} name={fit.name} price={fit.price} />

                ))}
            </div>
        </section>
    );
}

export default ClothingSection; 
