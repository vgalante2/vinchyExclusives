import styles from './ClothingSection.module.scss';
import ClothingItem from './ClothingItem';
import fitsData from '../fits.json';

function ClothingSection() {
    return (
        <section >
            <div className={styles.clothingSection}>
                {fitsData.map(fit => (
                    <ClothingItem key={fit.id} {...fit} />
                ))}
            </div>
        </section>
    );
}

export default ClothingSection;
