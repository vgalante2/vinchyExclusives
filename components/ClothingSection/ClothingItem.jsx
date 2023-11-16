import styles from './ClothingItem.module.scss';

function Clothes({imgSrc, name, price}) {
   

 

    return (
       <div className={styles.clothesCard}>
       <img className={styles.image} src={imgSrc}/>  
       <h2 className={styles.name}> {name}</h2>
       <p className={styles.price}> {price}</p>
       </div>
    );
}

export default Clothes;