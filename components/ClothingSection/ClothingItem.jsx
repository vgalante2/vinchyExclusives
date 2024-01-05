import styles from './ClothingItem.module.scss';
import Link from 'next/link';

function ClothingItem({  id, imgSrc, name, price}) {
   

    return (
        <Link href={`/products/${id}`} >
           <div className={styles.clothesCard}>
                <img className={styles.image} src={imgSrc} alt={name}/>  
                <h2 className={styles.name}>{name}</h2>
                <p className={styles.price}>${price}</p>
                
            </div>
        </Link>
    );
}

export default ClothingItem;